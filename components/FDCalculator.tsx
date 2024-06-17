import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FDCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [maturityAmount, setMaturityAmount] = useState<string | null>(null);
  const [interestEarned, setInterestEarned] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateFD = () => {
    setError(null);
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || r <= 0 || t <= 0) {
      setMaturityAmount(null);
      setInterestEarned(null);
      setError('Please enter valid values.');
      return;
    }

    const A = P * Math.pow((1 + r / 1), 1 * t); // Assuming annual compounding
    const I = A - P;

    setMaturityAmount(A.toFixed(2));
    setInterestEarned(I.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FD Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Principal Amount (₹)"
        keyboardType="numeric"
        value={principal}
        onChangeText={setPrincipal}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Annual Interest Rate (%)"
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Time (Years)"
        keyboardType="numeric"
        value={time}
        onChangeText={setTime}
        placeholderTextColor="#b0b0b0"
      />
      <TouchableOpacity style={styles.button} onPress={calculateFD}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      {maturityAmount !== null && (
        <Text style={styles.result}>Maturity Amount: ₹{maturityAmount}</Text>
      )}
      {interestEarned !== null && (
        <Text style={styles.result}>Interest Earned: ₹{interestEarned}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    backgroundColor: '#1E90FF',
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
    color: '#1E90FF',
  },
});

export default FDCalculator;
