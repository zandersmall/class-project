import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ExerciseScreen = ({ navigation }) => {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Text style={styles.backButton}>Back Home</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exercise</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Workout Name</Text>
        <TextInput
          style={styles.input}
          value={workoutName}
          onChangeText={setWorkoutName}
          placeholder="Enter workout name"
        />

        <Text style={styles.label}>Select Workout Type</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, workoutType === 'Cardio' && styles.selectedButton]}
            onPress={() => setWorkoutType('Cardio')}
          >
            <Text style={styles.buttonText}>Cardio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, workoutType === 'Strength Training' && styles.selectedButton]}
            onPress={() => setWorkoutType('Strength Training')}
          >
            <Text style={styles.buttonText}>Strength Training</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Reps</Text>
        <TextInput
          style={styles.input}
          value={reps}
          onChangeText={setReps}
          placeholder="Enter number of reps"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Sets</Text>
        <TextInput
          style={styles.input}
          value={sets}
          onChangeText={setSets}
          placeholder="Enter number of sets"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Suggested Exercises</Text>
      <View style={styles.exerciseSuggestion}>
        <MaterialCommunityIcons name="run" size={24} color="#000" />
        <Text style={styles.exerciseText}>Squats - Legs</Text>
        <Text style={styles.exerciseMeta}>4 sets x 12 reps</Text>
      </View>

      <View style={styles.exerciseSuggestion}>
        <MaterialCommunityIcons name="bike" size={24} color="#000" />
        <Text style={styles.exerciseText}>Cycling - Cardio</Text>
        <Text style={styles.exerciseMeta}>30 minutes</Text>
      </View>

      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.buttonText}>Save Workout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    fontSize: 18,
    color: '#0000ff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#abc',
  },
  buttonText: {
    fontSize: 16,
  },
  exerciseSuggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  exerciseText: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  exerciseMeta: {
    fontSize: 16,
    color: 'grey',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  footerButton: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
});

export default ExerciseScreen;

