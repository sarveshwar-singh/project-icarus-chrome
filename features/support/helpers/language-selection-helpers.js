import i18n from './i18n-helpers';

const LANGUAGE_SELECTION_FORM = '.LanguageSelectionForm_component';

const languageSelection = {
  waitForVisible: async (client, { isHidden } = {}) => {
    if (isHidden) {
      return client.waitForElementNotPresent(LANGUAGE_SELECTION_FORM);
    }
    return client.waitForElement(LANGUAGE_SELECTION_FORM);
  },
  ensureLanguageIsSelected: async (client, { language } = {}) => {
    await languageSelection.waitForVisible(client);
    i18n.setActiveLanguage(client, { language });
    await languageSelection.waitForVisible(client, { isHidden: true });
  }
};

export default languageSelection;
