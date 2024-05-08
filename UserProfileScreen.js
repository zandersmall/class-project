// UserProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./assets/fittrack.png')} style={styles.logo} />
      </View>
      <View style={styles.userInfoSection}>
        <Image source={require('./assets/default-avatar.jpg')} style={styles.avatar} />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userTitle}>Beginner Lifter</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsContainer}>
      <TouchableOpacity 
        style={styles.statBox}
        onPress={() => navigation.navigate('Exercise')} // Navigates to the Exercise screen
      >
        <Icon name="dumbbell" size={30} color="#000" />
        <Text style={styles.statLabel}>Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.statBox}
        onPress={() => navigation.navigate('Stats')} // Navigates to the Stats screen
      >
        <Icon name="chart-bar" size={30} color="#000" />
        <Text style={styles.statLabel}>Stats</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>5000 lbs</Text>
          <Text style={styles.statTitle}>Total Weight Lifted</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>100 lbs</Text>
          <Text style={styles.statTitle}>Average Weight Lifted</Text>
        </View>
      </View>
      <View style={styles.workoutContainer}>
        <Text style={styles.workoutTitle}>Arm day</Text>
        <Text style={styles.workoutInfo}>Gym Equipment</Text>
        <Text style={styles.workoutDetails}>Dumbbells</Text>
        <Text style={styles.workoutReps}>3 sets, 10 reps</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
      },
      statBox: {
        width: '48%', // Slightly less than half to account for the space between the boxes
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e1e1e1', // Placeholder background color
        borderRadius: 10,
      },
      statLabel: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
      },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  userInfoSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#d9d9d9',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  userTitle: {
    fontSize: 16,
    color: '#606060',
  },
  button: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statTitle: {
    fontSize: 16,
    color: '#606060',
  },
  workoutContainer: {
    paddingHorizontal: 20,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutInfo: {
    fontSize: 16,
    marginTop: 4,
  },
  workoutDetails: {
    fontSize: 16,
    marginTop: 4,
  },
  workoutReps: {
    fontSize: 16,
    color: '#606060',
    marginTop: 4,
  },
});

export default UserProfileScreen;
