import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";

export default function BottomTab({setPage, page}){
    return (                
        <View style={styles.mainContainer}>
            <View style={styles.outerHome}>
                <Pressable 
                onPress={() => setPage('Home')}
                style={({pressed}) => pressed ? styles.homePressed : styles.homeButton}>
                    <Image style={{ width: 40, height: 40 }}
                        source={require("../assets/home.png")}
                    ></Image>
                </Pressable>
            </View>

            <View style={styles.tabContainer}>
                <TouchableOpacity 
                onPress={() => {page == 'Notification' ? setPage('Sales') : setPage('Chat')}}
                style={styles.tabButton}>

                    <Image style={styles.tabIcon}
                        source={page == 'Notification' ? require("../assets/suitcase.png") : require("../assets/chat.png")}
                    ></Image>

                    <Text style={styles.tabLabel}>
                        {page == 'Notification' ? "Data Sales" : "Chat"} </Text>
                </TouchableOpacity>

                <View></View>
                
                <TouchableOpacity 
                onPress={() => setPage('User')}
                style={styles.tabButton}>

                    <Image style={styles.tabIcon}
                        source={require("../assets/user.png")}
                    ></Image>

                    <Text style={styles.tabLabel}>
                        Akun </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : { 
        width: "100%", 
        height: 90, 
        backgroundColor: "#fef9ed", 
        position: "absolute", 
        bottom: 0, 
        flexDirection: "column", 
        alignItems: "center" 
    },
    
    tabContainer : { 
        width: "100%", 
        height: "100%", 
        backgroundColor: "white", 
        marginTop: 15, 
        flexDirection: 'row', 
        alignItems: "flex-start", 
        justifyContent: "space-around", 
    }, 
    tabButton: { 
        width: 60, 
        height: 60, 
        backgroundColor: "transparent", 
        marginTop: 10, 
        flexDirection: 'column', 
        alignItems: "center", 
        justifyContent: 'center', 
    },
    tabIcon: { 
        width: 35, 
        height: 35, 
    },
    tabLabel : { 
        fontSize: 12, 
        color: "#ff6823", 
        fontWeight: "500" 
    },

    outerHome : { 
        width: 90,
        height: 90, 
        backgroundColor: "#fef9ed", 
        borderRadius: 50, 
        position: "absolute", 
        top: -25, zIndex: 100, 
        alignItems: "center", 
        justifyContent: 'center',
    },
    homeButton : { 
        width: 65, 
        height: 65, 
        backgroundColor: "#ff6823", 
        borderRadius: 50, 
        alignItems: "center", 
        justifyContent: 'center', 
    },
    homePressed : { 
        width: 65, 
        height: 65, 
        backgroundColor: "#ff682380", 
        borderRadius: 50, 
        position: 'absolute', 
        bottom: 10, 
        alignItems: "center", 
        justifyContent: 'center',
    },
})