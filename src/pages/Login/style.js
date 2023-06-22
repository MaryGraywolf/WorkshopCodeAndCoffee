import { StyleSheet } from "react-native";

// 2b2d41  23263A  8b949c  8D95A6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121214",
    },

    subContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: '40%',
        marginHorizontal: '20%',
    },

    title: {
        fontSize: 40,
        color: '#8D95A6',
        textAlign: "center",
        marginBottom: '5%',
    },

    subTitle: {
        fontSize: 18,
        color: '#8b949c',
        textAlign: "center",
    },

    sectionInput: {
        justifyContent: "space-between",
        width: '100%',
        marginVertical: '10%',
    },

    inputContainer: {
        flexDirection: "row",
        marginBottom: '5%',
        alignItems: "center",
    },

    icon: {
        position: "absolute",
        left: 10,
    },

    input: {
        height: 40,
        color: '#8D8D99',
        width: '100%',
        fontSize: 16,
        backgroundColor: '#202024',
        borderColor: '#323238',
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 40,
        placeholderTextColor: '#8D8D99',
    },

    buttonContainer: {
        width: '100%',
        marginBottom: '5%',
    },

  });

  export default styles;