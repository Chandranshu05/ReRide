import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { darklogo, menu, search } from 'src/Assets/Images';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import Row from 'src/Components/Shared/Row/Row';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import useApiFetchInfinite from 'src/Hooks/Shared/useApiFetchInfinite';
import AppStateHandler from 'src/StateHandlers/AppStateHandler';
import scaler from 'src/Utils/Shared/scaler';
import DropDownPicker from 'react-native-dropdown-picker'
import Col from 'src/Components/Shared/Col/Col';
import Typography from 'src/Components/Shared/Typography/Typography';
import PostList from './Components/PostList';
import { useNavigation } from '@react-navigation/native';

function HomeScreen({navigation}: any) {
  const { data, status, error } = useApiFetchInfinite(
    ['/users?per_page=8&page='],
  );

  const [brand, setBrand] = useState();
  const [year, setYear] = useState();
  const [color, setColor] = useState();

  console.log(data);
  console.log(status);
  console.log(error);

  return (
    <Container>

      <Spacer size={scaler(10)} />
    

      <Padding horizontal>
        <Row>
          <TouchableOpacity
          onPress={navigation.toggleDrawer()}
          >
          <Image source={menu}
            style={{
              height: scaler(21),
              width: scaler(21),
              // backgroundColor: "#ffffff"
            }}
          />
          </TouchableOpacity>

          <Spacer horizontal size={scaler(40)} />

          <Image source={darklogo}
            style={{
              height: scaler(21),
              width: scaler(49)
            }}
          />
          
          <Spacer horizontal size={scaler(40)} />

          <Image source={search}
            style={{
              height: scaler(18),
              width: scaler(18),
              // backgroundColor: "#ffffff"
            }}
          />

        </Row>

        <Spacer size={scaler(13)} />

        <DropDownPicker
          items={[
            { label: 'All', value: 'All' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Suzuki', value: 'Suzuki' },
            { label: 'Tesla', value: 'Tesla' },
            { label: 'Audi', value: 'Audi' }
          ]}
          placeholder="Brand"
          containerStyle={{ height: scaler(32) }}
          style={{ backgroundColor: "#fafafa" }}
          defaultValue={brand}
          onChangeItem={item => setBrand(item.value)}
          dropDownStyle={{
            backgroundColor: "#fafafa"
          }}
        />

        <Spacer size={scaler(3)} />

        <Row>
          <Col>
            <DropDownPicker
              items={[
                { label: 'All', value: 'All' },
                { label: '1995', value: '1995' },
                { label: '1996', value: '1996' },
                { label: '1997', value: '1997' },
                { label: '1998', value: '1998' },
                { label: '1999', value: '1999' },
                { label: '2000', value: '2000' },
                { label: '2001', value: '2001' },
                { label: '2002', value: '2002' },
                { label: '2003', value: '2003' },
                { label: '2004', value: '2004' }
              ]}
              placeholder="Year"
              containerStyle={{ height: scaler(32) }}
              style={{ backgroundColor: "#fafafa" }}
              defaultValue={year}
              onChangeItem={item => setYear(item.value)}
              dropDownStyle={{
                backgroundColor: "#fafafa"
              }}
            />
          </Col>
          <Col>
            <DropDownPicker
              items={[
                { label: 'All', value: 'All' },
                { label: 'Red', value: 'Red' },
                { label: 'Yellow', value: 'Yellow' },
                { label: 'Green', value: 'Green' },
                { label: 'Black', value: 'Black' },
                { label: 'White', value: 'White' }
              ]}
              placeholder="Color"
              containerStyle={{ height: scaler(32) }}
              style={{ backgroundColor: "#fafafa" }}
              defaultValue={color}
              onChangeItem={item => setColor(item.value)}
              dropDownStyle={{
                backgroundColor: "#fafafa",
                width: "100%"
              }}
            />
          </Col>
        </Row>


        <Spacer size={scaler(8)} />
        <Padding horizontal>
          <Row>
            <Col>
              <Typography
                textAlign="left"
                fontSize={scaler(7)}
                style={{
                  fontWeight: "bold"
                }}
              >
                Recently
            </Typography>
            </Col>

            <Col>
              <Typography
                fontSize={scaler(7)}
                textAlign="center"
              >
                View
            </Typography>
            </Col>


            <Col>
              <Typography
                fontSize={scaler(7)}
                textAlign="right"
              >
                Sort By
            </Typography>
            </Col>
          </Row>
        </Padding>

        <Spacer size={scaler(10)} />

        <PostList />

        <Spacer size={scaler(15)} />

      </Padding>
      <Spacer size={scaler(15)} />

      <AppButton mode={'outlined'} onPress={AppStateHandler.logout}>
        Logout
      </AppButton>
    </Container>
  );
}

export default HomeScreen;
