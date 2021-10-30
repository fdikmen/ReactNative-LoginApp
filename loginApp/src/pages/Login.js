import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <View>
                <KeyboardAvoidingView behavior={"position"}>
                <View style={styles.headBackground}>
                    <View>
                        <Text style={styles.logo}> Login </Text>
                        <Text style={styles.logoText}> Slogan </Text>
                    </View>
                    <ScrollView styles={{marginTop:150}}>
                        <View style={styles.loginArea}>
                            <Text style={styles.loginAreaTitle}>Test APP Login</Text>
                            <Text style={styles.loginAreaDescription}>Please login to use the application...</Text>                         
                        
                            <LoginForm/>
                        </View>
                    </ScrollView>
                    <View style={styles.signUpArea}>
                        <Text style={styles.signUpAreaDesc}>Dont have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpAreaText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    headBackground:{
        position:'absolute',
        top:0,
        left:0,
       
        width:'100%',
        backgroundColor:'#1572DE',
        borderBottomRightRadius:200,
        borderColor:'#1572DE'

    },
    logo:{
        paddingTop:80,
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        color:'#f2f2f2'
    },
    logoText:{
        textAlign:'center',
        color:'#F2F2F2'
    },
    loginArea:{
        margin:40,
        backgroundColor:'#FFF',
        padding: 20,
        borderRadius:5,
        shadowColor:'black',shadowOpacity:0.3,shadowOffset:{width:0,height:2},
        elevation:4
    },
    loginAreaTitle:{
        fontSize:20,
        textAlign:'center'
    },
    loginAreaDescription:{
        fontSize:11,
        color:'#7e868f',
        textAlign:'center',
        marginVertical:10
    },
    signUpArea:{alignItems:'center'},
    signUpAreaDesc:{color:'#999'},
    signUpAreaText:{color:'#666'}
})
