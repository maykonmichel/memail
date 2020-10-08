import {StyleSheet} from 'react-native';

import colors from '../../theme/colors';
import typography from '../../theme/typography';

export default StyleSheet.create({
  container: {
    padding: 8,
  },
  text: {
    ...typography.headline,
    color: colors.white.main,
  },
});
