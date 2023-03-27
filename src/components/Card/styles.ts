import { StyleSheet } from 'react-native';

export const HEIGHT = 68;
export const MARGIN_BOTTOM = 12;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT,
    borderRadius: MARGIN_BOTTOM,
    backgroundColor: '#595959',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  },
});