import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTab from '../components/BottomTab';
import NotificationCard from "../components/NotificationCard";

export default function Notification({setPage}){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.upperBox}>
                    <Pressable style={styles.returnBox} onPress={() => setPage('Home')}>
                        <Image 
                        source={require("../assets/before.png")}
                        style={styles.returnIcon} ></Image>
                    </Pressable>
                    <View style={styles.middleBox}>
                        <Text style={styles.headerText}>Notifikasi</Text>
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTextBig}>Notifikasi Saya</Text>
                    <View style={styles.readContainer}>
                        <Text style={styles.headerTextSmall}>Tandai Sudah Dibaca</Text>
                        <Image
                        source={require("../assets/read.png")} 
                        style={styles.readIcon}
                        ></Image>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <NotificationCard read={true}/>
                    <NotificationCard read={false}/>
                    <NotificationCard read={false}/>
                </View>
                <BottomTab setPage={setPage} page="Notification"/>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    upperBox: {
      width: "100%",
      height: 75,
      backgroundColor: "#ff6823",
      position: 'absolute',
      top: "0%",
      flexDirection: "column", 
      justifyContent: "center",
      alignItems: "center",
    },
    middleBox: {
      width: "100%",
      height: "50%",
      backgroundColor: "transparent",
      position: "relative",
      flexDirection: "row", 
      justifyContent: "center"
    },
  
    text1: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 2,
    },
  
    text2: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      marginVertical: 3,
    },
  
    text3: {
      color: "black",
      fontSize: 14,
      fontWeight: "bold",
      flex: 1,
    },
  
    text4: {
      marginLeft: 20,
      marginTop: 10,
      fontWeight: "bold"
    },
  
    text5: {
      marginLeft: 25,
      fontSize: 25,
      fontWeight: "bold"
    },
  
    text6: {
      fontSize: 15,
      fontWeight: "bold"
    },
  
    text7: {
      fontSize: 20,
      color: "tomato",
      fontWeight: "bold"
    },
  
    container2: {
      flex: 3,
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "transparent",
      marginTop: 5,
      width: "100%",
      height: "40%",
    },
  
    container3: {
      flex : 1,
      marginTop: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      width: "85%",
      height: "40%",
    },
  
    container4: {
      flex : 2,
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      width: "80%",
      height: "40%",
    },
    
    returnBox: {
      width: 35,
      height: 35,
      position: "absolute",
      top: 20,
      left: 10,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      borderRadius: 5,
      zIndex: 1000
    },
  
    returnIcon: {
      width: "60%",
      height: "60%",
      tintColor: "white"
    },
  
  
    headerText: {
      position: 'absolute',
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 3,
    },
  
    header: {
      marginTop: 20,
      paddingBottom: 10,
      width: "90%",
      height: 35,
      backgroundColor: "white",
      position: 'absolute',
      top: 75,
      flexDirection: "row", 
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#ff6823",
  },
  
  cardContainer: {
      position: "absolute",
      top: 130,
      width: "90%",
      height: 400,
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "transparent",
  },
  
  headerTextBig : {
      color: "#ff6823",
      fontSize: 18,
      fontWeight: "bold",
  },
  
  headerTextSmall: {
      color: "#ff6823",
      fontSize: 12,
      fontWeight: "bold",
  },
  
  readContainer: {
      flexDirection: "row",
      marginTop: 10,
  },
  
  readIcon: {
      marginHorizontal: 5,
      backgroundColor: "#ff6823",
      borderRadius: 50,
      width: 20, height: 20
  },
  });