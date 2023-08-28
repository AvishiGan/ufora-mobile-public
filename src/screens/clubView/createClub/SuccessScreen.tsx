import React from 'react'
import { View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../../components/profile/TopBar'
import { PageTitleSemibold, RegularBig } from '../../../constants'
import RegularButton from '../../../components/authentication/buttons/RegularButton'
import SuccessLogo from '../../../components/clubsView/successLogo/SuccessLogo'

const handleNext = () => {}

const SuccessScreen = () => {
  return (
    <SafeAreaView>
        <View style={{flexDirection: "row", alignItems: "center", gap: 180}}>
          <TopBar titleBarName="Success" />
        </View>
        
        <View style={{marginTop: 70, alignItems: "center", justifyContent: "center"}}>
            <View>
                <SuccessLogo/>
            </View>
            <View style={{marginTop: 30}}>
                <PageTitleSemibold>Club Creating Request Sent</PageTitleSemibold>
            </View>
            <View style={{marginTop: 10, alignItems: "center", justifyContent: "center"}}>
                <RegularBig>We will notify you when the account has been created!</RegularBig>
            </View>

            {/* Button */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 330,
                    marginTop: 300
                }}
                >
                <RegularButton onPress={handleNext}>
                    <Text style={{ color: "#FEFEFE" }}>Continue</Text>
                </RegularButton>
            </View>
        </View>
        
    </SafeAreaView>
  )
}

export default SuccessScreen