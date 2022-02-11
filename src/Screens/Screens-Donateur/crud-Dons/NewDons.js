import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Dimensions, Picker, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { theme } from '../../../themes';
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInputMask } from 'react-native-masked-text';

const NewDons = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordShow, setPasswordShow] = useState(true);
    const Navigation = useNavigation();

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        function prependZero(number) {
            if (number < 9)
                return "0" + number;
            else
                return number;
        }

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (prependZero(tempDate.getMonth()+1)) + '/' + tempDate.getFullYear();
        setText(fDate);

        console.log(fDate);
      };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };

    const [Annonce, setAnnonce] = useState({
        utilisateurId: 0,
        titre: '',
        description: '',
        quantite: 0,
        date: '',
        photo: '',
        status: '',
        commune: '',

    })

    function SignUp() {
        Navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.signUpContainer}>
                <Text style={styles.title}>Créer une Annonce</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="Titre"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput 
                        placeholder="Description"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput 
                        placeholder="Quantité"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <View style={styles.passwordInput}>
                        <TextInputMask 
                        placeholder='Date'
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                          }}
                         style={styles.input}
                         value={text}
                         onChangeText={(text) => {setText(text);}}
                        />
                        <TouchableOpacity style={styles.dateTime}  onPress={() => showMode('date')} >
                             <Ionicons name='md-calendar'/>
                        </TouchableOpacity>
                            {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                        )}
                    </View>
                   
                    <TextInput 
                        placeholder="Image Link"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TouchableOpacity style={styles.PickerStyle}>
                        <Picker  style={{ height: 40, width: "100%", }}  itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}>
                            <Picker.Item  label="Male" value="male"/>
                            <Picker.Item label="DDAD" value="adad"/>
                            <Picker.Item label="lll" value="Saz"/>
                        </Picker>
                    </TouchableOpacity>
                    <TextInput 
                        placeholder="commune"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                    
                    {/* <View style={styles.passwordInput}>
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
                    </View> */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ajouter</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default NewDons

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.brand.primary,
    },
    signUpContainer: {
        backgroundColor: 'white',
        width: "85%",
        height: Dimensions.get('screen').height*.80,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    inputContainer: {
        width: "85%",
        height: "70%",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        width: "100%",
        height: 40,
        borderRadius: 30,
        padding: 10,
        backgroundColor: theme.colors.ui.tertiary,
    },
    PickerStyle:{
        width: "100%",
        borderRadius: 30,
        backgroundColor: theme.colors.ui.tertiary,
    },  
    passwordShow: {
        color: theme.colors.text.primary,
        fontWeight: "bold",
        position: "relative",
        zIndex: 1,
        right: 50,
    },
    dateTime:{
        position: "relative",
        zIndex: 1,
        right: 50,
        width: 30,
        height: 30,
        margin:5,
        borderRadius: 50,
        backgroundColor: theme.colors.ui.tertiary,
        shadowColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: theme.colors.brand.primary,
        width: "60%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    firstText: {
        color: theme.colors.text.primary,
        fontWeight: "bold",
    },
    secondText: {
        color: theme.colors.text.secondary,
        textDecorationLine: "underline",
    },
    passwordInput: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",

    }
})
