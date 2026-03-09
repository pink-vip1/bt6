import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, '');
    setPhoneNumber(cleaned);

    if (cleaned.length > 0) {
      if (cleaned[0] !== '0') {
        setErrorMsg('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
      } 
      else if (cleaned.length < 10) {
        setErrorMsg('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
      } 
      else {
        setErrorMsg('');
      }
    } else {
      setErrorMsg(''); 
    }
  };

  const isValid = phoneNumber.length === 10 && phoneNumber[0] === '0' && errorMsg === '';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.headerTitle}>Đăng nhập</Text>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nhập số điện thoại</Text>
          <Text style={styles.subText}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản</Text>

          <TextInput
            style={[styles.input, errorMsg ? styles.inputError : null]}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={handleInputChange}
            
            maxLength={10} 
          />

          <View style={{ height: 25 }}>
            {errorMsg !== '' && <Text style={styles.errorText}>{errorMsg}</Text>}
          </View>

          <TouchableOpacity 
            style={[
                styles.button, 
                { backgroundColor: isValid ? '#3300FF' : '#E0E0E0' }
            ]}
            disabled={!isValid}
            onPress={() => console.log("Tiến hành đăng nhập với:", phoneNumber)}
          >
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingVertical: 10,
    color: '#000',
  },
  inputError: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;