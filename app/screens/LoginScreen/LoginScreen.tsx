import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomScreen from '../../components/CustomScreen/CustomScreen';

interface LoginValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Adresse email invalide').required('Champ requis'),
  password: Yup.string().required('Champ requis'),
});

const LoginScreen: React.FC = () => {
  const handleLogin = (values: LoginValues) => {
    // Do something with the login values, e.g. make an API call
    console.log(values);
  };

  return (
    <CustomScreen>
     <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

        <View style={styles.formContainer}>
        <CustomInput
          onChangeText={handleChange('email')}
          value={values.email}
          onBlur={handleBlur('email')}
          placeholder='email'
        />
        {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

        <CustomInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry
          placeholder='password'
        />
        {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

        <View style={{alignItems: 'center'}}>
            <CustomButton style={{width: '60%',}} title='Valider' onPress={handleSubmit} />
        </View>
        </View>
        )}
      </Formik>
     </KeyboardAvoidingView>
    </CustomScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  formContainer: {
    height: '50%',
    justifyContent: 'space-evenly',
  }
});

export default LoginScreen;
