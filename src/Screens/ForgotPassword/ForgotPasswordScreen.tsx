import React from 'react'
import { useForm } from 'react-hook-form'
import AppButton from 'src/Components/Shared/AppButton/AppButton'
import Container from 'src/Components/Shared/Container/Container'
import FormInput from 'src/Components/Shared/FormInput/FormInput'
import Padding from 'src/Components/Shared/Padding/Padding'
import Spacer from 'src/Components/Shared/Spacer/Spacer'
import Typography from 'src/Components/Shared/Typography/Typography'
import scaler from 'src/Utils/Shared/scaler'

function ForgotPasswordScreen() {
    const { control, errors, handleSubmit } = useForm({
        defaultValues: { email: '' },
        mode: 'onChange',
    });

    return (
        <Container fullScreen>
            <Spacer size={scaler(32)} />

            <Typography
                textAlign="center"
                fontSize={scaler(9)}
                type="regular"
            >
                Forgot Password
            </Typography>

            <Spacer size={scaler(114)} />

            <Padding horizontal>
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
            
            <AppButton
                height={57}
                labelStyle={{
                    fontSize: scaler(7),
                }}
                style={{
                    backgroundColor: "#000000"
                }}
            >
                Send Reset Link
      </AppButton>
      </Padding>

        </Container>
    )
}

export default ForgotPasswordScreen
