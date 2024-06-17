import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SWPCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<string>('');
  const [annualReturn, setAnnualReturn] = useState<string>('');
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>('');
  const [withdrawalFrequency, setWithdrawalFrequency] = useState<string>('');
  const [investmentPeriod, setInvestmentPeriod] = useState<string>('');
  const [remainingValue, setRemainingValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateSWP = () => {
    setError(null);
    const P = parseFloat(initialInvestment);
    const r = parseFloat(annualReturn) / 100 / 12;
    const W = parseFloat(withdrawalAmount);
    const n = parseInt(withdrawalFrequency) * parseInt(investmentPeriod) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(W) || isNaN(n) || P <= 0 || r <= 0 || W <= 0 || n <= 0) {
      setRemainingValue(null);
      setError('Please enter valid values.');
      return;
    }

    let value = P;
    for (let i = 0; i < n; i++) {
      value = value * (1 + r) - W;
      if (value < 0) {
        value = 0; // Prevent negative remaining value
        break;
      }
    }

    setRemainingValue(value.toFixed(2));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>SWP Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Initial Investment (₹)"
          keyboardType="numeric"
          value={initialInvestment}
          onChangeText={setInitialInvestment}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="Expected Annual Return (%)"
          keyboardType="numeric"
          value={annualReturn}
          onChangeText={setAnnualReturn}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="Withdrawal Amount (₹)"
          keyboardType="numeric"
          value={withdrawalAmount}
          onChangeText={setWithdrawalAmount}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="Withdrawal Frequency (Months)"
          keyboardType="numeric"
          value={withdrawalFrequency}
          onChangeText={setWithdrawalFrequency}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="Investment Period (Years)"
          keyboardType="numeric"
          value={investmentPeriod}
          onChangeText={setInvestmentPeriod}
          placeholderTextColor="#b0b0b0"
        />
      </View>
      <Button title="Calculate" onPress={calculateSWP} color="#008080" />
      {error && <Text style={styles.error}>{error}</Text>}
      {remainingValue !== null && (
        <Text style={styles.result}>Remaining Value: ₹{remainingValue}</Text>
      )}
    </View>
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
  inputContainer: {
    width: '100%',
    marginBottom: 15,
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

export default SWPCalculator;
