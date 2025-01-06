import { View, StyleSheet, Image } from "react-native";
const logo = require("../assets/logo-ansa.png")

const Navbar = () => {
    return (
        <View style={styles.containerNav}>
            <Image style={styles.logo} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    containerNav: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logo: {
        width: 200,
        height: 200,
        objectFit: "contain"
    }
})

export default Navbar