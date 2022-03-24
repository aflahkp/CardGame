import { StyleSheet } from 'react-native'
import { buttonBackgroundColor } from '../../theme/colors';
import { buttonMargin, buttonPadding, buttonRadius } from '../../theme/dimens';

const styles = StyleSheet.create({
    container: {
        backgroundColor: buttonBackgroundColor,
        padding: buttonPadding,
        margin: buttonMargin,
        borderRadius: buttonRadius
    }
})

export default styles;