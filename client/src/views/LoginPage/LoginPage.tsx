import './LoginPage.css';

import React from 'react';
import { Button, Flex, Group, Text, Title } from '@mantine/core';
import { openModal } from '@mantine/modals';
import { LoginModal } from 'components/modals/LoginModal';
import { SignupModal } from 'components/modals/SignupModal';
import { useGlobalContext } from 'contexts/globalContext';
import { showNotification } from '@mantine/notifications';

import { UserApi } from 'api';

export const LoginPage: React.FC = () => {
  const { loggedInUser, updateLoggedInUser } = useGlobalContext();

  const logoutUser = async () => {
    try {
      const success = await UserApi.logout();
      if (success) {
        showNotification({
          message: 'You have successfully logged out',
        });
      }
    } catch (error: any) {
      showNotification({
        title: 'Logout error',
        message: error.message || 'Unknown error',
      });
    }
    updateLoggedInUser();
  };

  return (
    <Flex
      justify='flex-start'
      align='center'
      direction='column'
      gap='md'
      mt='lg'
    >
      <Title order={1}>auth-template</Title>
      <Text>
        {!!loggedInUser
          ? `${loggedInUser.getFullName()} is logged in`
          : 'User is not logged in'}
      </Text>
      <Group>
        {loggedInUser ? (
          <Button onClick={logoutUser}>Log out</Button>
        ) : (
          <>
            <Button onClick={() => openModal(LoginModal)}>Log in</Button>
            <Button onClick={() => openModal(SignupModal)}>Sign Up</Button>
          </>
        )}
      </Group>
    </Flex>
  );
};
