import {StyleSheet} from 'react-native';

import colors from '../../theme/colors';
import typography from '../../theme/typography';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  date: {
    flex: 1,
    ...typography.subhead,
    textAlign: 'right',
    color: colors.white.main,
  },
  subject: {
    flex: 3,
    ...typography.headline,
    color: colors.white.main,
    paddingRight: 8,
  },
});
