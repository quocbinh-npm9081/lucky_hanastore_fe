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
import { login } from '../api/apiAuth';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
const validationSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập tên của bạn'),
  phoneNumber: yup.string().required('Vui lòng nhập số điện thoại'),
});
const defaultValues = {
  name: '',
  phoneNumber: '',
};



const Login = () => {
  const redirect = useNavigate();


  const postDataForLogin = async (data :any) => {
    const isLogin = await login(data);
    
    if(isLogin.status === 200) return redirect('/miniGame');
  };



  const onSubmit = async(data: any) => {
   return  postDataForLogin(data);
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
          <Typography component='h1' variant='h5' sx={{ color: '#000' }}>
            Đăng nhập Hana
          </Typography>
          <Box sx={{ mt: 3, width: '100%' }}>
            <FormProvider defaultValues={defaultValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              <SubTextField name='name' label='Tên' />
              <SubTextField name='phoneNumber' label='Số điện thoại' />

              <Button type='submit' fullWidth variant='contained' sx={{ mt: 1, mb: 1 }}>
                Đăng nhập
              </Button>
            </FormProvider>
            <Grid container>
              <Grid item>
                <Link href='/register' variant='body2'>
                  {'Bạn chưa có tài khoản? Đăng kí ngay'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
