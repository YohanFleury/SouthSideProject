import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomScreen from '../../components/CustomScreen/CustomScreen';

interface RegisterValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Adresse email invalide').required('Champ requis'),
  username: Yup.string().required('Champ requis'),
  password: Yup.string().required('Champ requis'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Les mots de passe doivent correspondre'),
});

const RegisterScreen: React.FC = () => {
  const handleRegister = (values: RegisterValues) => {
    // Do something with the registration values, e.g. make an API call
    console.log(values);
  };

  return (
    <CustomScreen>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Formik
          initialValues={{ email: '', username: '', password: '', confirmPassword: '' }}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.formContainer}>
              <CustomInput
                onChangeText={handleChange('email')}
                value={values.email}
                onBlur={handleBlur('email')}
                placeholder="Adresse email"
              />
              {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

              <CustomInput
                onChangeText={handleChange('username')}
                value={values.username}
                onBlur={handleBlur('username')}
                placeholder="Nom d'utilisateur"
              />
              {errors.username && touched.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}

              <CustomInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                placeholder="Mot de passe"
              />
              {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <CustomInput
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
                placeholder="Confirmer le mot de passe"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}

              <View style={{ alignItems: 'center' }}>
                <CustomButton style={{ width: '60%' }} title="Valider" onPress={handleSubmit} />
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
    height: '60%',
    justifyContent: 'space-evenly',
  },
});

export default RegisterScreen;
