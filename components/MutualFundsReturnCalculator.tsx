import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MutualFundsReturnCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<string>('');
  const [monthlySIP, setMonthlySIP] = useState<string>('');
  const [annualReturn, setAnnualReturn] = useState<string>('');
  const [investmentPeriod, setInvestmentPeriod] = useState<string>('');
  const [futureValue, setFutureValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateReturns = () => {
    setError(null);
    const P = parseFloat(initialInvestment) || 0;
    const SIP = parseFloat(monthlySIP) || 0;
    const r = parseFloat(annualReturn) / 100 / 12;
    const n = parseInt(investmentPeriod) * 12;

    if (isNaN(r) || isNaN(n) || r <= 0 || n <= 0) {
      setFutureValue(null);
      setError('Please enter valid values.');
      return;
    }

    // Future value calculation for initial investment
    const FV_initial = P * Math.pow(1 + r, n);

    // Future value calculation for SIP
    const FV_SIP = SIP * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    const totalFutureValue = FV_initial + FV_SIP;

    setFutureValue(totalFutureValue.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mutual Funds Return Calculator</Text>
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
        placeholder="Monthly SIP (₹)"
        keyboardType="numeric"
        value={monthlySIP}
        onChangeText={setMonthlySIP}
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
      <TouchableOpacity style={styles.button} onPress={calculateReturns}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      {futureValue !== null && (
        <Text style={styles.result}>Future Value: ₹{futureValue}</Text>
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

export default MutualFundsReturnCalculator;
