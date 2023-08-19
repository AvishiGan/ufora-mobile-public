import { StyleSheet } from "react-native";

/***********************************Complete create or edit profile styles****************************************************** */
export const styles = StyleSheet.create({
  profilePicAndFormContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    marginTop: "30%",
  },
  profilePicContainer: {
    display: "flex",
    width: 104,
    height: 104,
    // padding: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderRadius: 157,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#B8B8B8",
  },
  titleAndFormContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    justifyContent: "center",
  },
  uploadPhotoText: {
    fontFamily: "Switzer",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "500",
    color: "#B8B8B8",
  },
  errorMessage: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    marginLeft: -190,
  },
  formTitle: {
    marginBottom: 13,
    marginLeft: -190,
  },
  buttonContainer: {
    width: "90%",
    marginTop: 15,
  },

  /*************************************************Form component styles*************************************************** */
  container: {
    alignItems: 'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 2,
    marginTop: 8,
  },
  // errorMessage: {
  //   color: '#CC3535',
  //   fontSize: 12,
  // },
  // buttonContainer: {
  //   flexDirection: 'row',
  //   marginTop: 0,
  //   alignItems: 'center',
  //   width: 340,
  //   gap: 10,
  // },
});
