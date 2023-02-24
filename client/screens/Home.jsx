import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import BottomTab from '../components/BottomTab';
import MenuButton from '../components/MenuButton';

export default function Home({setPage}) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.outerSide}>
            <View style={styles.innerSide}>
                <View style={styles.header}>
                    <Text style={styles.headerText1}>
                        KODE TOKO: 12019982 | PADANG</Text>
                    <Text style={styles.headerText2}>
                        TOKO SUMBER JAYA</Text>
                    <Text style={styles.headerText1}>
                        Sales: THEO ADIPTA</Text>
                    
                    <Pressable 
                      onPress={() => setPage('Notification')}
                      style={({pressed}) => pressed
                      ? styles.notificationBoxPressed
                      : styles.notificationBox
                      }>
                        <Image 
                        source={require("../assets/bell.png")}
                        style={styles.notification}></Image>
                    </Pressable>
                </View>

                <View style={styles.displayContainer}>
                    <View style={styles.displayTitle}>
                        <Text style={styles.displayText1}>
                          Ringkasan Pesanan</Text>
                    </View>

                    <View style={styles.displayInfo}>
                        <View style={styles.displayBox}>
                            <Text style={styles.displayItemText}>
                              Pending</Text>
                            <Text style={styles.displayValueText}>
                              0</Text>
                        </View>

                        <View style={styles.displayBox}>
                            <Text style={styles.displayItemText}>
                              Dalam Proses</Text>
                            <Text style={styles.displayValueText}>
                              0</Text>
                        </View>
                    </View>
                    
                    <View style={styles.displayFooter}>
                          <Text style={styles.displayFooterText1}>
                            Total Tagihan</Text>
                          <Text style={styles.displayFooterText2}>
                            Rp. 0</Text>
                    </View>
                </View>

                <View style={styles.menuBox}>
                    <View style={styles.menuRow}>
                        <Pressable 
                          style={({pressed}) => pressed ? styles.pressedMenu : styles.menu}
                          children={({pressed}) => 
                            <MenuButton 
                              pressed={pressed} 
                              text1={"Buat"} 
                              text2={"Pesanan"} 
                              image={require("../assets/doc.png")}/>}
                        ></Pressable>

                        <Pressable 
                          style={({pressed}) => pressed ? styles.pressedMenu : styles.menu}
                          children={({pressed}) => 
                            <MenuButton 
                              pressed={pressed} 
                              text1={"Riwayat"} 
                              text2={"Pesanan"} 
                              image={require("../assets/cart.png")}/>}
                        ></Pressable>

                        <Pressable 
                          style={({pressed}) => pressed ? styles.pressedMenu : styles.menu}
                          children={({pressed}) => 
                            <MenuButton 
                              pressed={pressed} 
                              text1={"Riwayat"} 
                              text2={"Bayar"} 
                              image={require("../assets/wallet.png")}/>}
                        ></Pressable>
                    </View>

                    <View style={styles.menuRow}>
                        <Pressable 
                          style={({pressed}) => pressed ? styles.pressedMenu : styles.menu}
                          children={({pressed}) => 
                            <MenuButton 
                              pressed={pressed} 
                              text1={"Daftar"} 
                              text2={"Supir"} 
                              image={require("../assets/people.png")}/>}
                        ></Pressable>

                        <Pressable 
                          style={({pressed}) => pressed ? styles.pressedMenu : styles.menu}
                          children={({pressed}) => 
                            <MenuButton 
                              pressed={pressed} 
                              text1={"Daftar"} 
                              text2={"Alamat"} 
                              image={require("../assets/location.png")}/>}
                        ></Pressable>

                        <Pressable 
                          style={({pressed}) => pressed ? styles.pressedMenu : styles.menu}
                          children={({pressed}) => 
                            <MenuButton 
                              pressed={pressed} 
                              text1={"Retur"} 
                              text2={"Barang"} 
                              image={require("../assets/switch.png")}/>}
                        ></Pressable>
                    </View>
                </View>
            </View>

            <BottomTab setPage={setPage} page="Home" />
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fef9ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerSide: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSide: {
    flex: 1,
    width: "100%",
    height: "25%",
    backgroundColor: "#ff6823",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: 'absolute',
    top: "0%",
  },

  header: {
    width: "90%",
    height: "50%",
    backgroundColor: "transparent",
    marginVertical: 8,
    position: "relative",
    top: "5%",
    left: "5%"
  },
  headerText2: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 2,
  },
  headerText1: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 3,
  },

  displayContainer: {
    width: "90%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    position: 'relative',
    left: "5%",

    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.99,
    shadowRadius: 3.84,
    elevation: 9,
  },
  displayInfo: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 5,
    width: "100%",
    height: "40%",
  },
  displayTitle: {
    flex : 1,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    width: "85%",
    height: "40%",
  },
  displayText1: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  displayItemText: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold"
  },
  displayValueText: {
    marginLeft: 25,
    fontSize: 25,
    fontWeight: "bold"
  },
  displayFooterText1: {
    fontSize: 15,
    fontWeight: "bold"
  },
  displayFooterText2: {
    fontSize: 20,
    color: "tomato",
    fontWeight: "bold"
  },
  displayFooter: {
    flex : 2,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    width: "80%",
    height: "40%",
  },
  displayBox: {
    width: "40%",
    height: 70,
    backgroundColor: "#fef9ed",
    marginHorizontal: 15,
    borderRadius: 25,
  },

  menuBox: {
    width: "90%",
    height: "150%",
    backgroundColor: "transparent",
    flexDirection: "column",
    position: 'relative',
    left: "5%",
    marginTop: 40,
  },
  menuRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: 130,
    backgroundColor: "transparent",
    flexWrap: "wrap"
  },
  menu: {
    width: 110,
    height: 110,
    
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
    backgroundColor: "white",
  },
  pressedMenu: {
    width: 110,
    height: 110,
    
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

    borderRadius: 15,
    backgroundColor: "#ff6823",
  },

  notificationBox: {
    width: 35,
    height: 35,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  notificationBoxPressed: {
    width: 35,
    height: 35,
    backgroundColor: "white",
    position: "absolute",
    top: 2,
    right: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  notification: {
    width: "45%",
    height: "45%",
  },

  loader: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: "0%",
    width: "100%",
    height: "20%"
  },
});
