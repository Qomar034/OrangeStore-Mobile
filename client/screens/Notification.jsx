import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomTab from '../components/BottomTab';
import NotificationCard from "../components/NotificationCard";

export default function Notification({setPage}){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>

                <View style={styles.header}>
                    <Pressable 
                    onPress={() => setPage('Home')}
                    style={styles.returnBox}>
                        <Image 
                        source={require("../assets/before.png")}
                        style={styles.returnIcon}></Image>
                    </Pressable>

                    <View style={styles.headerTitle}>
                        <Text style={styles.headerText}>
                            Notifikasi</Text>
                    </View>
                </View>

                <View style={styles.sectionTitle}>
                    <Text style={styles.sectionTitleText}>
                        Notifikasi Saya</Text>

                    <View style={styles.readContainer}>
                        <Text style={styles.readText}>
                            Tandai Sudah Dibaca</Text>
                            
                        <Image
                        source={require("../assets/read.png")} 
                        style={styles.readIcon}></Image>
                    </View>
                </View>

                <View style={styles.sectionItem}>
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
    subContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        width: "100%",
        height: 75,
        backgroundColor: "#ff6823",
        position: 'absolute',
        top: "0%",
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        width: "100%",
        height: "50%",
        backgroundColor: "transparent",
        position: "relative",
        flexDirection: "row", 
        justifyContent: "center"
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 3,
        position: 'absolute',
    },
  
    returnBox: {
        width: 35,
        height: 35,
        borderRadius: 5,
        position: "absolute",
        top: 20,
        left: 10,
        zIndex: 1000,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    returnIcon: {
        width: "60%",
        height: "60%",
        tintColor: "white"
    },
  
    sectionTitle: {
        width: "90%",
        height: 35,
        backgroundColor: "white",
        paddingBottom: 10,
        marginTop: 20,
        position: 'absolute',
        top: 75,
        borderBottomWidth: 1,
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#ff6823",
    },
    sectionItem: {
        width: "90%",
        height: 400,
        backgroundColor: "transparent",
        position: "absolute",
        top: 130,
        flexDirection: "column",
        justifyContent: "center",
    },
    sectionTitleText : {
        color: "#ff6823",
        fontSize: 18,
        fontWeight: "bold",
    },
    readText: {
        color: "#ff6823",
        fontSize: 12,
        fontWeight: "bold",
    },
    readContainer: {
        marginTop: 10,
        flexDirection: "row",
    },
    readIcon: {
        width: 20, 
        height: 20,
        backgroundColor: "#ff6823",
        marginHorizontal: 5,
        borderRadius: 50,
    },
});