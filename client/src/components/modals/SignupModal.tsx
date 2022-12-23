import React from 'react';

import { Button, Flex, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { ModalSettings } from '@mantine/modals/lib/context';
import { showNotification } from '@mantine/notifications';

import { UserApi } from 'api';
import { IUserSignupDTO as SignupFormValues } from 'api/interfaces/User';
import { validateEmail, validatePassword } from 'utils/validation';
import { useGlobalContext } from 'contexts/globalContext';

const SignupForm: React.FC = () => {
  const { updateLoggedInUser } = useGlobalContext();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      name: {
        first: '',
        last: '',
      },
    } as SignupFormValues,
    validate: {
      email: (value) => {
        if (!value) return 'Email is required';
        return validateEmail(value) ? null : 'Invalid email';
      },
      password: (value) => {
        if (!value) return 'Password is required';
        return validatePassword(value) ? null : 'Invalid email';
      },
      name: {
        first: (value) => {
          if (!value) return 'First name is required';
          return null;
        },
        last: (value) => {
          if (!value) return 'Last name is required';
          return null;
        },
      },
    },
  });

  const handleSubmit = async (values: SignupFormValues) => {
    try {
      await UserApi.signup(values);
      updateLoggedInUser();
      closeAllModals();
    } catch (error: any) {
      showNotification({
        title: 'Signup error',
        message: error.message || 'Unknown error',
      });
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack spacing='xs'>
        <Group position='apart' grow>
          <TextInput
            withAsterisk
            label='First Name'
            placeholder='John'
            {...form.getInputProps('name.first')}
          />
          <TextInput
            withAsterisk
            label='Last Name'
            placeholder='Watersby'
            {...form.getInputProps('name.last')}
          />
        </Group>
        <TextInput
          withAsterisk
          label='Email'
          placeholder='your@email.com'
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label='Password'
          placeholder='********'
          type='password'
          {...form.getInputProps('password')}
        />
      </Stack>
      <Group position='right' mt='md'>
        <Button type='submit'>Sign up</Button>
      </Group>
    </form>
  );
};

export const SignupModal: ModalSettings = {
  title: 'Sign up',
  children: <SignupForm />,
};
