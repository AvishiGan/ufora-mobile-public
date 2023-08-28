import React, { ReactNode } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { COLORS, SemiBoldBig, NameSemiboldNormal } from "../../../constants";
import { styles } from "./styles";
import { UserPlus2 } from "lucide-react-native";

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
  handleSubmit?: () => void;
}

const CustomForm: React.FC<Props> = ({
  imagePlaceholderText,
  formTitle,
  fields,
  includeButton,
  handleSubmit,
}) => {
  return (
    <View style={styles.profilePicAndFormContainer}>
      <View style={styles.profilePicContainer}>
        <UserPlus2 size={40} color={COLORS.placeHolder} />
        <Text style={styles.uploadPhotoText}>{imagePlaceholderText}</Text>
      </View>

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
              <Pressable style={styles.button} onPress={handleSubmit}>
                <SemiBoldBig fontColor={COLORS.brandWhite}>
                  Continue
                </SemiBoldBig>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CustomForm;
