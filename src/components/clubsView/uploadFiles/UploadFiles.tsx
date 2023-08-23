import React from 'react'
import * as DocumentPicker from 'expo-document-picker';
import { useFormikContext, Field } from 'formik';
import { TouchableOpacity, View } from 'react-native';
import SmallestLabelsRegular from '../../../constants/fonts/SmallestLabelsRegular';
import RegularNormal from '../../../constants/fonts/RegularNormal';
import { UploadCloud } from 'lucide-react-native';

const UploadFiles = () => {
  const { setFieldValue } = useFormikContext();

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({
          type: "application/pdf", // for pdf files
          copyToCacheDirectory: true, // ensures compatibility with 'expo-file-system'
      });

      if (!doc.canceled) {
          console.log(doc);
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
              <UploadCloud
              color={"#B8B8B8"}
              size={35}
          />
          
          <View style={{marginLeft: 10}}>
              <RegularNormal fontColor='#87929D'>Upload file</RegularNormal>
              <SmallestLabelsRegular fontColor='#87929D'>PDF,JPG,PNG</SmallestLabelsRegular>
          </View>
              
          </View>
          
      </View>
      </TouchableOpacity>
  );
};


export default UploadFiles