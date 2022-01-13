import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../themes';
import { Ionicons } from "@expo/vector-icons";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const DonsInfo = ({uri, DonsName, DonsVille, DonsCategorie}) => {
    return (
    <View  style={{ overflow: 'hidden', paddingBottom: 5 }}>
            <View style={styles.container}>
                <Image
                    style={styles.picture}
                    source={{
                    uri: `${uri}`,
                    }}
                />
                <View style={styles.DonsInfo}>
                    <Text style={styles.LaureatName}>{DonsName}</Text>
                    <Text style={styles.DonsVille}>{DonsVille}</Text>
                </View>
                <View  style={styles.DonsCrud}>
                    <Text  style={styles.DonsCategorie}>{DonsCategorie}</Text>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity style={styles.iconsStyle } onPress={() => console.log('Delete')} >
                            <Ionicons name='close'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconsStyle} onPress={() => console.log('Update')} >
                            <Ionicons name='refresh'/>
                        </TouchableOpacity>   
                    </View>
                </View>
            </View>
    </View>
    )
}

export default DonsInfo;

const styles = StyleSheet.create({
    container: {
        height: 77,
        margin:10,
        padding:8,
        borderRadius:8,
        display: 'flex',
        flexDirection: 'row',
        elevation:8,
        backgroundColor:'#F1F1F1',
        paddingBottom: 10,
    },
   
    picture:{
        width: 60,
        height: 60,
        marginLeft: 5,
        backgroundColor: theme.colors.bg.secondary,
    },
    DonsInfo:{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 5
    },
    DonsVille:{
        color: theme.colors.text.secondary
    },
    DonsCrud: {
        marginLeft: 'auto',
        
    },
    DonsCategorie: {
        flex:1,
        marginRight:5,
        textAlign: 'right'
    },
    iconsContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    iconsStyle:{
        width: 30,
        height: 30,
        margin:5,
        borderRadius: 50,
        backgroundColor: theme.colors.ui.tertiary,
        shadowColor: 'black',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})
