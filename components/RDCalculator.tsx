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
    <ScrollView contentContainerStyle={styles.container}>
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
      <Button title="Calculate" onPress={calculateRD} />
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
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

export default RDCalculator;
