import {StyleSheet} from 'react-native';

import colors from '../../theme/colors';
import typography from '../../theme/typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.black.dark,
  },
  text: {
    ...typography.headline,
    color: colors.white.light,
  },
});
