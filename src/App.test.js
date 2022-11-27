import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

test('renders learn react link', () => {
  render(
    <React.StrictMode>
      <IntlProvider locale="es-US" messages={localeEnMessages}>
        <App />
      </IntlProvider>
    </React.StrictMode>
  );
});
