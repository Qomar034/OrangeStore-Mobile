import { Image, StyleSheet, Text, View } from "react-native";

export default function MenuButton({pressed, text1, text2, image}){
    return ( pressed 
    ?   <>
    <View style={styles.iconContainer}>
      <Image 
        source={image}
        style={styles.icon} ></Image>
    </View>
    <Text style={styles.text9}>{text1}</Text>
    <Text style={styles.text9}>{text2}</Text>
    </>
    :   <>
    <View style={styles.iconContainer}>
      <Image 
        source={image}
        style={styles.icon} ></Image>
    </View>
    <Text style={styles.text8}>{text1}</Text>
    <Text style={styles.text8}>{text2}</Text>
    </>)
}

const styles = StyleSheet.create({
    menuBox: {
      width: "90%",
      height: "150%",
      backgroundColor: "transparent",
      flexDirection: "column",
      position: 'relative',
      left: "5%",
      marginTop: 40,
    },
  
    menuRow: {
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
      height: 130,
      backgroundColor: "transparent",
      flexWrap: "wrap"
    },
  
    menu: {
      width: 110,
      height: 110,
      backgroundColor: "white",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
  
      borderRadius: 15,
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 3,
    },
  
    menuPressed: {
      width: 110,
      height: 110,
      backgroundColor: "#ff6823",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
  
      borderRadius: 15,
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 3,
    },
  
    iconContainer: {
      width: "40%",
      height: "45%",
      backgroundColor: "white",
      borderRadius: 50,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
  
    icon: {
      width: "75%",
      height: "75%",
    },
  
    text8: {
      color: "#ff6823",
      fontSize: 15,
      textAlign: "center",
    },
  
    text9: {
      color: "white",
      fontSize: 15,
      textAlign: "center",
    },
  
    notificationBox: {
      width: 35,
      height: 35,
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      right: 10,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
  
    notificationBoxPressed: {
      width: 35,
      height: 35,
      backgroundColor: "white",
      position: "absolute",
      top: 2,
      right: 10,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
  
    notification: {
      width: "45%",
      height: "45%",
    }
  });
  