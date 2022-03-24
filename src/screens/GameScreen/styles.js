import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userCards: {
        width: '100%',
        flexDirection: 'row'
    },
    opponentCards: {
        width: '100%',
        flexDirection: 'row'
    },
    actiopnButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default styles;