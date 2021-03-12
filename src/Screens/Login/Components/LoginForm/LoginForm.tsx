import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'react-native-paper'
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import useAuth from 'src/Hooks/Custom/useAuth';
import scaler from 'src/Utils/Shared/scaler';
import AppButton from 'src/Components/Shared/AppButton/AppButton'
import Row from 'src/Components/Shared/Row/Row';
import Center from 'src/Components/Shared/Center/Center';
import { TouchableOpacity } from 'react-native';
import { useQueryCache } from 'react-query';

function LoginForm() {

  const { control, errors, handleSubmit } = useForm({
    defaultValues: {
      email: 'eve.holt@reqres.in',
       password: '12345678'
      },
    mode: 'onChange'
  });

  const queryCache = useQueryCache();
  const theme = useTheme();
  const {loading, login } = useAuth();
  const navigation = useNavigation();

  const onSubmit = handleSubmit((login));

  return (
    <Fragment>
      <Spacer size={25} />

      <Typography
        textAlign={'center'}
        type={'regular'}
        fontSize={22}
      >
        Login
      </Typography>

      <Spacer size={scaler(84)} />

      <FormInput
        config={{
          name: 'email',
          textInputProps: {
            label: 'Email',
            placeholder: 'Email',
          },
          
        }}
        errors={errors}
        control={control}
      />

      <Spacer size={scaler(20)} />

      <FormInput
        config={{
          name: 'password',
          textInputProps: {
            label: 'Password',
            secureTextEntry: true,
            placeholder: 'Password',
          },
        }}
        errors={errors}
        control={control}
      />

      <Spacer size={scaler(20)} />

      <Row>

        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}

        <Spacer size={scaler(5)} horizontal />

        <Typography
          fontSize={scaler(7)}
          type="regular"
          style={{ letterSpacing: 1 }}
        >Remember Me</Typography>

        <Spacer size={scaler(45)} horizontal />
        <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        >
        <Typography
          fontSize={scaler(7)}
          type="regular"
          style={{ letterSpacing: 1, fontWeight: 'bold' }}
        >Forgot Password?</Typography>
        </TouchableOpacity>

      </Row>

      <Spacer size={scaler(65)} />

      <AppButton
        loading={loading}
        height={57}
        labelStyle={{
          fontSize: scaler(8),
        }}
        onPress={onSubmit}
        style={{
          backgroundColor: "#000000"
        }}
      >
        Sign In
      </AppButton>
      <Spacer size={scaler(12)} />
        <Center>
      <Row>
        <Typography
          fontSize={scaler(7)}
          type="regular"
          textAlign="center"
        >New User?</Typography>

        <Spacer horizontal />
        <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        >
        <Typography
          fontSize={scaler(7)}
          type="regular" textAlign="center"
          style={{ fontWeight: 'bold', letterSpacing: 1}}
        >Create Account</Typography>
        </TouchableOpacity>
      </Row>
      </Center>

      <Spacer size={scaler(15)} />
    </Fragment>
  );
}

export default LoginForm;
