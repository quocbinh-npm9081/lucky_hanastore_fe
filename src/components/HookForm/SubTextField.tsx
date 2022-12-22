import { Controller, useFormContext } from 'react-hook-form';
import { Box, Typography, TextField } from '@mui/material';
import React from 'react';

const SubTextField: React.FC<{ name: string; defaultValue?: string; label?: string }> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box>
      <Typography variant='body2' style={{ color: '#000' }}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            margin='normal'
            fullWidth
            id={name}
            autoComplete={`current-${name}`}
            helperText={errors[name] ? `${errors[`${name}`]?.message}` : ''}
          />
        )}
      />
    </Box>
  );
};

export default SubTextField;
