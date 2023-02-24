import { Image, StyleSheet, Text, View } from "react-native";

export default function MenuButton({pressed, text1, text2, image}){
    return ( pressed 
    ?   <>
        <View style={styles.iconContainer}>
            <Image 
              source={image}
              style={styles.icon} ></Image>
        </View>
        <Text style={styles.titleText}>
            {text1}</Text>
        <Text style={styles.titleText}>
            {text2}</Text>
    </>
    :   <>
        <View style={styles.iconContainer}>
            <Image 
              source={image}
              style={styles.icon} ></Image>
        </View>
        <Text style={styles.titlePressed}>
            {text1}</Text>
        <Text style={styles.titlePressed}>
            {text2}</Text>
    </>)
}

const styles = StyleSheet.create({
    iconContainer: {
        width: "40%",
        height: "45%",
        backgroundColor: "white",
        borderRadius: 50,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: { 
        width: "75%", 
        height: "75%", 
    },
  
    titleText: { 
        color: "white", 
        fontSize: 15, 
        textAlign: "center", 
    },
    titlePressed: { 
        color: "#ff6823", 
        fontSize: 15, 
        textAlign: "center", 
    },
  });
  