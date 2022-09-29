import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity,TouchableHighlight } from 'react-native';
import icon from '../assets/logo.png';
import {useNavigation} from '@react-navigation/native';
import{createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import { Avatar } from "react-native-elements";



function RegisterUser() {
    const navigation = useNavigation();

    const [firstName,setFirstName] = React.useState('');
    const [secondName,setSecondName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [contact,setContact] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [confirmPassword,setconfirmPassword] = React.useState('');
    const [pic,setPic] = React.useState('');

    const register = () => {
        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            if(password === confirmPassword ){
                navigation.navigate("Landing")
                Alert.alert("Successfully Logged In")
        }else{
            Alert.alert('Passwords do not match ')
            console.log('Passwords do not match ');
        }

        }).catch((error)=> {
            console.log(error);
        })

    }


    const signIn = () => {
        navigation.navigate("Home")
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ width: '100%', height: '35%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={icon} style={styles.logo} />
            </View>

            <View style={{ width: '100%', height: "65%", backgroundColor: "#2B2C34", borderTopEndRadius: 21, borderTopStartRadius: 21 }}>
                <Text style={styles.signIn}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>setFirstName(text)}
                    value={firstName}
                    placeholder="First Name" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>setSecondName(text)}
                    value={secondName}
                    placeholder="Second Name" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>setEmail(text)}
                    value={email}
                    placeholder="Email Adress" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>setContact(text)}
                    value={contact}
                    placeholder="Phone Number" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>setPassword(text)}
                    secureTextEntry
                    value={password}
                    placeholder="Create Password" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>setconfirmPassword(text)}
                    secureTextEntry
                    value={confirmPassword}
                    placeholder="Confirm Password" />
                {/* <TouchableHighlight 
                    onPress={()=>Alert.alert('pressed')}
                    underlayColor='transparent'>
                    <Avatar.Image 
                    size={250}
                    source={{uri:'data:image/png;base64,'+pic}} />    
                </TouchableHighlight> */}
                    
                
                <Text style={{ color: "white", textAlign: 'center', margin: 10 }} onPress={signIn} >
                    Already has Account?
                </Text>
                <TouchableOpacity>
                    <Text style={{
                        backgroundColor: '#E85800',
                        color: 'white',
                        textAlign: 'center',
                        padding: 7,
                        marginTop: 3,
                        width: "50%",
                        alignSelf: 'center',
                        borderRadius: 5
                    }} onPress={register} >
                        Register

                    </Text>
                </TouchableOpacity>
      
               
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150
    },
    signIn: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
        marginTop: 10
    },
    input: {
        color: 'white',
        borderWidth: 3,
        padding: 10,
        margin: 3,
        borderBottomColor: 'white',
        borderEndColor: '#2B2C34',
        borderLeftColor: "#2B2C34",
        borderTopColor: '#2B2C34'
    },
});

export default RegisterUser