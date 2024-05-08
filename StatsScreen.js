import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StatsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Text style={styles.backButton}>Back Home</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Stats</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>100 kg</Text>
          <Text style={styles.statLabel}>Max Weight</Text>
          <Text style={styles.statChange}>+5 kg</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>500</Text>
          <Text style={styles.statLabel}>Total Reps</Text>
          <Text style={styles.statChange}>+50</Text>
        </View>
      </View>

      <Image source={require('./assets/graph.png')} style={styles.graphImage} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Workout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="trophy-variant" size={24} color="#000" />
        <Text style={styles.infoText}>Personal Best</Text>
        <Text style={styles.infoValue}>120 kg</Text>
      </View>

      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="clock-outline" size={24} color="#000" />
        <Text style={styles.infoText}>Last Workout</Text>
        <Text style={styles.infoValue}>3 days ago</Text>
      </View>

      <View style={styles.recentWorkouts}>
        <Text style={styles.recentTitle}>Recent Workouts</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
        <View style={styles.workoutEntry}>
          <MaterialCommunityIcons name="calendar-blank" size={24} color="#000" />
          <Text style={styles.workoutText}>Leg Day</Text>
          <Text style={styles.workoutInfo}>Today - 5 sets, 8 reps</Text>
        </View>
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
    padding: 20,
  },
  backButton: {
    fontSize: 18,
    color: '#0000ff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: 'grey',
  },
  statChange: {
    fontSize: 14,
    color: '#4CAF50',
  },
  graphImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  button: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  infoText: {
    fontSize: 18,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentWorkouts: {
    padding: 20,
  },
  recentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 16,
    color: '#0000ff',
    alignSelf: 'flex-end',
  },
  workoutEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  workoutText: {
    fontSize: 18,
    marginLeft: 10,
  },
  workoutInfo: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 10,
  },
});

export default StatsScreen;

