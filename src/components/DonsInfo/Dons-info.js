import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../themes';

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
                <Text style={styles.DonsVille}>{DonsCategorie}</Text>
            </View>
    </View>
    )
}

export default DonsInfo;

const styles = StyleSheet.create({
    container: {
        height: 77,
        margin:10,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: '#F1F1F1',
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
    DonsVille: {
        flex:1,
        marginRight:5,
        textAlign: 'right'

    }
})
