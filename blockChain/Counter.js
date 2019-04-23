import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
export default ({ name, count = 1, onInc, onDec }) => (React.createElement(View, { style: styles.root },
    React.createElement(Text, null,
        "Counter ",
        name,
        ": ",
        count),
    React.createElement(View, null,
        React.createElement(Button, { title: "+", onPress: onInc || (() => { }) }),
        React.createElement(Button, { title: "-", onPress: onDec || (() => { }) }))));
// export default class Counter extends React.Component<Props>{
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <View style={styles.root}>
//                 <Text>
//                     Counter {name}: {count}
//                 </Text>
//                 <View>
//                     <Button title="+" onPress={onInc || (() => {})} />
//                     <Button title="-" onPress={onDec || (() => {})} />
//                 </View>
//             </View>
//         )
//     }
// }
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold',
    },
});
