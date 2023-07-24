import React from 'react';
import { Button, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { closeAllModals } from '@mantine/modals';
import { ModalSettings } from '@mantine/modals/lib/context';
import { showNotification } from '@mantine/notifications';

import { UserApi } from 'api';
import { IUserSignupDTO as SignupFormValues } from 'api/interfaces/User';
import { validateEmail, validatePassword } from 'utils/validation';
import { useGlobalContext } from 'contexts/globalContext';
import { PasswordPopover } from 'components/common/PasswordPopover';

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
        return validatePassword(value)
          ? null
          : 'Password does not match requirements';
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
      const user = await UserApi.signup(values);
      updateLoggedInUser();
      closeAllModals();
    } catch (error: any) {
      showNotification({
        title: 'Error signing up user',
        message: error.message || 'Undefined error',
        color: 'red',
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
            autoComplete='given-name'
            {...form.getInputProps('name.first')}
          />
          <TextInput
            withAsterisk
            label='Last Name'
            placeholder='Smith'
            autoComplete='family-name'
            {...form.getInputProps('name.last')}
          />
        </Group>
        <TextInput
          withAsterisk
          label='Email'
          placeholder='your@email.com'
          autoComplete='email'
          {...form.getInputProps('email')}
        />
        <PasswordPopover value={form.values.password}>
          <PasswordInput
            withAsterisk
            label='Password'
            placeholder='Password'
            autoComplete='new-password'
            {...form.getInputProps('password')}
          />
        </PasswordPopover>
      </Stack>
      <Group position='right' mt='md'>
        <Button type='submit'>Submit</Button>
      </Group>
    </form>
  );
};

export const SignupModal: ModalSettings = {
  title: 'Create account',
  children: <SignupForm />,
};
