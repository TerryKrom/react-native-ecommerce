import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#5768ea",
        color: "#FFFFFF",
        width: '100%',
        height: 45,
        flexDirection: 'row',
        marginTop: 32,
    },
    div: {
        flex: 1,
        display: 'flex',
        justifyContent:'center',
        alignItems: "center",
        height: '100%'
    },
    line: {
        height: 3,
        backgroundColor: "#FFFFFF",
        width: 20,
        margin: 0,
        padding: 0,
    },
    burguer: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        width: 30,
        height: 17,
        marginRight: 30,
    },
    logo: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Quicksand-Regular',
        fontWeight: 'normal',
    },
    icon: {
        color: "#FFFFFF",
        marginLeft: 30,
        fontSize: 20
    }
})

export default styles;