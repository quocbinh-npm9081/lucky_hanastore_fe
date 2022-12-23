import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormProvider from '../components/HookForm/FormProvider';
import SubTextField from '../components/HookForm/SubTextField';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập tên của bạn'),
  phoneNumber: yup.string().required('Vui lòng nhập số điện thoại'),
});
const defaultValues = {
  name: '',
  phoneNumber: '',
};
const Register = () => {
  const onSubmit = (data: any) => {
    console.log('DATA: :', data);
  };

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5' style={{color: '#000'}}>
            Đăng kí Hana
          </Typography>
          <Box sx={{ mt: 3, width: '100%' }}>
            <FormProvider defaultValues={defaultValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              <SubTextField name='name' label='Tên của bạn' />
              <SubTextField name='phoneNumber' label='Số điện thoại' />
              <Button color='error' type='submit' fullWidth variant='contained' sx={{ mt: 1, mb: 1 }}>
                Đăng kí{' '}
              </Button>
            </FormProvider>
            <Grid container>
              <Grid item>
                <Link href='/login' variant='body2'>
                  {'Bạn đã có tài khoản? Đăng nhập ngay'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Register;
