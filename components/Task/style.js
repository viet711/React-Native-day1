import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
      item: {
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between"
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: "#33CCFF",
        alignItems: "center",
        justifyContent: "center",
      },
      even : {
        backgroundColor : "green",

      },
      old : {
        backgroundColor : "#33CCFF"

      },
      number: {
        fontSize: 16, // Fixed the typo here
        fontWeight: "700",
        color: "#FFFFFF",
      },
      content: {
        width: "80%",
        fontSize: 16,
      },
     
})
export default styles;