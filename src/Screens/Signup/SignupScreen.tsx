import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, TouchableOpacity } from 'react-native'
import AppButton from 'src/Components/Shared/AppButton/AppButton'
import Center from 'src/Components/Shared/Center/Center'
import Container from 'src/Components/Shared/Container/Container'
import FormInput from 'src/Components/Shared/FormInput/FormInput'
import Padding from 'src/Components/Shared/Padding/Padding'
import Row from 'src/Components/Shared/Row/Row'
import Spacer from 'src/Components/Shared/Spacer/Spacer'
import Typography from 'src/Components/Shared/Typography/Typography'
import useAuth from 'src/Hooks/Custom/useAuth'
import scaler from 'src/Utils/Shared/scaler'
import SnackbarHandler from 'src/Utils/Shared/SnackbarHandler'

function SignupScreen({navigation}: any) {

    const { control, errors, handleSubmit, watch, setValue, register } = useForm({
        defaultValues: { 
            email: 'neeraj@gmail.com', 
            name: 'neeraj', 
            phone: '8395094203', 
            password: '123456', 
            confirm_password: '123456' 
        },
        mode: 'onChange',
    });

    const [loading, setLoading] = useState(false);
    const [isVerificationVisible, setIsVerificationVisible] = useState(false);
    const [userValues, setUserValues] = useState<any>({});

    
    const signUp = (defaultValues: any) => {
        Keyboard.dismiss();
        setLoading(true);
        useAuth.signUp({
            email: defaultValues.email,
            password: defaultValues.password,
            attributes: {
                name: defaultValues.name,
                phone: `+91${defaultValues.mobile}`
            },
        })
        .then((res) => {
            setLoading(false);
            setUserValues(defaultValues);
            console.log('Signed up ---', res);
            setIsVerificationVisible(true)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
            SnackbarHandler.errorToast(err.message);
        });
    };


    return (
        <Container fullScreen>
            <Padding horizontal>

                <Spacer size={scaler(25)} />

                <Typography
                    fontSize={scaler(9)}
                    textAlign="center"
                    type="regular"
                >
                    Create Account
                </Typography>

                <Spacer size={scaler(34)} />

                <FormInput
                    config={{
                        name: 'name',
                        textInputProps: {
                            label: 'Name',
                            placeholder: 'Name',
                        },
                    }}
                    errors={errors}
                    control={control}
                />
                <Spacer size={scaler(8)} />
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
                <Spacer size={scaler(8)} />
                <FormInput
                    config={{
                        name: 'phone',
                        textInputProps: {
                            label: 'Mobile Number',
                            placeholder: 'Mobile Number',
                        },
                    }}
                    errors={errors}
                    control={control}
                />
                <Spacer size={scaler(8)} />
                <FormInput
                    config={{
                        name: 'password',
                        textInputProps: {
                            label: 'Password',
                            placeholder: 'Password',
                        },
                    }}
                    errors={errors}
                    control={control}
                />
                <Spacer size={scaler(8)} />
                <FormInput
                    config={{
                        name: 'confirm_password',
                        textInputProps: {
                            label: 'Confirm Password',
                            placeholder: 'Confirm Password',
                        },
                    }}
                    errors={errors}
                    control={control}
                />

                <Spacer size={scaler(10)} />

                <Typography
                    textAlign="center"
                    fontSize={scaler(7)}
                >
                    By registering you agree to our <TouchableOpacity ><Typography fontSize={scaler(7)} style={{ fontWeight: 'bold'}}>Terms and Conditions</Typography></TouchableOpacity> {'\n'}and our <TouchableOpacity><Typography fontSize={scaler(7)} style={{ fontWeight: 'bold'}}>Privacy Policy</Typography></TouchableOpacity>
                </Typography>

                <Spacer size={scaler(15)} />

                <AppButton
                    height={57}
                    labelStyle={{
                        fontSize: scaler(7),
                    }}
                    style={{
                        backgroundColor: "#000000"
                    }}
                >
                    Sign Up
                </AppButton>

                <Spacer size={scaler(13)} />
                <Center>
                    <Row>
                <Typography fontSize={scaler(7)}>Already Registered?</Typography>
                <Spacer horizontal/>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Typography 
                    fontSize={scaler(7)}
                    style={{ fontWeight: 'bold'}}
                    >Login Here</Typography></TouchableOpacity>
                </Row>
                </Center>

                <Spacer size={scaler(21)} />
            </Padding>
        </Container>
    )
}

export default SignupScreen
