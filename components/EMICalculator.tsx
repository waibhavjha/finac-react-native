import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const EMICalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [loanTenure, setLoanTenure] = useState<string>('');
  const [emi, setEMI] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateEMI = () => {
    setError(null);
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const tenure = parseFloat(loanTenure);

    if (isNaN(P) || isNaN(annualRate) || isNaN(tenure) || P <= 0 || annualRate <= 0 || tenure <= 0) {
      setEMI(null);
      setError('Please enter valid values.');
      return;
    }

    const r = annualRate / (12 * 100); // Monthly interest rate
    const n = tenure * 12; // Loan tenure in months

    const E = P * r * Math.pow((1 + r), n) / (Math.pow((1 + r), n) - 1);

    setEMI(E.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>EMI Calculator</Text>
        <TextInput
          style={styles.input}
          placeholder="Loan Amount (₹)"
          keyboardType="numeric"
          value={loanAmount}
          onChangeText={setLoanAmount}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="Annual Interest Rate (%)"
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="Loan Tenure (Years)"
          keyboardType="numeric"
          value={loanTenure}
          onChangeText={setLoanTenure}
          placeholderTextColor="#b0b0b0"
        />
        <TouchableOpacity style={styles.button} onPress={calculateEMI}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
        {emi !== null && (
          <Text style={styles.result}>EMI Amount: ₹{emi}</Text>
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
    backgroundColor: '#f4f4f4',
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
    fontSize: 26,
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

export default EMICalculator;
