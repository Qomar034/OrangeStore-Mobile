import { Image, StyleSheet, Text, View } from "react-native";

export default function NotificationCard({read}){
    return ( 
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.time}>4 menit yang lalu</Text>
        <Text style={styles.title}>PESANAN</Text>
        <Text style={styles.description}>Pesanan anda sudah diproses. Silahkan tunggu barang dikirimkan</Text>
      </View>
      {read 
      ? <View style={styles.readContainer}>
          <Image
            source={require("../assets/check.png")}
            style={styles.readIcon}
          ></Image>
          <Text style={styles.readText}>BACA</Text>
        </View>
      : <View style={styles.unread}></View>
      }
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderLeftWidth: 8,
    borderWidth: 1,
    borderColor: "#ff6823",
    width: "100%",
    height: 110,
    marginVertical: 17,
    borderRadius: 5,
    flexDirection: "row"
  },

  infoContainer: {
    flex: 3
  },
  time: {
    marginLeft: 15,
    marginTop: 10,
    color: 'gray',
  },
  title: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    marginLeft: 15,
    fontSize: 12,
  },

  readContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6823"
  },

  readIcon: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 50,
  },

  readText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white"
  },

  unread: {
    backgroundColor: "#ff6823",
    width: 10,
    height: 10,
    borderRadius: 50,
    position: 'absolute',
    top: "50%",
    right: "5%"
  }
})