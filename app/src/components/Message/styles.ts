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
    flex: 2,
    ...typography.subhead,
    textAlign: 'right',
    color: colors.white.main,
  },
  icon: {
    flex: 1,
    color: colors.white.main,
  },
  subject: {
    flex: 5,
    ...typography.headline,
    color: colors.white.main,
    paddingRight: 8,
  },
});
