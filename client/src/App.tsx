import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { GlobalContextProvider } from 'contexts/globalContext';

import { LoginPage } from 'views/LoginPage/LoginPage';

function App() {
  return (
    <GlobalContextProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Notifications position='top-right' />
        <ModalsProvider>
          <LoginPage />
        </ModalsProvider>
      </MantineProvider>
    </GlobalContextProvider>
  );
}

export default App;
