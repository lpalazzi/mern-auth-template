import React, { useState } from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';
import { Box, Popover, Progress, Text } from '@mantine/core';
import { getPasswordStrength, passwordRequirements } from 'utils/validation';

type PasswordPopover = { value: string; children: React.ReactNode };

export const PasswordPopover: React.FC<PasswordPopover> = (props) => {
  const [passwordPopoverOpened, setPasswordPopoverOpened] = useState(false);

  const strength = getPasswordStrength(props.value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';
  const passwordChecks = passwordRequirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(props.value)}
    />
  ));

  return (
    <Popover
      opened={passwordPopoverOpened}
      position='top'
      width='target'
      transitionProps={{ transition: 'pop' }}
      withinPortal
    >
      <Popover.Target>
        <div
          onFocusCapture={() => setPasswordPopoverOpened(true)}
          onBlurCapture={() => setPasswordPopoverOpened(false)}
        >
          {props.children}
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress
          color={color}
          value={strength}
          size={5}
          style={{ marginBottom: 10 }}
        />
        <PasswordRequirement
          label='Includes at least 8 characters'
          meets={props.value.length > 5}
        />
        {passwordChecks}
      </Popover.Dropdown>
    </Popover>
  );
};

export const PasswordRequirement = ({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) => {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size='sm'
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}{' '}
      <Box ml={10}>{label}</Box>
    </Text>
  );
};
