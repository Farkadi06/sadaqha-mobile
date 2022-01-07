import {StyleSheet} from 'react-native';
import { theme } from '../../themes';

export default StyleSheet.create({
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
    LauriatsInfo:{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 5
    },
    JobTitle:{
        color: theme.colors.text.secondary
    },
    PrevField: {
        flex:1,
        marginRight:5,
        textAlign: 'right'

    }
})