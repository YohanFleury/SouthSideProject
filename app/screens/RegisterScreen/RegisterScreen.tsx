import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Alert } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthRoutesParams } from '../../navigation/AuthNavigator/AuthNavigator';
import routes from '../../navigation/routes'

// Forms and Auth
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { auth, database } from '../../../config/firebase';

// Components
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

    const navigation = useNavigation<NativeStackNavigationProp<AuthRoutesParams>>()

  const handleRegister = (values: RegisterValues) => {

    createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(() => Alert.alert("Ouais c'est baaaaaan"))
        .catch((err) => Alert.alert("Y a pas wesh !", err.message))
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
                placeholder="Email"
              />
              {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

              <CustomInput
                onChangeText={handleChange('username')}
                value={values.username}
                onBlur={handleBlur('username')}
                placeholder="Username"
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
        <CustomButton title='Go to Login' onPress={() => navigation.navigate(routes.LOGIN)} />
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
