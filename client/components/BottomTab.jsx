import { Image, StyleSheet, Text, View, Pressable } from "react-native";

export default function BottomTab({setPage, page}){
    return (                
        <View style={{ width: "100%", height: 90, backgroundColor: "#fef9ed", position: "absolute", bottom: 0, flexDirection: "column", alignItems: "center" }}>
            <Pressable onPress={() => setPage('Home')} style={{ backgroundColor: "#fef9ed", borderRadius: 50, position: "absolute", top: -25, zIndex: 100, alignItems: "center", justifyContent: 'center', width: 90, height: 90 }}>
                <View style={{ width: 65, height: 65, alignItems: "center", justifyContent: 'center', backgroundColor: "#ff6823", borderRadius: 50, }}>
                    <Image style={{ width: 40, height: 40 }}
                        source={require("../assets/home.png")}
                    ></Image>
                </View>
            </Pressable>

            <View style={{ width: "100%", height: "100%", backgroundColor: "white", marginTop: 15, flexDirection: 'row', justifyContent: "space-around", alignItems: "flex-start" }}>
                <Pressable onPress={() => {page == 'Notification' ? setPage('Sales') : setPage('Chat')}}
                style={{ width: 60, height: 50, backgroundColor: "transparent", flexDirection: 'column', justifyContent: 'center', alignItems: "center", marginTop: 10 }}>
                    <Image style={{ width: 35, height: 35 }}
                        source={page == 'Notification' ? require("../assets/suitcase.png") : require("../assets/chat.png")}
                    ></Image>
                    <Text style={{ fontSize: 12, color: "#ff6823", fontWeight: "500" }}>
                        {page == 'Notification' ? "Data Sales" : "Chat"} </Text>
                </Pressable>

                <View></View>
                
                <Pressable onPress={() => setPage('User')}
                style={{ width: 60, height: 50, backgroundColor: "transparent", flexDirection: 'column', justifyContent: 'center', alignItems: "center", marginTop: 10, zIndex: 50 }}>
                    <Image style={{ width: 35, height: 35 }}
                        source={require("../assets/user.png")}
                    ></Image>
                    <Text style={{ fontSize: 12, color: "#ff6823", fontWeight: "500" }}>
                        Akun </Text>
                </Pressable>
            </View>
        </View>
    )
}