import React, { FunctionComponent, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, Button, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { NameSemiboldNormal, RegularNormal, RegularSmall, SmallerRegular, SmallestLabelsRegular } from '../../../constants'
import TopBar from '../../../components/profile/TopBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import RegularButton from '../../../components/authentication/buttons/RegularButton'
import { Field, Formik } from 'formik'
import InputField from '../../../components/authentication/inputField/InputField'
import { Shapes } from 'lucide-react-native'
import { LocateFixed } from 'lucide-react-native'
import * as Yup from "yup";
import { Mail } from 'lucide-react-native'
import { UploadCloud } from 'lucide-react-native'
import { ImagePlus } from 'lucide-react-native'

import { RootStackParamList } from "../../../navigation/navigator/RootNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { FileData } from '../../../models'
import { selectMediaFromDevice } from '../../../utils/fileUtils'
import { uploadMediaToImageKit } from '../../../services/imagekit'
import axios from 'axios'
type Props = StackScreenProps<RootStackParamList, "createClub">;
interface FormValues {
  username: string,
  name: string;
  club_type: string;
  email: string;
  profile_pic: string | null;
  club_verification_file: string;
  error?: string;
}

const validationSchema = Yup.object({
    username: Yup.string().required("Username is Required"),
    name: Yup.string().required("Club Name is Required"),
    club_type: Yup.string().required("Club type is Required"),
    email: Yup.string().required("Club Email is Required"),
    // club_verification_file: Yup.string().required('File is required'),
  });

const CreateClub: FunctionComponent<Props> = ({ navigation }) => {
  const [profile_pic, setProfilePic] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedMedia, setSelectedMedia] = useState<FileData | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);

  const initialValues: FormValues = {
    username: "",
    name: "",
    club_type: "",
    email: "",
    profile_pic: "",
    club_verification_file: "",
  };


    const handleImageSelction = async () => {
        try {
            const fileData = await selectMediaFromDevice(1);
            if (fileData.length) setSelectedMedia(fileData[0]);
            // console.log(fileData)
          } catch (error) {
            console.log("Error selecting media", error);
          }
    };

    const handleFileSelection = async () => {
        try {
            const fileData = await selectMediaFromDevice(1);
            if (fileData.length) setSelectedFile(fileData[0]);
            // console.log(fileData)
          } catch (error) {
            console.log("Error selecting media", error);
          }
    };

    const uploadImageToImageKit = async (): Promise<string> => {
        if (!selectedMedia) return Promise.reject("No media selected");
        try {
          const imageKitResponse = await uploadMediaToImageKit(selectedMedia);
          return Promise.resolve(imageKitResponse.url);
        } catch (error) {
          console.log("Error uploading file to ImageKit", error);
          return Promise.reject(error);
        }
      };

      const uploadFileToImageKit = async (): Promise<string> => {
        if (!selectedFile) return Promise.reject("No media selected");
        try {
          const imageKitResponse = await uploadMediaToImageKit(selectedFile);
          return Promise.resolve(imageKitResponse.url);
        } catch (error) {
          console.log("Error uploading file to ImageKit", error);
          return Promise.reject(error);
        }
      };



      const handlePress = async (values: FormValues) => {
        try {
        const imageUrl = await uploadImageToImageKit();
        values.profile_pic = imageUrl;
        console.log(imageUrl)

        const fileUrl = await uploadFileToImageKit();
        values.club_verification_file = fileUrl
        console.log(fileUrl)
        // console.log("ImageUrl: ", imageUrl);
        } catch (error) {
        console.error("Error uploading file to ImageKit", error);
        }
        console.log(values);

        try{
            const response = await axios.post("http://192.168.1.5:3000/api/club/create", {
                username: values.username,
                name: values.name,
                club_type: values.club_type,
                email: values.email,
                club_verification_file: values.club_verification_file,
                profile_pic: values.profile_pic
            }, {headers : {
                'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWZ5OTJ1Y2g2OWk2OHVkd2Z5dGEiLCJ1c2VyX3R5cGUiOiJ1bmRlcmdyYWR1YXRlIiwiaWF0IjoxNjkyMTI1MDg4LCJleHAiOjE2OTQ3MTcwODgsInVzZXJuYW1lIjpudWxsfQ.yinLBy2sx0gAW5jvWJrv_EFfnvUShA0ylKckUNWGhU0"
            }
        });
            console.log("API Response: ", response.data);
            console.log("API Response: ", response.status)
            const token = response.data.token;
            navigation.navigate("clubOTP", {
                token: token
              });
        } catch(error: any){
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


    }


  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-125} behavior="padding" style={styles.container}>
        
        <View style={{flexDirection: "row", alignItems: "center", gap: 180}}>
          <TopBar titleBarName="Create a Club" />
        </View>

        <View style={{paddingHorizontal: 10, marginTop: 10, alignItems: "center", }} >
            <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handlePress}>
                {({
              handleChange,
              handleSubmit,
              values,
              errors,
              handleBlur,
              touched,
            }) => (
                <View>
                            
                {/* Input field for uploading profile picture */}
                <View style={{ marginTop: 20, alignItems: "center", }} >

                    {/* Rounded input field for file upload */}
                    <TouchableOpacity
                    onPress={handleImageSelction}
                    style={{ marginTop: 0, alignItems: "center", backgroundColor: "transparent", borderRadius: 100, padding: 2, borderWidth: 1, borderColor: "#87929D", width: 110,  height: 110, justifyContent: "center", }} >
                    {profile_pic ? (
                        <Image source={{ uri: profile_pic }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                        ) : (
                        <>
                            {/* Icon or text to indicate file upload */}
                            <ImagePlus
                            color={"#B8B8B8"}
                            size={35}
                            />
                            <Text style={{ color: "#B8B8B8" }}>Club Logo</Text>
                        </>
                        )}
                    </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20, padding: 10,}}>
                        <NameSemiboldNormal>Basic Club Information</NameSemiboldNormal>
                    </View>
                    
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                    <Field
                        component={InputField}
                        error={touched.username && errors.username}
                        iconComponent={
                        <Shapes
                            color={
                            touched.username && errors.username ? "#CC3535" : "#B8B8B8"
                            }
                            size={24}
                        />
                        }
                        name="username"
                        placeholder="Username"
                        onChangeText={handleChange("username")}
                        value={values.username}
                        onBlur={handleBlur("username")}
                    />
                    </View>
                    
                    
                    <View style={{ marginTop: 8,  flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                    <Field
                        component={InputField}
                        error={touched.name && errors.name}
                        iconComponent={
                        <Shapes
                            color={
                            touched.name && errors.name ? "#CC3535" : "#B8B8B8"
                            }
                            size={24}
                        />
                        }
                        name="name"
                        placeholder="Club Name"
                        onChangeText={handleChange("name")}
                        value={values.name}
                        onBlur={handleBlur("name")}
                    />
                    </View>
                    <View
                        style={{ marginTop: 8, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                        <Field
                            component={InputField}
                            error={touched.club_type && errors.club_type}
                            iconComponent={
                            <LocateFixed
                                color={
                                touched.club_type && errors.club_type
                                    ? "#CC3535"
                                    : "#B8B8B8"
                                }
                                size={24}
                            />
                            }
                            name="club_type"
                            placeholder="Club Type"
                            onChangeText={handleChange("club_type")}
                            value={values.club_type}
                            onBlur={handleBlur("club_type")}
                        />
                    </View>
                    <View
                        style={{ marginTop: 8, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                        <Field
                            component={InputField}
                            error={touched.email && errors.email}
                            iconComponent={
                            <Mail
                                color={
                                touched.email && errors.email
                                    ? "#CC3535"
                                    : "#B8B8B8"
                                }
                                size={24}
                            />
                            }
                            name="email"
                            placeholder="Club Email"
                            onChangeText={handleChange("email")}
                            value={values.email}
                            onBlur={handleBlur("email")}
                        />
                    </View>

                    <View style={{ marginTop: 12, padding: 2, }}>
                        <NameSemiboldNormal>Club Verification</NameSemiboldNormal>
                        <SmallerRegular>Upload the Club Certificate / Official Document for Verification</SmallerRegular>
                    </View>

                    {/* uploading files */}

                <TouchableOpacity onPress={handleFileSelection}>
                    <View 
                        style={{ marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                        <View
                        style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderWidth: 1, borderRadius: 15, marginBottom: 2, padding: 10, width: 320, borderColor: "#87929D", }} >
                            <UploadCloud color={
                                touched.club_verification_file && errors.club_verification_file
                                    ? "#CC3535"
                                    : "#B8B8B8"
                                } size={35} />
                            {/* {error ? <Text style={styles.errorText}>{error}</Text> : null} */}
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
                    

                    {/* backend error handling */}
                    <View
                    style={{ marginTop: 8, flexDirection: "row", justifyContent: "space-between", }} >
                    <View style={{ marginLeft: 8 }}>
                        <RegularSmall>
                        {errorMessage ? (
                            <Text style={{ color: "#CC3535", fontSize: 12 }}>
                            {errorMessage}
                            </Text>
                        ) : null}
                        </RegularSmall>
                    </View>
                    </View>

                    {/* button */}
                    <View
                    style={{ flexDirection: "row", alignItems: "center", width: 330, }} >
                    <RegularButton onPress={handleSubmit}>
                        <Text style={{ color: "#FEFEFE" }}>Continue</Text>
                    </RegularButton>
                    </View>
                </View>
                
            )}

            </Formik>
            <View style={{ marginTop: 20, alignItems: "center", }}>
                <SmallerRegular>By creating this club, you will obtain Admin access to this club. </SmallerRegular>
                <SmallerRegular>You can assign other Admins after verification of the account</SmallerRegular>
            </View>
        </View>
       
    
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    errorText: {
        color: "#CC3535",
        fontSize: 12,
        marginTop: 0,
        marginLeft: 4,
        // fontFamily: "Switzer Variable",
      },
})

export default CreateClub