import React, { FunctionComponent, useState} from 'react'
import * as DocumentPicker from 'expo-document-picker';
import { useFormikContext, Field } from 'formik';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import SmallestLabelsRegular from '../../../constants/fonts/SmallestLabelsRegular';
import RegularNormal from '../../../constants/fonts/RegularNormal';

interface UploadFilesProps{
    icon: string;
    error?: string;
    style?: object;
}

const UploadFiles: FunctionComponent<UploadFilesProps> = ({icon, error, style = {},}) => {
  const { setFieldValue } = useFormikContext();
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);


  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({
          type: "application/pdf", // for pdf files
          copyToCacheDirectory: true, // ensures compatibility with 'expo-file-system'
      });

      console.log("doc: ", doc);
      console.log("doc.assets: ", doc.assets)
  
      // if (!doc.canceled) {
      //   console.log(doc);
      // }

      if (!doc.canceled && doc.assets !== null) {
        console.log(doc.assets[0].uri);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };
  

  return (
    <TouchableOpacity onPress={selectDoc}>
      <View 
          style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "transparent",
              borderRadius: 20,
              padding: 2,
          }}
      >
          <View
          style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              borderWidth: 1,
              borderRadius: 15,
              marginBottom: 2,
              padding: 10,
              width: 320,
              borderColor: "#87929D",

            }}
          >
              {icon}
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
              {/* {uploadedFile ? (
                <Text style={{ color: 'green' }}>File Uploaded: {uploadedFile}</Text>
                ) : (
                <Text style={{ color: 'red' }}>No File Uploaded</Text>
                )
              } */}
          <View style={{marginLeft: 10}}>
              <RegularNormal fontColor='#87929D'>Upload file</RegularNormal>
              <SmallestLabelsRegular fontColor='#87929D'>PDF,JPG,PNG</SmallestLabelsRegular>
          </View>
              
          </View>
          
      </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    errorText: {
        color: "#CC3535",
        fontSize: 12,
        marginTop: 0,
        marginLeft: 4,
        // fontFamily: "Switzer Variable",
      },
})


export default UploadFiles