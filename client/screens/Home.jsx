import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import MenuButton from '../components/MenuButton';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.upperBox}>
          <View style={styles.middleBox}>
            <Text style={styles.text2}>KODE TOKO: 12019982 | PADANG</Text>
            <Text style={styles.text1}>TOKO SUMBER JAYA</Text>
            <Text style={styles.text2}>Sales: THEO ADIPTA</Text>
            
            <Pressable 
            style={({pressed}) => pressed
              ? styles.notificationBoxPressed
              : styles.notificationBox
              }>
                <Image 
                source={require("../assets/bell.png")}
                style={styles.notification} ></Image>
            </Pressable>

          </View>

          <View style={styles.lowerBox}>
              <View style={styles.container3}>
                <Text style={styles.text3}>Ringkasan Pesanan</Text>
              </View>
              <View style={styles.container2}>
                  <View style={styles.displayBox}>
                    <Text style={styles.text4}>Pending</Text>
                    <Text style={styles.text5}>0</Text>
                  </View>
                  <View style={styles.displayBox}>
                    <Text style={styles.text4}>Dalam Proses</Text>
                    <Text style={styles.text5}>0</Text>
                  </View>
              </View>
              <View style={styles.container4}>
                  <Text style={styles.text6}>Total Tagihan</Text>
                  <Text style={styles.text7}>Rp. 0</Text>
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
  container1: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperBox: {
    flex: 1,
    width: "100%",
    height: "25%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#ff6823",
    position: 'absolute',
    top: "0%",
  },
  middleBox: {
    width: "90%",
    height: "50%",
    backgroundColor: "transparent",
    marginVertical: 8,
    position: "relative",
    top: "5%",
    left: "5%"
  },
  lowerBox: {
    width: "90%",
    height: "90%",

    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: "white",
    
    position: 'relative',
    left: "5%",
    
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.99,
    shadowRadius: 3.84,
    
    elevation: 9,

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
    justifyContent: "flex-start",
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
