import { UserPlus2 } from "lucide-react-native";
import React, { ReactNode } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { COLORS, NameSemiboldNormal, SemiboldBig } from "../../../constants";

import { styles } from "./styles";
import { FileData } from "../../../models";

interface InputField {
  label: string;
  icon: ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

interface Props {
  imagePlaceholderText: string;
  formTitle: string;
  fields: InputField[];
  includeButton: boolean;
  handleMediaSelection?: () => void; // Pass this function from the parent component
  handleSubmit?: () => void;
  selectedMedia: FileData | null;
}

const CustomForm: React.FC<Props> = ({
  imagePlaceholderText,
  formTitle,
  fields,
  includeButton,
  handleMediaSelection,
  handleSubmit,
  selectedMedia,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      keyboardVerticalOffset={255}
      style={styles.profilePicAndFormContainer}
    >
      <TouchableOpacity onPress={handleMediaSelection}>
        {selectedMedia ? (
          <Image
            source={{ uri: selectedMedia.uri }}
            style={styles.profilePicContainer}
          />
        ) : (
          <View style={styles.profilePicContainer}>
            <UserPlus2 size={40} color={COLORS.placeHolder} />
            <Text style={styles.uploadPhotoText}>{imagePlaceholderText}</Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.titleAndFormContainer}>
        <View style={styles.formTitle}>
          <NameSemiboldNormal>{formTitle}</NameSemiboldNormal>
        </View>

        <View style={styles.titleAndFormContainer}>
          {fields.map((field, index) => (
            <View style={styles.inputFieldOuterContainer} key={index}>
              <Text style={styles.inputLabel}>{field.label}</Text>
              <View style={styles.iconAndTextInputContainer}>
                {field.icon}
                <TextInput
                  placeholder={field.placeholder}
                  value={field.value}
                  onChangeText={field.onChange}
                />
              </View>
            </View>
          ))}

          {includeButton && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <SemiboldBig fontColor={COLORS.brandWhite}>
                  Continue
                </SemiboldBig>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CustomForm;
