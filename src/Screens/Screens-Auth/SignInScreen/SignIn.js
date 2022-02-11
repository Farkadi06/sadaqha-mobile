import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordShow, setPasswordShow] = useState(true);
    const Navigation = useNavigation();

    function SignUp() {
        Navigation.navigate('SignUp');
    }
    

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.signUpContainer}>
                <Text style={styles.title}>Sadaqah</Text>
                <View style={styles.inputContainer}>
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
                        <Text style={styles.buttonText}>Connectez-vous</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.firstText}>
                    Vous n'avez pas encore un compte?
                    <Text>  </Text>
                    <Text style={styles.secondText} onPress={SignUp}>Creé un</Text>
                </Text>
 
            </KeyboardAvoidingView>
        </View>
    )
}

export default SignInScreen