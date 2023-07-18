import React, { useState } from 'react'
import { StatusBar, View, Text, TouchableOpacity } from 'react-native'
import Logo from '../../components/logo/Logo'
import logo from "../../../assets/logo.png"
import RegularButton from '../../components/buttons/RegularButton'
import RegularNormal from '../../constants/fonts/RegularNormal'
import InputField from '../../components/inputField/InputField'
import RegularSmall from '../../constants/fonts/RegularSmall'
import SmallButton from '../../components/buttons/SmallButton'
import UnfilledButton from '../../components/buttons/UnfilledButton'
import Authentication, {
    handlePressGoogle,
    handlePressApple,
  } from "../../components/auth/Authentication";

const CreateStudentAccount = () => {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleNameChange = (text: string) => {
        setName(text);
    };

    const handleUsernameChange = (text: string) => {
        setUsername(text);
    };

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
            <Logo source={logo} mainText="Create Account" subText="Create a Student Account " />
        </View>

        {/* Bottom section */}
        <View style={{ paddingHorizontal: 10, marginTop: 72 ,alignItems: "center"}}>
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/person-standing.png')}
                placeholder="Saman Perera"
                value={name}
                onChangeText={handleNameChange}
            />
            </View>

            <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/mail.png')}
                placeholder="samanperera@gmail.com"
                value={email}
                onChangeText={handleEmailChange}
            />
            </View>

            <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/user.png')}
                placeholder="SamanPerera"
                value={username}
                onChangeText={handleUsernameChange}
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
                style={{flexDirection: "row",marginTop: 20,alignItems: "center", width: 340, gap:10}}
            >
                <UnfilledButton onPress={() => {}}>
                    <Text style={{ color: "#2656FF" }}>Back</Text>
                </UnfilledButton>
                <SmallButton onPress={() => {}}>
                    <Text style={{ color: "#FEFEFE" }}>Next</Text>
                </SmallButton>
            </View>
            <View style={{ marginTop: 18, alignItems: 'center',flexDirection: 'row'}}>
                <RegularNormal>
                    <Text style={{ alignItems: 'center'}}>Don't have an account?</Text>
                </RegularNormal>
                <TouchableOpacity onPress={{}}>
                    <View>
                    <RegularNormal>
                        <Text style={{ color: '#2656FF' }}>Create Account</Text>
                    </RegularNormal>
                    </View>
                </TouchableOpacity>
            </View>
            <Authentication
                onPressGoogle={handlePressGoogle}
                onPressApple={handlePressApple}
            />
        </View>
        
    </>
  )
}

export default CreateStudentAccount