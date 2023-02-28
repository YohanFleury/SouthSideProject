import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Alert, Keyboard } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthRoutesParams } from '../../navigation/AuthNavigator/AuthNavigator';
import routes from '../../navigation/routes'

// Forms and Auth
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../../config/firebase'
import { signInWithEmailAndPassword,  } from 'firebase/auth'



// Components
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomScreen from '../../components/CustomScreen/CustomScreen';
import CustomText from '../../components/CustomText/CustomText';
import ActivityIndicator from '../../components/Indicators/ActivityIndicator/ActivityIndicator'

interface LoginValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Adresse email invalide').required('Champ requis'),
  password: Yup.string().required('Champ requis'),
});

const LoginScreen: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthRoutesParams>>()

    const [loading, setLoading] = useState(false); 

  
    const handleLogin = (values: LoginValues) => {
        Keyboard.dismiss()
        setLoading(true); 
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            setLoading(false); 
          })
          .catch((err) => {
            setLoading(false); 
            Alert.alert("Y a pas wesh !", err.message);
          });
        console.log(values);
      };


  return (
    <CustomScreen>
        <ActivityIndicator visible={loading} />
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
      <CustomButton title='Go to REGISTER' onPress={() => navigation.navigate(routes.REGISTER)} />
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
