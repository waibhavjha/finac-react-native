import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SIPCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('');
  const [annualReturn, setAnnualReturn] = useState<string>('');
  const [investmentPeriod, setInvestmentPeriod] = useState<string>('');
  const [futureValue, setFutureValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateSIP = () => {
    setError(null);
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturn) / 100 / 12;
    const n = parseInt(investmentPeriod) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
      setFutureValue(null);
      setError('Please enter valid values.');
      return;
    }

    const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setFutureValue(FV.toFixed(2));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>SIP Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Monthly Investment (₹)"
          keyboardType="numeric"
          value={monthlyInvestment}
          onChangeText={setMonthlyInvestment}
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
          placeholder="Investment Period (Years)"
          keyboardType="numeric"
          value={investmentPeriod}
          onChangeText={setInvestmentPeriod}
          placeholderTextColor="#b0b0b0"
        />
      </View>
      <Button title="Calculate" onPress={calculateSIP} color="#008080" />
      {error && <Text style={styles.error}>{error}</Text>}
      {futureValue !== null && (
        <Text style={styles.result}>Future Value: ₹{futureValue}</Text>
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
    color: '#008080',
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
    backgroundColor: '#f9f9f9',
    color: '#333',
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

export default SIPCalculator;
