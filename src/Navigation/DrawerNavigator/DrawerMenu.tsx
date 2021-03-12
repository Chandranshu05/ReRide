import { DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react'
import { View } from 'react-native';
import DrawerItem from './DrawerItem'
import Container from 'src/Components/Shared/Container/Container';
import AppStateHandler from 'src/StateHandlers/AppStateHandler';
import scaler from 'src/Utils/Shared/scaler';

function DrawerMenu(props : any) {

    const {navigation} = props;

    return (
        <DrawerContentScrollView {...props}>
            <Container backgroundColor={"#ffffff"}>
                <View
                style={{
                    marginTop: scaler(10),
                    marginLeft: scaler(10),
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    flex: 1,
                }}
                >
                    <DrawerItem
                        title={'Home'}
                        onPress={() => navigation.navigate('Home')}
                    />
                    <DrawerItem
                        title={'Logout'}
                        onPress={AppStateHandler.logout}
                    />
                </View>
            </Container>
        </DrawerContentScrollView>
    )
}

export default DrawerMenu;
