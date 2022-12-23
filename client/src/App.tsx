import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { GlobalContextProvider } from 'contexts/globalContext';

import { LoginPage } from 'views/LoginPage/LoginPage';

function App() {
  return (
    <GlobalContextProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <ModalsProvider>
            <LoginPage />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </GlobalContextProvider>
  );
}

export default App;
