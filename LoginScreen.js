import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('./assets/image1.jpg'),
  require('./assets/image2.jpg'),
  require('./assets/image3.jpg'),
];

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View>
      <Image source={item} style={styles.carouselImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <Image source={require('./assets/fittrack.png')} style={styles.logo} />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Create Account Navigation */}
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      {/* Forgot Password Navigation */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Image Carousel */}
      <FlatList
        ref={carouselRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      {/* Inspirational Quote */}
      <Text style={styles.quote}>
        "You miss 100 percent of the shots you don't take." - Wayne Gretzky
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  createAccountText: {
    color: 'blue',
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: 'blue',
    marginVertical: 10,
  },
  carouselImage: {
    width: width,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default LoginScreen;