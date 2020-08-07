import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../utils/styles';

const styles = StyleSheet.create({
    container: { flex: 1 },
    commentContainer: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#7A8FA6', padding: 20 },
    avatar: { width: 40, height: 40, borderRadius: 20 },
    content: { marginLeft: 10, flexDirection: 'row', flexWrap: 'wrap' },
    text: { fontFamily: fonts.poppins, fontSize: 20, color: colors.text.primary },
    textAuthor: { fontSize: 20, marginRight: 10, fontFamily: fonts.poppinsBold, fontWeight: '700' },
    textComment: { fontSize: 19 },
});

export default styles