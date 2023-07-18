import React, { useState } from 'react'
import { StatusBar, View, Text, TouchableOpacity } from 'react-native'
import Logo from '../../components/logo/Logo'
import logo from "../../../assets/logo.png"
import Icon from 'react-native-vector-icons/FontAwesome';
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
//import Dropdown from '../../components/dropdown/dropdown';


const SelectUniversity = () => {
    const [uniName, setUniname] = useState("");
    const [uniEmail, setUniemail] = useState("");

    const [isChecked, setIsChecked] = useState(false);

    const handleUniNameChange = (text: string) => {
        setUniname(text);
    };

    const handleUniEmailChange = (text: string) => {
        setUniemail(text);
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
        <View style={{ paddingHorizontal: 10, marginTop: 240 ,alignItems: "center"}}>
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            
            {/*<Dropdown/>*/}
            
            <InputField
                imageSource={require('../../../assets/icons/gradcap.png')}
                placeholder="University of Colombo"
                value={uniName}
                onChangeText={handleUniNameChange}
            />
            </View>

            <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
                imageSource={require('../../../assets/icons/mail.png')}
                placeholder="samanp@stu.ucsc.cmb.ac.lk"
                value={uniEmail}
                onChangeText={handleUniEmailChange}
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
                <RegularButton onPress={() => {}}>
                    <Text style={{ color: "#FEFEFE" }}>Next</Text>
                </RegularButton>
            </View>
            <View style={{ marginTop: 18, alignItems: 'center',flexDirection: 'row'}}>
                <RegularNormal>
                    <Text style={{ alignItems: 'center'}}>Can't find your university?</Text>
                </RegularNormal>
                <TouchableOpacity onPress={{}}>
                    <View>
                    <RegularNormal>
                        <Text style={{ color: '#2656FF' }}>Contact Support</Text>
                    </RegularNormal>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    </>
  )
}

export default SelectUniversity