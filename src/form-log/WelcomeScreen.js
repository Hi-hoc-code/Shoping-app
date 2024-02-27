import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({ navigation }) => {
    return (
        <View>
            <Image
                source={require('../assets/image/welcome.jpg')}
                style={styles.background} >
            </Image>
          <TouchableOpacity style={styles.welText} onPress={()=>navigation.navigate('Login')}><Text style={{color:'#fff', fontSize:18}}>Next</Text></TouchableOpacity>
        </View>
    )
}
export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    welText: {
        position: 'absolute',
        bottom: "10%",
        end: '5%',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        paddingHorizontal: 20,
        paddingVertical:15,
        borderRadius: 20,
        backgroundColor:'red'
    }
})