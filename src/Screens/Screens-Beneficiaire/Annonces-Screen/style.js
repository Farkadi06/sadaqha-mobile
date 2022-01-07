import { StyleSheet } from "react-native";
import { theme } from "../../../themes";



export default  StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bg.primary
    },  
    Title: {
        color: theme.colors.brand.primary,
        marginTop: 45,
        marginBottom: 35,
        fontSize: 30,
        fontWeight: `${theme.fontWeights.bold}`,
        textAlign: 'center'
    },
    Recherche: {
        margin: 10,
        backgroundColor: theme.colors.bg.secondary,
        color: theme.colors.ui.quaternary,
        padding: 8,
        borderRadius: 30,
        marginRight: 20,
        marginLeft: 20,
    }
})