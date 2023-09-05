import React, { FunctionComponent, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, Button } from 'react-native'
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
import * as ImagePicker from 'expo-image-picker';
import UploadFiles from '../../../components/clubsView/uploadFiles/UploadFiles'

import { RootStackParamList } from "../../../navigation/navigator/RootNavigator";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "createClub">;
interface FormValues {
  name: string;
  type: string;
  email: string;
  clubLogo: string | null;
  file: File | null;
}

const validationSchema = Yup.object({
    name: Yup.string().required("Club Name is Required"),
    type: Yup.string().required("Club type is Required"),
    email: Yup.string().required("Club Email is Required"),
    // file: Yup.mixed().required('File is required'),
  });

const handlePress = async (values: FormValues) => {
    console.log(values)
    // alert("Hello");
}


const CreateClub: FunctionComponent<Props> = () => {
  const [clubLogo, setClubLogo] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const initialValues: FormValues = {
    name: "",
    type: "",
    email: "",
    clubLogo: null,
    file: null,
  };

  const handleClubLogoUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
    //   console.log(result.assets[0].uri);
  
      if (!result.canceled && result.assets !== null) {
        console.log(result.assets[0].uri);
        // setClubLogo(result.assets[0].uri);
      }
  };


  return (
    <SafeAreaView>
        <View style={{flexDirection: "row", alignItems: "center", gap: 180}}>
          <TopBar titleBarName="Create a Club" />
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
            alignItems: "center",
          }}
        >
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
                <View
                    style={{
                    marginTop: 70,
                    alignItems: "center",
                    }}
                >

                    {/* Rounded input field for file upload */}
                    <TouchableOpacity
                    onPress={handleClubLogoUpload}
                    style={{
                        marginTop: 0,
                        alignItems: "center",
                        backgroundColor: "transparent",
                        borderRadius: 100,
                        padding: 2,
                        borderWidth: 1,
                        borderColor: "#87929D",
                        width: 110, 
                        height: 110, 
                        justifyContent: "center",
                    }}
                    >
                    {clubLogo ? (
                        <Image source={{ uri: clubLogo }} style={{ width: 100, height: 100, borderRadius: 100 }} />
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
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "transparent",
                            borderRadius: 20,
                            padding: 2,
                        }}
                    >
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
                        style={{
                            marginTop: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "transparent",
                            borderRadius: 20,
                            padding: 2,
                        }}
                    >
                        <Field
                            component={InputField}
                            error={touched.type && errors.type}
                            iconComponent={
                            <LocateFixed
                                color={
                                touched.type && errors.type
                                    ? "#CC3535"
                                    : "#B8B8B8"
                                }
                                size={24}
                            />
                            }
                            name="type"
                            placeholder="Club Type"
                            onChangeText={handleChange("type")}
                            value={values.type}
                            onBlur={handleBlur("type")}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "transparent",
                            borderRadius: 20,
                            padding: 2,
                        }}
                    >
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

                    <View style={{
                            marginTop: 12,
                            padding: 2,
                        }}>
                        <NameSemiboldNormal>Club Verification</NameSemiboldNormal>
                        <SmallerRegular>Upload the Club Certificate / Official Document for Verification</SmallerRegular>
                    </View>

                    {/* uploading files */}
                    <Field 
                        component={UploadFiles} 
                        icon={<UploadCloud color={
                            touched.file && errors.file
                                ? "#CC3535"
                                : "#B8B8B8"
                            } size={35} />}
                        name="file" 
                        onChangeText={handleChange("file")}
                        uploadedFile={uploadedFile} // Pass the uploaded file state
                        setUploadedFile={setUploadedFile}
                        value={values.file}
                        onBlur={handleBlur("file")}
                        error={errors.file}
                    />
                    

                    {/* backend error handling */}
                    <View
                    style={{
                        marginTop: 8,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
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
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: 330,
                    }}
                    >
                    <RegularButton onPress={handleSubmit}>
                        <Text style={{ color: "#FEFEFE" }}>Continue</Text>
                    </RegularButton>
                    </View>
                </View>
                
            )}

            </Formik>
            <View style={{
                        marginTop: 20,
                        alignItems: "center",
                    }}>
                <SmallerRegular>By creating this club, you will obtain Admin access to this club. </SmallerRegular>
                <SmallerRegular>You can assign other Admins after verification of the account</SmallerRegular>
            </View>
        </View>
       
    </SafeAreaView>
    
  )
}

export default CreateClub