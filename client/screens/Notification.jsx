import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCard from "../components/NotificationCard";

export default function Notification(){
    return (
        <SafeAreaView style={styles.container}>
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
            <View style={styles.body}>
                <NotificationCard read={true}/>
                <NotificationCard read={false}/>
                <NotificationCard read={false}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', //#fef9ed
      alignItems: 'center',
      justifyContent: 'center',
    },

    header: {
        width: "90%",
        height: 30,
        position: "absolute",
        top: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#ff6823",
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
        margin: 0,
        position: "absolute",
        top: 5,
        right: 0
    },

    readIcon: {
        marginHorizontal: 5,
        backgroundColor: "#ff6823",
        borderRadius: 50,
        width: 20, height: 20
    },

    body: {
        width: "90%",
        position: "absolute",
        top: 70,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white", 
    },

    loader: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: "1%",
        width: "100%",
        height: "20%"
      },
})