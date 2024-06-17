import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const App: React.FC<Props> = ({ navigation }) => {
  const navigateTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('SIPCalculator')}>
        <Text style={styles.buttonText}>SIP Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('SWPCalculator')}>
        <Text style={styles.buttonText}>SWP Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('MutualFundsReturnCalculator')}>
        <Text style={styles.buttonText}>Mutual Funds Return</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('PPFCalculator')}>
        <Text style={styles.buttonText}>PPF Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('CAGRCalculator')}>
        <Text style={styles.buttonText}>CAGR Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('HRACalculator')}>
        <Text style={styles.buttonText}>HRA Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('RetirementCalculator')}>
        <Text style={styles.buttonText}>Retirement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('GSTCalculator')}>
        <Text style={styles.buttonText}>GST Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('CompoundInterestCalculator')}>
        <Text style={styles.buttonText}>Compound Interest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('FDCalculator')}>
        <Text style={styles.buttonText}>FD Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('RDCalculator')}>
        <Text style={styles.buttonText}>RD Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo('EMICalculator')}>
        <Text style={styles.buttonText}>EMI Calculator</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    width: '80%',  // Consistent button width
    paddingVertical: 15, // Adequate padding for touch area
    paddingHorizontal: 20,
    marginBottom: 15, // Consistent spacing
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
