import React from 'react'
import { Image } from 'react-native'
import { Appbar } from 'react-native-paper'
import { DrawerActions } from '@react-navigation/routers'
import { darklogo, menu } from 'src/Assets/Images'
import Center from 'src/Components/Shared/Center/Center'
import Col from 'src/Components/Shared/Col/Col'
import Container from 'src/Components/Shared/Container/Container'
import Padding from 'src/Components/Shared/Padding/Padding'
import Spacer from 'src/Components/Shared/Spacer/Spacer'
import Typography from 'src/Components/Shared/Typography/Typography'
import AppStateHandler from 'src/StateHandlers/AppStateHandler'
import scaler from 'src/Utils/Shared/scaler'
import AppButton from 'src/Components/Shared/AppButton/AppButton'
import Row from 'src/Components/Shared/Row/Row'

function LogoutScreen({navigation}: any) {
    return (
        <Container>
            {/* <Appbar.Header theme={{ colors: { primary: '#ffffff' } }}>
        <Col>
          <Appbar.Action
            icon={menu}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
            // onPress={() => navigation.goBack()}
          />
        </Col>

        <Center allAxis>

          <Image
            source={darklogo}
            style={{
              height: scaler(21),
              width: scaler(49)
            }}
          />

        </Center>

        <Col/>
          

      </Appbar.Header> */}
            <Padding horizontal>

                <Spacer size={scaler(100)}/>
                <Typography
                textAlign="center"
                fontSize={scaler(15)}
                >
                    Do you really want to Logout?
                </Typography>

                <Spacer size={scaler(15)} />
                <Row>
                    <Col>
                <AppButton
                height={57}
                labelStyle={{
                  fontSize: scaler(8),
                }}
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: "#000000"
                }}>
                    No
                </AppButton>
                </Col>
                <Spacer horizontal />
                <Col>
                <AppButton
                height={57}
                labelStyle={{
                  fontSize: scaler(8),
                }}
                onPress={AppStateHandler.logout}
                style={{
                  backgroundColor: "#000000"
                }}>
                    Yes
                </AppButton>
                </Col>
                </Row>
            </Padding>
        </Container>
    )
}

export default LogoutScreen
