import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const PPFCalculator: React.FC = () => {
  const [annualInvestment, setAnnualInvestment] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [investmentPeriod, setInvestmentPeriod] = useState<string>('');
  const [futureValue, setFutureValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculatePPF = () => {
    setError(null);
    const A = parseFloat(annualInvestment);
    const r = parseFloat(interestRate) / 100;
    const n = parseInt(investmentPeriod);

    if (isNaN(A) || isNaN(r) || isNaN(n) || A <= 0 || r <= 0 || n <= 0) {
      setFutureValue(null);
      setError('Please enter valid values.');
      return;
    }

    // PPF calculation formula
    let FV = 0;
    for (let i = 1; i <= n; i++) {
      FV += A * Math.pow(1 + r, n - i + 1);
    }

    setFutureValue(FV.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>PPF Calculator</Text>
        <TextInput
          style={styles.input}
          placeholder="Annual Investment (₹)"
          keyboardType="numeric"
          value={annualInvestment}
          onChangeText={setAnnualInvestment}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="Interest Rate (%)"
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
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
        <Button title="Calculate" onPress={calculatePPF} color="#008080" />
        {error && <Text style={styles.error}>{error}</Text>}
        {futureValue !== null && (
          <Text style={styles.result}>Future Value: ₹{futureValue}</Text>
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

export default PPFCalculator;
