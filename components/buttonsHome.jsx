import React from 'react';
import { Pressable, Text, StyleSheet, Image, View } from 'react-native';

const Btn = ({ logoSource, text, onPress }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <View style={styles.contentContainer}>
                <Image source={logoSource} style={styles.logo} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        width: '80%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginTop: 10,
        marginBottom: 10,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        margin: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Btn;




/*
import { Animated, Pressable, StyleSheet, View } from "react-native";

const Btn = ({ displayText, imageSource}) => {

    return (
        <Pressable>
            <Animated.View style={styles.wrapperCustom}>
                <View style={styles.wrapperBtn}>
                    <Image source={imageSource}/>
                    <Text style={styles.textBtn}>{displayText}</Text>
                </View>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 20,
        height: 140,
        margin: 10,
        elevation: 8,
    },
    wrapperBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",

    },
    textBtn: {
        marginLeft: 8,
        fontSize: 20,
        color: "white",
        paddingTop: 10,
        textAlign: "center",
        fontFamily: "GothamBlack",
    },
})

export default Btn;
*/