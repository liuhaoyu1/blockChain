import { StyleSheet,Dimensions } from 'react-native';
const styles = StyleSheet.create({
    section: {
        width: Dimensions.get('window').width
    },  
    sectionItem: {
        backgroundColor: '#eee',
        height: 35,

    },
    sectionHeaderLetter: {
        lineHeight: 30,
        paddingLeft: 40,

    },
    sectionHeader: {
        height: 30,
        // backgroundColor: ''
    },
    nameStyle: {
        lineHeight: 35,
        paddingLeft: 40,
    },
    letter: {
        color: '#046FDB',
        textAlign: 'right'
    }
})
export default styles;