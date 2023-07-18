import React, { useState } from 'react'
import { StatusBar, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
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
import SmallerRegular from '../../constants/fonts/SmallerRegular'

const CreateBusinessAccount = () => {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

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

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
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
        <View style={{ paddingHorizontal: 10, marginTop: 62 ,alignItems: "center"}}>
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/building.png')}
                placeholder="ABC Industries"
                value={name}
                onChangeText={handleNameChange}
            />
            </View>

            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/mail.png')}
                placeholder="contact@abcindustries.com"
                value={email}
                onChangeText={handleEmailChange}
            />
            </View>

            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/user.png')}
                placeholder="abcindustry"
                value={username}
                onChangeText={handleUsernameChange}
            />
            </View>

            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/password.png')}
                placeholder="*********"
                value={password}
                onChangeText={handlePasswordChange}
            />
            </View>
        </View>

        <View style={{ marginTop: 0, alignItems: 'center',flexDirection: 'row'}}>

         {/*Checkbox */}   
        <TouchableOpacity
            onPress={handleCheckboxChange}
            >
            <View style={{padding: 10}}>
                {isChecked ? (
                <Icon name="check-square" size={20} color="#2656FF" />
                ) : (
                <Icon name="square-o" size={20} color="gray" />
                )}
            </View>
        </TouchableOpacity>

            <SmallerRegular>
                <Text style={{ alignItems: 'center'}}>I agree to the</Text>
            </SmallerRegular>
            <TouchableOpacity onPress={{}}>
                <View>
                <SmallerRegular>
                    <Text style={{ color: '#2656FF' }}>Terms & conditions</Text>
                </SmallerRegular>
                </View>
            </TouchableOpacity>
            <SmallerRegular>
                <Text style={{ alignItems: 'center'}}>and the</Text>
            </SmallerRegular>
            <TouchableOpacity onPress={{}}>
                <View>
                <SmallerRegular>
                    <Text style={{ color: '#2656FF' }}>privacy policy</Text>
                </SmallerRegular>
                </View>
            </TouchableOpacity>
        </View>

            {/* Button */}
            <View
                style={{flexDirection: "row",marginTop: 10,alignItems: "center", width: 340, gap:10}}
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

export default CreateBusinessAccount