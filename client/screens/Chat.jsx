import { StyleSheet, Text, View, } from "react-native";
import BottomTab from "../components/BottomTab";

export default function Chat({setPage}){
    return (
        <View style={styles.container}>
            <Text>This is dummy chat screen</Text>
            <BottomTab setPage={setPage} page="Chat"/>
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