import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  mainContainer: { flex: 1 },
  categoryItemText: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    zIndex: 1,
    padding: 4,
    bottom: 24,
    left: 24,
  },
  categoryItemImage: {
    flex: 1,
    justifyContent: 'center',
    height: 140,
    marginBottom: 12,
    borderRadius: 12,
    opacity: 0.8,
  },
});
