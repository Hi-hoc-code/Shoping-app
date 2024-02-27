import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({ navigation }) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 34, fontWeight: 'bold', color:'#333', marginTop:50 }}>Sign Up</Text>
      <View style={[styles.cornerEdt,{marginTop:80}]}>
        <Text style={{ marginTop: 0, fontSize: 11, paddingStart: 3 }}>Name:</Text>
        <TextInput placeholder='Enter your name' style={styles.textEdt} />
      </View>
      <View style={styles.cornerEdt}>
        <Text style={{ marginTop: 0, fontSize: 11, paddingStart: 3 }}>Email:</Text>
        <TextInput placeholder='Enter your email' style={styles.textEdt} />
      </View>
      <View style={styles.cornerEdt}>
        <Text style={{ marginTop: 0, fontSize: 11, paddingStart: 3 }}>Password:</Text>
        <View style={[styles.rows]}>
          <TextInput
            placeholder='Enter your Password'
            secureTextEntry={isPasswordHidden}
            multiline={false}
            style={{ flex: 1 }}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
            accessibilityLabel={isPasswordHidden ? 'Show Password' : 'Hide Password'}
          >
            <Icon name={isPasswordHidden ? 'eye-with-line' : 'eye'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.forgetForm}>
        <Text style={{textAlign:'right'}}>Already have an account?</Text>
        <Icon name=''></Icon>
      </View>
      <View>
        <TouchableOpacity style={{backgroundColor:'#DB3022', width:'100%',paddingHorizontal:10, paddingVertical:20 , borderRadius:20, justifyContent:'center'}}
          onPress={()=>{navigation.navigate('Login')}}
          ><Text style={{textAlign:'center', color:'#fff', fontSize:16}}>Sign Up</Text></TouchableOpacity>
      </View>
      <View style={{marginTop:80, justifyContent:'center', width:'100%'}}><Text style={{textAlign:'center', fontSize:14}}>Or sign up with social account</Text></View>
      <View style={{flexDirection:'row', justifyContent:'center',marginTop:20}}>
        <Image
        source={require('../assets/image/Google.png')}/>
         <Image
        source={require('../assets/image/Facebook.png')}/>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#f1f1f1',
    width: '100%',
    height: '100%',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
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
  forgetForm:{
    width:'100%',
    justifyContent:'flex-end',
    marginTop:18,
  },

});
