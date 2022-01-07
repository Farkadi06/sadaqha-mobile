import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    SwipBtnContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    SwipBtn: {
        left: Dimensions.get('screen').width/2 - 25,
        marginTop: -80,
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 50,
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderColor: theme.colors.brand.primary,
        borderWidth: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
 
    }
});