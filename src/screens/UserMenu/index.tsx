import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from "../../constants";
import { ButtonMedium, CardHeadingBold, SemiboldBig } from "../../constants/fonts";
import { MessageSquarePlus, FileText, FolderKanban, PersonStanding, Sprout, GraduationCap, Shapes, CalendarRange, HeartHandshake, BarChart3, BadgeHelp, Settings, Building2, Briefcase } from "lucide-react-native";
import menuStyles from "./userMenuStyles.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigator/RootNavigator";
import { useNavigation } from "@react-navigation/native";

export type MoreScreenProps =
  NativeStackNavigationProp<RootStackParamList>;


interface UserMenuProps {
  navigation: any;
}

const UserMenu: React.FC<UserMenuProps> = ({ navigation }) => {

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth-26;

  const handleBlog = () => {
    navigation.navigate('BlogCentre');
  };

  const handleProject = () => {
    const navigation = useNavigation<MoreScreenProps>();
    navigation.navigate('ProjectCentre');
  };
//   style={{marginTop: -30}}
  return (
    <SafeAreaView style = {{flex: 1, gap: 25}}>
        <ScrollView>
            <View style={{...menuStyles.menuContainer, width: cardWidth}}>
                <View style={menuStyles.myProfiles}>
                    <CardHeadingBold><Text style={{color: COLORS.brandGrey}}>My Profiles</Text></CardHeadingBold>
                    
                </View>
                <View style={menuStyles.shortcutsWrap}>
                    <CardHeadingBold><Text style={{color: COLORS.brandGrey}}>Shortcuts</Text></CardHeadingBold>
                    <View style={menuStyles.shortcuts}>
                        <View style={{...menuStyles.shortcutRow, width: cardWidth}}>
                            <SemiboldBig><Text style={{color: COLORS.brandGrey}}>Quick Access</Text></SemiboldBig>
                            <View style={menuStyles.innerRow}>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <MessageSquarePlus size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Forums</Text></ButtonMedium>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}} onPress={handleBlog}>
                                    <FileText size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Blogs</Text></ButtonMedium>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}} onPress={handleProject}>
                                    <FolderKanban size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Projects</Text></ButtonMedium>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{...menuStyles.shortcutRow, width: cardWidth}}>
                            <SemiboldBig><Text style={{color: COLORS.brandGrey}}>University Icons</Text></SemiboldBig>
                            <View style={menuStyles.innerRow}>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <PersonStanding size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>My Groups</Text></ButtonMedium>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <Sprout size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Mentorship</Text></ButtonMedium>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <GraduationCap size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Universities</Text></ButtonMedium>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{...menuStyles.shortcutRow, width: cardWidth}}>
                            <SemiboldBig><Text style={{color: COLORS.brandGrey}}>Club Icons</Text></SemiboldBig>
                            <View style={menuStyles.innerRow}>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <HeartHandshake size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>My Clubs</Text></ButtonMedium>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <Shapes size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>All Clubs</Text></ButtonMedium>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <CalendarRange size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Events</Text></ButtonMedium>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{...menuStyles.shortcutRow, width: cardWidth}}>
                            <SemiboldBig><Text style={{color: COLORS.brandGrey}}>Business Actions</Text></SemiboldBig>
                            <View style={menuStyles.innerRow}>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <Building2 size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Businesses</Text></ButtonMedium>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                    <Briefcase size={24} color={COLORS.brandGrey}/>
                                    <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Jobs</Text></ButtonMedium>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{...menuStyles.shortcutRow, width: cardWidth}}>
                        <SemiboldBig><Text style={{color: COLORS.brandGrey}}>Settings and Usage</Text></SemiboldBig>
                        <View style={menuStyles.innerRow}>
                            <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                <BarChart3 size={24} color={COLORS.brandGrey}/>
                                <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Productivity</Text></ButtonMedium>
                            </TouchableOpacity>
                            <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}} onPress={() => navigation.navigate("Welcome")}>
                                <Settings size={24} color={COLORS.brandGrey}/>
                                <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}} >Logout</Text></ButtonMedium>
                            </TouchableOpacity>
                            <TouchableOpacity style={{...menuStyles.innerRowWrap, width: (cardWidth-50)/3}}>
                                <BadgeHelp size={24} color={COLORS.brandGrey}/>
                                <ButtonMedium><Text style={{textAlign: "center", color: COLORS.brandGrey}}>Support</Text></ButtonMedium>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );  
}

export default UserMenu;
