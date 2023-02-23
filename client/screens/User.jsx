import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import BottomTab from "../components/BottomTab";

export default function User({setPage}){
    return (
        <View style={styles.container}>
            <Text>This is dummy User screen</Text>
            <BottomTab setPage={setPage} page="User"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
})