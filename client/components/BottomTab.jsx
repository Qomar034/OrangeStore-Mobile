import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";

export default function BottomTab({setPage, page}){
    return (                
        <View style={{ width: "100%", height: 90, backgroundColor: "#fef9ed", position: "absolute", bottom: 0, flexDirection: "column", alignItems: "center" }}>
            <View style={styles.outerHome}>
                <Pressable onPress={() => setPage('Home')}
                style={({pressed}) => pressed ? styles.homePressed : styles.homeButton}>
                    <Image style={{ width: 40, height: 40 }}
                        source={require("../assets/home.png")}
                    ></Image>
                </Pressable>
            </View>

            <View style={{ width: "100%", height: "100%", backgroundColor: "white", marginTop: 15, flexDirection: 'row', justifyContent: "space-around", alignItems: "flex-start" }}>
                <TouchableOpacity onPress={() => {page == 'Notification' ? setPage('Sales') : setPage('Chat')}}
                style={styles.tabButton}>
                    <Image style={{ width: 35, height: 35 }}
                        source={page == 'Notification' ? require("../assets/suitcase.png") : require("../assets/chat.png")}
                    ></Image>
                    <Text style={{ fontSize: 12, color: "#ff6823", fontWeight: "500" }}>
                        {page == 'Notification' ? "Data Sales" : "Chat"} </Text>
                </TouchableOpacity>

                <View></View>
                
                <TouchableOpacity 
                onPress={() => setPage('User')}
                style={styles.tabButton}>
                    <View style={{ borderRadius: 50, backgroundColor: 'white', marginTop: 5, width: 40, height: 40, justifyContent: 'center', alignItems: "center"}}>
                        <Image style={{ width: 35, height: 35,  }}
                            source={require("../assets/user.png")}
                        ></Image>
                    </View>
                    <Text style={{ fontSize: 12, color: "#ff6823", fontWeight: "500" }}>
                        Akun </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerHome : { backgroundColor: "#fef9ed", borderRadius: 50, position: "absolute", top: -25, zIndex: 100, alignItems: "center", justifyContent: 'center', width: 90, height: 90 },
    homeButton : { width: 65, height: 65, alignItems: "center", justifyContent: 'center', backgroundColor: "#ff6823", borderRadius: 50, },
    homePressed : { width: 65, height: 65, alignItems: "center", justifyContent: 'center', backgroundColor: "#ff682380", borderRadius: 50, position: 'absolute', bottom: 10},
    tabButton: { width: 60, height: 60, backgroundColor: "transparent", flexDirection: 'column', justifyContent: 'center', alignItems: "center", marginTop: 10 },
    // pressedTab : { width: 60, height: 60, backgroundColor: "#ff6823", borderRadius: 7, flexDirection: 'column', justifyContent: 'center', alignItems: "center", marginTop: 10 },
})