import React from 'react';
import { Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { DrawerActions } from 'react-navigation';
import { darklogo, menu } from 'src/Assets/Images';
import Body from 'src/Components/Shared/Body/Body';
import Center from 'src/Components/Shared/Center/Center';
import Col from 'src/Components/Shared/Col/Col';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import scaler from 'src/Utils/Shared/scaler';
import LoginForm from './Components/LoginForm/LoginForm';

function LoginScreen({navigation}:any) {
  return (
    <Container fullScreen>
            <Padding flex={1} horizontal>
          <LoginForm />
        </Padding>
    </Container>
  );
}

export default LoginScreen;
