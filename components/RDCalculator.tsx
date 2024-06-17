import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const RDCalculator: React.FC = () => {
  const [monthlyDeposit, setMonthlyDeposit] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [maturityAmount, setMaturityAmount] = useState<string | null>(null);
  const [interestEarned, setInterestEarned] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateRD = () => {
    setError(null);
    const P = parseFloat(monthlyDeposit);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || r <= 0 || t <= 0) {
      setMaturityAmount(null);
      setInterestEarned(null);
      setError('Please enter valid values.');
      return;
    }

    const n = 1; // Compounded annually for RD
    const A = P * (((1 + r/n)**(n*t) - 1) / (1 + r/n)) * (1 + r/n);
    const I = A - (P * t * 12); // Total deposit minus principal amount

    setMaturityAmount(A.toFixed(2));
    setInterestEarned(I.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.card}>
      <Text style={styles.title}>RD Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Monthly Deposit Amount (₹)"
        keyboardType="numeric"
        value={monthlyDeposit}
        onChangeText={setMonthlyDeposit}
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
      <Button title="Calculate" onPress={calculateRD} color="#008080" />
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center', // Center content horizontally
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#008080', // Updated title color
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
    backgroundColor: '#f9f9f9', // Updated input background color
    color: '#333', // Updated input text color
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  result: {
    fontSize: 22,
    marginTop: 20,
    color: '#008080', // Updated result text color
  },
});

export default RDCalculator;
