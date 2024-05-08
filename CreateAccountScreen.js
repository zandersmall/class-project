// CreateAccountScreen.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button, Picker, Image } from 'react-native';

const CreateAccountScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [exerciseFrequency, setExerciseFrequency] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleCreateAccount = () => {
    // Here we would handle the account creation logic
    // For now, it just navigates to the UserProfile screen
    navigation.navigate('UserProfile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/fittrack.png')} style={styles.logo} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter your Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter a password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
        />
        <Text style={styles.label}>Exercise Frequency</Text>
        <Picker
          selectedValue={exerciseFrequency}
          style={styles.picker}
          onValueChange={(itemValue) => setExerciseFrequency(itemValue)}
        >
          <Picker.Item label="Select Exercise Frequency" value="" />
          <Picker.Item label="Rarely" value="rarely" />
          <Picker.Item label="1-2 times a week" value="1-2" />
          <Picker.Item label="3-4 times a week" value="3-4" />
          <Picker.Item label="5+ times a week" value="5+" />
        </Picker>

        <Text style={styles.label}>Fitness Goals</Text>
        <Picker
          selectedValue={fitnessGoals}
          style={styles.picker}
          onValueChange={(itemValue) => setFitnessGoals(itemValue)}
        >
          <Picker.Item label="Select Fitness Goals" value="" />
          <Picker.Item label="Lose Weight" value="lose_weight" />
          <Picker.Item label="Build Muscle" value="build_muscle" />
          <Picker.Item label="Improve Stamina" value="improve_stamina" />
          <Picker.Item label="Flexibility" value="flexibility" />
        </Picker>

        <TextInput
          style={styles.input}
          onChangeText={setBirthday}
          value={birthday}
          placeholder="Input your birthday"
        />

        <View style={styles.buttonContainer}>
          <Button
            onPress={handleCreateAccount}
            title="Create Account"
            color="#841584"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default CreateAccountScreen;
