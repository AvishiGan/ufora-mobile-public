import React, { useRef, useState } from 'react';
import { View, Dimensions, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import {  COLORS, SIZES } from "../../../constants";
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { API_PATH } from '@env';

const AddBlog = () => {

  const screenWidth = Dimensions.get('window').width;

  const webViewRef = useRef<WebView | null>(null);

  const [title, setTitle] = useState('');

  const editorHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Editor.js Example</title>
      <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest/dist/editor.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script>
      <script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script>
      <script src="https://cdn.jsdelivr.net/npm/@editorjs/simple-image@latest"></script>
    </head>
    <body>
      <div id="editorjs"></div>
      <button id="save"style="background-color: ${COLORS.brandBlue}; padding: 10px 20px; color: ${COLORS.brandWhite}; border: none; border-radius: 5px; text-align: center; font-size: 16px; outline: none;">Save Content</button>
      <script>
        const editor = new EditorJS({
          holder: 'editorjs',
          tools: {
            header: Header,
            list: List,
            image: {
              class: SimpleImage,
              config: {
                uploader: {
                  uploadByFile(file) {
                    const formData = new FormData();
                    formData.append('image', file);
                    return fetch('', {
                      method: 'POST',
                      body: formData,
                    })
                    .then((response) => response.json())
                    .then((data) => ({
                      success: 1,
                      file: {
                        url: data.imageUrl,
                      },
                    }));
                  },
                },
              },
            },
          },
        });

        document.getElementById("save").addEventListener("click", function() {
          editor.save().then((data) => {
            window.ReactNativeWebView.postMessage(JSON.stringify(data));
          })
        });
      </script>
    </body>
    </html>
  `;

  const handleWebViewMessage = async (event: any) => {
    try {
        const token = await SecureStore.getItemAsync('token');
        console.log(token)
        const data = JSON.parse(event.nativeEvent.data);
      if (data.error) {
        console.error('Received an error:', data.error);
      } else {
        if (!token) {
          console.error('Token not found in SecureStore.');
          return;
        }

        const response = await axios.post(`${API_PATH}/project/create`, {
          title: title,
          content: data,
        }, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        console.log('API response:', response.data);
        console.log('API response status:', response.status);
        console.log('Editor content:', data);
        console.log('Title:', title); // Log the entered title
        // Process the received data here, such as sending it to a server
        // or updating the React Native component's state
      }
    } catch (error: any) {
      console.error('Error processing WebView message:', error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        const errorMessage = `${JSON.stringify(error.response.data)}`
        alert(errorMessage);
        console.error("API error: ", error.response.data);
        console.error("API error status: ", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("API error: No response received");
        console.log(error);
      } else {
        // Something happened in setting up the request that triggered an Error
        const errorMessage = `${JSON.stringify(error.message)}`
        alert(errorMessage);
        console.error("API error: ", error.message);
      }
    }
  };
  
  
  return (
    <View style={{ flex: 1, marginHorizontal: SIZES.marginSide, marginBottom: 25, gap: 25, }}>
      <TextInput
                placeholder={'Your title here...'}
                placeholderTextColor={COLORS.placeHolder}
                value={title}
                onChangeText={setTitle}
                style={{
                  color: COLORS.brandBlack,
                  fontSize: 18,
                  fontWeight: '700', // Use string value for fontWeight
                }}
              />
      <WebView
        ref={webViewRef}
        source={{ html: editorHTML }}
        onMessage={handleWebViewMessage}
        //injectedJavaScript={`document.title = '${title.replace("'", "\\'")}';`}
        //originWhitelist={['*']}
        style={{backgroundColor: '#F2F2F2', marginHorizontal: -10}}
      />

    </View>
  );
};

export default AddBlog;