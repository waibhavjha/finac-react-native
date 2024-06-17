import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const RetirementCalculator: React.FC = () => {
  const [currentAge, setCurrentAge] = useState<string>('');
  const [retirementAge, setRetirementAge] = useState<string>('');
  const [currentSavings, setCurrentSavings] = useState<string>('');
  const [monthlySavings, setMonthlySavings] = useState<string>('');
  const [annualReturn, setAnnualReturn] = useState<string>('');
  const [futureSavings, setFutureSavings] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateRetirementSavings = () => {
    setError(null);
    const age = parseFloat(currentAge);
    const retireAge = parseFloat(retirementAge);
    const initialSavings = parseFloat(currentSavings);
    const monthlySave = parseFloat(monthlySavings);
    const returnRate = parseFloat(annualReturn) / 100;

    if (isNaN(age) || isNaN(retireAge) || isNaN(initialSavings) || isNaN(monthlySave) || isNaN(returnRate) || age <= 0 || retireAge <= 0 || initialSavings < 0 || monthlySave <= 0 || returnRate <= 0) {
      setFutureSavings(null);
      setError('Please enter valid values.');
      return;
    }

    const months = (retireAge - age) * 12;
    const monthlyRate = returnRate / 12;

    // Future Value of Current Savings
    const futureValueCurrentSavings = initialSavings * Math.pow(1 + monthlyRate, months);

    // Future Value of Monthly Savings
    const futureValueMonthlySavings = monthlySave * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

    const totalSavings = futureValueCurrentSavings + futureValueMonthlySavings;

    setFutureSavings(totalSavings.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Retirement Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Age"
        keyboardType="numeric"
        value={currentAge}
        onChangeText={setCurrentAge}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Retirement Age"
        keyboardType="numeric"
        value={retirementAge}
        onChangeText={setRetirementAge}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Current Savings (₹)"
        keyboardType="numeric"
        value={currentSavings}
        onChangeText={setCurrentSavings}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Monthly Savings (₹)"
        keyboardType="numeric"
        value={monthlySavings}
        onChangeText={setMonthlySavings}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Expected Annual Return Rate (%)"
        keyboardType="numeric"
        value={annualReturn}
        onChangeText={setAnnualReturn}
        placeholderTextColor="#b0b0b0"
      />
      <Button title="Calculate" onPress={calculateRetirementSavings} />
      {error && <Text style={styles.error}>{error}</Text>}
      {futureSavings !== null && (
        <Text style={styles.result}>Estimated Savings at Retirement: ₹{futureSavings}</Text>
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

export default RetirementCalculator;
