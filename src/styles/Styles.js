import { StyleSheet } from 'react-native';

export const COLORS = {
  background: '#F5F1E8',
  surface: '#FFD65A',
  surfaceSoft: '#EFEAE0',
  text: '#2B2B2B',
  textSecondary: '#6B6B6B',
  border: '#E2DCD2',
  accent: 'rgb(0,255,255)',
  success: '#2E7D32',
  error: '#C62828',
  warning: '#F9A825',
};

export const FONTS = {
  regular: 'Sora_400Regular',
  medium: 'Sora_500Medium',
  semiBold: 'Sora_600SemiBold',
  bold: 'Sora_700Bold',
};

export const styles = StyleSheet.create({
  // =========================
  // GLOBAL
  // =========================

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 20,
  },

  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
    fontFamily: FONTS.regular,
  },

  // =========================
  // SPLASH
  // =========================

  logo: {
    width: 180,
    height: 180,
  },

  // =========================
  // HOME (TEXTOS)
  // =========================

  prizeLabel: {
    color: COLORS.text,
    fontSize: 16,
    textAlign: 'center',
  },

  prizeValue: {
    color: COLORS.text,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  buttonsContainer: {
    marginTop: 30,
    alignItems: 'center',
  },

  // =========================
  // BUTTON
  // =========================

  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  secondary: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.text,
  },

  text: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '600',
  },

  textSecondary: {
    color: COLORS.text,
  },

  // =========================
  // HEADER
  // =========================

  containerHeader: {
    width: '100%',
    paddingVertical: 30,
    paddingTop: 50,

    backgroundColor: COLORS.surface,

    alignItems: 'center',
    justifyContent: 'center',

    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  logoHeader: {
    width: 180,
    height: 80,
  },

  // =========================
  // Screen de instruções
  // =========================

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: COLORS.surfaceSoft,
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },

  cardText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    textAlign: 'justify',
  },

  footerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '500',
  },

  // =========================
  // Screen de escolha do tipo de aposta
  // =========================

  cardBetType: {
    backgroundColor: COLORS.surfaceSoft,
    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: 16,

    padding: 18,

    marginBottom: 14,
  },

  cardSelectedBetType: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.text,
  },

  cardHeaderBetType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },

  cardTitleBetType: {
    fontSize: 17,
    color: COLORS.text,
    fontFamily: FONTS.semiBold,
  },

  cardTextBetType: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textSecondary,
    fontFamily: FONTS.regular,
    textAlign: 'justify',
  },

  buttonsContainerBetType: {
    marginTop: 10,
  },

  // =========================
  // Pop-up
  // =========================

  overlayPopup: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  containerPopup: {
    width: '100%',
    backgroundColor: COLORS.background,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  imagePopup: {
    width: 90,
    height: 90,
    marginBottom: 14,
  },

  titlePopup: {
    fontSize: 22,
    color: COLORS.text,
    fontFamily: FONTS.bold,
    marginBottom: 10,
    textAlign: 'center',
  },

  textPopup: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.textSecondary,
    textAlign: 'justify',
    marginBottom: 24,
    fontFamily: FONTS.regular,
  },

  // =========================
  // Screen de resultados
  // =========================

  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    maxWidth: 320,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  resultText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2B2B2B',
    textAlign: 'center',
    marginTop: 24,
    letterSpacing: 0.5,
  },

  // =========================
  // Screen de créditos
  // =========================

  cardTitleSection: {
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 14,
    paddingTop: 20,
    width: '100%',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },

  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  creditsButton: {
    marginTop: 18,
    textAlign: 'center',
    color: COLORS.textSecondary,
    fontSize: 13,
    textDecorationLine: 'underline',
    fontFamily: FONTS.medium,
  },

  creditsHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  creditsLogo: {
    width: 180,
    height: 80,
    marginTop: 30,
    marginBottom: 10,
  },

  // =========================
  // FOOTER
  // =========================

  containerFooter: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.background,
  },

  textFooter: {
    color: COLORS.textSecondary,
    fontSize: 12,
    textAlign: 'center',
  },
});
