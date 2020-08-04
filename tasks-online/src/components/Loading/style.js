import { StyleSheet } from 'react-native'
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
        color: commonStyles.colors.secondary
    }
});

export default styles