import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordShow, setPasswordShow] = useState(true);
    const Navigation = useNavigation();

    function Login() {
        Navigation.navigate('SignIn');
    }
    

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.signUpContainer}>
                <Text style={styles.title}>Sadaqah</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="Nom complet"
                        style={styles.input}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput 
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <View style={styles.passwordInput}>
                        <TextInput 
                            placeholder="Mot de passe"
                            style={styles.input}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={passwordShow}
                        />
                        <Text 
                            style={styles.passwordShow} 
                            onPress={() => setPasswordShow(!passwordShow)}
                        >
                        {passwordShow ? "Show" : "Hide"}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Créer un Compte</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.firstText}>
                    Vous avez déjà un compte?
                    <Text>  </Text>
                    <Text style={styles.secondText} onPress={Login}>Login</Text>
                </Text>
 
            </KeyboardAvoidingView>
        </View>
    )
}

export default SignUpScreen