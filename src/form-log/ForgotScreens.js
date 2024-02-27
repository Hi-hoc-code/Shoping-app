import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ForgotScreens = ({navigation}) => {
    const [notice, setNotive] = useState(false);
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#333', marginTop: 50 }}>Forgot</Text>
            </View>
            <View style={{ marginTop: 90 }}><Text style={{ fontSize: 16, fontFamily:'Roboto-Bold' }}>Please, enter your email address. You will receive a link to create a new password via email.</Text></View>
            <View style={[styles.cornerEdt, { marginTop: 10 }]}>
                <Text style={{ marginTop: 0, fontSize: 11, paddingStart: 3 }}>Email:</Text>
                <TextInput placeholder='Enter your email' style={styles.textEdt} />
            </View>
            <View><Text style={styles.notive} >Not a valid email address. Should be your@email.com</Text></View>
            <View>
                <TouchableOpacity style={{ backgroundColor: '#DB3022', width: '100%', paddingHorizontal: 10, paddingVertical: 20, borderRadius: 20, justifyContent: 'center' , marginTop:60}} onPress={() => { navigation.navigate('Login') }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ForgotScreens

const styles = StyleSheet.create({
    cornerEdt: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 15,
        paddingTop: 5,
    },
    textEdt: {
        fontSize: 14,
        fontWeight: '500',

    },
    container: {
        paddingHorizontal: 20
    },
    notive:{
        fontSize:12,
        color:'red',
        textAlign:'center'
    }
})