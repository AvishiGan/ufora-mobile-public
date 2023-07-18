import React, { useState } from 'react'
import { StatusBar, View, Text, TouchableOpacity } from 'react-native'
import Logo from '../../components/logo/Logo'
import logo from "../../../assets/logo.png"
import RegularButton from '../../components/buttons/RegularButton'
import RegularNormal from '../../constants/fonts/RegularNormal'
import InputField from '../../components/inputField/InputField'
import RegularSmall from '../../constants/fonts/RegularSmall'

const ChangePassword = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (text: string) => {
        setemail(text);
    };

  return (
    <>
        <StatusBar />
        {/* welcome container */}
        <View>
            {/* Top section */}
            <Logo source={logo} mainText="Change Password" subText="Please enter a new password to continue " />
        </View>

        {/* Bottom section */}
        <View style={{ paddingHorizontal: 10, marginTop: 250 ,alignItems: "center"}}>
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/password.png')}
                placeholder="*********"
                value={password}
                onChangeText={handlePasswordChange}
            />
            </View>

            <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/password.png')}
                placeholder="*********"
                value={password}
                onChangeText={handlePasswordChange}
            />
            </View>
            
        </View>

            {/* Button */}
            <View
                style={{flexDirection: "row",marginTop: 30,alignItems: "center", width: 340}}
            >

                <RegularButton onPress={() => {}}>
                    <Text style={{ color: "#FEFEFE" }}>Next</Text>
                </RegularButton>
            </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                <TouchableOpacity onPress={{}}>
                <View>
                    <RegularNormal>
                        <Text style={{ color: '#2656FF' }}>Can't reset your password?</Text>
                    </RegularNormal>
                </View>
                </TouchableOpacity>
                </View>
            </View>
    </>
  )
}

export default ChangePassword