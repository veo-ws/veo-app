import React, { createContext, useContext, useState } from 'react';
import defaultConfig from '@veo/constants/defaultConfig';
import PropTypes from 'prop-types';

// import { LayoutDirection } from '@veo/constants/AppEnums';

const LocaleContext = createContext();
const LocaleActionsContext = createContext();

export const useLocaleContext = () => useContext(LocaleContext);

export const useLocaleActionsContext = () => useContext(LocaleActionsContext);

const LocaleContextProvider = ({ children }) => {
  const [locale, updateLocale] = useState(defaultConfig.locale);
  // const { theme } = useThemeContext();
  // const { updateTheme } = useThemeActionsContext();

  // useEffect(() => {
  //   if (
  //     defaultConfig.rtlLocale.includes(locale.locale) &&
  //     // theme.direction === LayoutDirection.LTR
  //   ) {
  //     updateTheme({
  //       ...theme,
  //       direction: LayoutDirection.RTL,
  //     });
  //   } else if (
  //     !defaultConfig.rtlLocale.includes(locale.locale) &&
  //     theme.direction === LayoutDirection.RTL
  //   ) {
  //     updateTheme({
  //       ...theme,
  //       direction: LayoutDirection.LTR,
  //     });
  //   }
  // }, [locale, theme, updateTheme]);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        rtlLocale: defaultConfig.rtlLocale,
      }}
    >
      <LocaleActionsContext.Provider
        value={{
          updateLocale,
        }}
      >
        {children}
      </LocaleActionsContext.Provider>
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;

LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
