import { StyleSheet } from 'react-native'
import { cardBackgroundColor } from '../../theme/colors';
import { cardHeight, cardWidth, cardMargin } from '../../theme/dimens';

const styles = StyleSheet.create({
    card: {
        width: cardWidth,
        height: cardHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cardBackgroundColor,
        marginHorizontal: cardMargin
    },
    cardImage: {
        width: cardWidth * 0.9,
        height: cardHeight * 0.9,
    },
    cartValueText: {},
})

export default styles;