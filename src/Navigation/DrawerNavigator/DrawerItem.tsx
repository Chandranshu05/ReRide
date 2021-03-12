import React, { useMemo } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper'
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

type PropType = {
    title: string;
    leftImage?: any;
    onPress?: () => void | undefined | any;
}

function DrawerItem({title,leftImage,onPress}: PropType) {
    const theme = useTheme();
    
    return (
        <TouchableOpacity onPress={onPress}>
            <Typography
                color={"#000000"}
                textAlign="left"
                type="medium"
                fontSize={scaler(9)}>
                {title}
            </Typography>
            <Spacer size={scaler(10)}/>
        </TouchableOpacity>
    )
}

export default DrawerItem;
