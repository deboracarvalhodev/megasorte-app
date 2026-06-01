import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from './Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 24,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: FONTS.bold,
  },

  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
    fontFamily: FONTS.regular,
  },

  infoContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },

  infoCard: {
    flex: 1,
    backgroundColor: COLORS.surfaceSoft,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },

  infoLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 4,
    fontFamily: FONTS.regular,
  },

  infoValue: {
    fontSize: 18,
    color: COLORS.text,
    fontFamily: FONTS.bold,
  },

  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },

  buttonsContainer: {
    marginTop: 30,
  },
});