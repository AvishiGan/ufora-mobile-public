import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { Formik, Field, FormikProps } from "formik";
import { AlignLeft, CalendarDays, PhoneCall } from "lucide-react-native";

import InputField from "../../../authentication/inputField/InputField";
import { COLORS } from "../../../../constants";
import { styles } from "../styles";

interface FormValues {
  intro: string;
  dob: string;
  mobileNo: string;
}

interface Props {
  initialValues: FormValues;
  validationSchema: any;
  errorMessage?: string;
  handleCreateStudentAcc: (values: FormValues) => void;
  handleBack: () => void;
}

const FormComponent: React.FC<Props> = ({
  initialValues,
  validationSchema,
  errorMessage,
  handleCreateStudentAcc,
  handleBack,
}) => {
  const renderInputField = (
    intro: keyof FormValues,
    placeholder: string,
    IconComponent: React.ReactNode,
    touched: FormikProps<FormValues>["touched"],
    errors: FormikProps<FormValues>["errors"],
    handleChange: FormikProps<FormValues>["handleChange"],
    handleBlur: FormikProps<FormValues>["handleBlur"],
    values: FormikProps<FormValues>["values"]
  ) => (
    <View style={styles.fieldContainer}>
      <Field
        component={InputField}
        error={touched[intro] && errors[intro]}
        iconComponent={React.cloneElement(IconComponent as React.ReactElement, {
          style: {
            color:
              touched[intro] && errors[intro] ? COLORS.red : COLORS.placeHolder,
          },
        })}
        intro={intro}
        placeholder={placeholder}
        onChangeText={handleChange(intro)}
        value={values[intro]}
        onBlur={handleBlur(intro)}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={5}
      behavior="padding"
      style={styles.container}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleCreateStudentAcc}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
        }) => (
          <View style={styles.container}>
            {renderInputField(
              "intro",
              "A small introduction to yourself",
              <AlignLeft size={24} />,
              touched,
              errors,
              handleChange,
              handleBlur,
              values
            )}
            {renderInputField(
              "dob",
              "01/01/2000",
              <CalendarDays size={24} />,
              touched,
              errors,
              handleChange,
              handleBlur,
              values
            )}
            {renderInputField(
              "mobileNo",
              "+94 77 123 1234",
              <PhoneCall size={24} />,
              touched,
              errors,
              handleChange,
              handleBlur,
              values
            )}

            <View style={styles.fieldContainer}>
              {errorMessage && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              )}
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default FormComponent;
