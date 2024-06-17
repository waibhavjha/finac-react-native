import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HRACalculator: React.FC = () => {
  const [basicSalary, setBasicSalary] = useState<string>('');
  const [hraReceived, setHraReceived] = useState<string>('');
  const [rentPaid, setRentPaid] = useState<string>('');
  const [isMetroCity, setIsMetroCity] = useState<string>('No');
  const [hraExempted, setHraExempted] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateHRA = () => {
    setError(null);
    const basic = parseFloat(basicSalary);
    const hra = parseFloat(hraReceived);
    const rent = parseFloat(rentPaid);
    const metroFactor = isMetroCity === 'Yes' ? 0.5 : 0.4;

    if (isNaN(basic) || isNaN(hra) || isNaN(rent) || basic <= 0 || hra <= 0 || rent <= 0) {
      setHraExempted(null);
      setError('Please enter valid values.');
      return;
    }

    // HRA Exemption calculations
    const option1 = hra;
    const option2 = metroFactor * basic;
    const option3 = rent - (0.1 * basic);

    const exemptedHRA = Math.min(option1, option2, option3);
    setHraExempted(exemptedHRA.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>HRA Calculator</Text>
        <TextInput
          style={styles.input}
          placeholder="Basic Salary (₹)"
          keyboardType="numeric"
          value={basicSalary}
          onChangeText={setBasicSalary}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="HRA Received (₹)"
          keyboardType="numeric"
          value={hraReceived}
          onChangeText={setHraReceived}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="Rent Paid (₹)"
          keyboardType="numeric"
          value={rentPaid}
          onChangeText={setRentPaid}
          placeholderTextColor="#b0b0b0"
        />
        <View style={styles.metroButtonContainer}>
          <TouchableOpacity
            style={[styles.metroButton, isMetroCity === 'Yes' && styles.metroButtonActive]}
            onPress={() => setIsMetroCity('Yes')}
          >
            <Text style={styles.metroButtonText}>Metro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.metroButton, isMetroCity === 'No' && styles.metroButtonActive]}
            onPress={() => setIsMetroCity('No')}
          >
            <Text style={styles.metroButtonText}>Non-Metro</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={calculateHRA}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
        {hraExempted !== null && (
          <Text style={styles.result}>Exempted HRA: ₹{hraExempted}</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  card: {
    width: '90%',
    maxWidth: 400, // Limit maximum width for larger screens
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#333',
  },
  metroButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  metroButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 25,
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  metroButtonActive: {
    backgroundColor: '#008080',
  },
  metroButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#008080',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  result: {
    fontSize: 22,
    marginTop: 20,
    color: '#008080',
  },
});

export default HRACalculator;
