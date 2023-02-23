import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import BottomTab from "../components/BottomTab";

export default function Sales({setPage}){
    return (
        <View style={styles.container}>
            <Text>This is dummy Sales screen</Text>
            <BottomTab setPage={setPage} page="Sales"/>
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