import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { ButtonMedium, RegularBig } from '../../../constants/fonts';
import {  COLORS, SIZES } from "../../../constants";
import { ImagePlusIcon } from 'lucide-react-native';

const AddBlog = () => {

  const screenWidth = Dimensions.get('window').width;

  const webViewRef = useRef<WebView | null>(null);

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
      </script>
    </body>
    </html>
  `;

  const handleWebViewMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log('Editor content:', data);
    // You can now use the data as needed (e.g., send it to a server)
  };

  return (
    <View style={{ flex: 1, marginHorizontal: SIZES.marginSide, marginBottom: 25, gap: 25, }}>
      <WebView
        ref={webViewRef}
        source={{ html: editorHTML }}
        onMessage={handleWebViewMessage}
        style={{backgroundColor: '#F2F2F2', marginHorizontal: -10}}
      />
      <TouchableOpacity
        style={{backgroundColor: COLORS.brandWhite, padding: 10, width:(screenWidth-26)/10, alignItems:"center", borderRadius: 5 }}
        onPress={() => {
          if (webViewRef.current) {
            const input = 'document.querySelector(".ce-image-input").click()';
            webViewRef.current.injectJavaScript(input);
          }
        }}
      >
        <ImagePlusIcon size={24} color={COLORS.brandBlack}/>
        {/* <ButtonMedium><Text style={{color: COLORS.brandBlack}}>Add Image</Text></ButtonMedium> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (webViewRef.current) {
            webViewRef.current.injectJavaScript(`
              const outputData = window.editor.save();
              window.ReactNativeWebView.postMessage(JSON.stringify(outputData));
            `);
          }
        }}
        style={{backgroundColor: COLORS.brandBlue, paddingHorizontal: 20, paddingVertical: 10, width:(screenWidth-26)/2, alignItems:"center", borderRadius: 5 }}
      >
        <RegularBig><Text style={{color: COLORS.brandWhite}}>Save Content</Text></RegularBig>
      </TouchableOpacity>
    </View>
  );
};

export default AddBlog;
