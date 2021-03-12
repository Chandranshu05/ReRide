import React, { Fragment, useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Image } from 'react-native'
import Col from 'src/Components/Shared/Col/Col'
import Row from 'src/Components/Shared/Row/Row'
import Spacer from 'src/Components/Shared/Spacer/Spacer'
import Typography from 'src/Components/Shared/Typography/Typography'
import scaler from 'src/Utils/Shared/scaler'


function PostList(){

    let today = new Date();
    let date = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();

    

    const DATA =[
          {
            imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            id:"1",
            description: 'Chevrolet Car',
            cost: '$4000'
          },
          {
            imageUrl: "https://static.autox.com/uploads/2020/12/maruti-suzuki-swift.jpg",
            id:"2",
            description: 'Suzuki Swift',
            cost: '$4000'
          },
          {
            imageUrl: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/12/mustang-1-1577523921.jpg",
            id:"3",
            description: 'Mustang',
            cost: '$4000'
          },
          {
            imageUrl: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/861a4abe_2fec_44aa_aa21_c79ceca1cdc3_660_080520125004.jpg",
            id:"4",
            description: 'BMW',
            cost: '$4000'
          },
          {
            imageUrl: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FVolvo-S60-130220211541.jpg&h=300&w=450&q=100",
            id:"5",
            description: 'Model',
            cost: '$4000'
          },
          {
            imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*",
            id:"6",
            description: 'Honda',
            cost: '$4000'
          },
          {
            imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            id:"7",
            description: 'Chevrolet Car',
            cost: '$4000'
          },
          {
            imageUrl: "https://static.autox.com/uploads/2020/12/maruti-suzuki-swift.jpg",
            id:"8",
            description: 'Suzuki Swift',
            cost: '$4000'
          },
          {
            imageUrl: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/12/mustang-1-1577523921.jpg",
            id:"9",
            description: 'Mustang',
            cost: '$4000'
          },
          {
            imageUrl: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/861a4abe_2fec_44aa_aa21_c79ceca1cdc3_660_080520125004.jpg",
            id:"10",
            description: 'BMW',
            cost: '$4000'
          },
    ]

    return(
      <Fragment>
              
            <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            ListFooterComponent={
            <View
            style={{height: scaler(120)}}
            />
            }
            renderItem={({item}) => (
              <View style={{
                width: "100%",
                backgroundColor: "#fff",
              }}>
            <Image
            source={{uri: item.imageUrl}}
            style={{
              height:scaler(100),
              width: "100%",
              borderRadius: 8
            }}
            />
            <Spacer />
            <Typography
            fontSize={scaler(6)}
            textAlign="left">{date}</Typography>

            <Row>
              <Col>
            <Typography
            fontSize={scaler(8)}
            textAlign="left"
            style={{
              fontWeight:"bold"
            }}
            >
            {item.description}</Typography>
            </Col>
            <Col>
            <Typography
            fontSize={scaler(8)}
            textAlign="right"
            >{item.cost}</Typography>
            </Col>
            </Row>
            <Spacer size={scaler(10)}/>
            
              </View>
            )}
            />
            
        </Fragment>
        
        
    )
}
export default PostList
