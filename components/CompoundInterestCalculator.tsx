import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [compoundingFrequency, setCompoundingFrequency] = useState<string>('');
  const [totalAmount, setTotalAmount] = useState<string | null>(null);
  const [compoundInterest, setCompoundInterest] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateCompoundInterest = () => {
    setError(null);
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundingFrequency);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n) || P <= 0 || r <= 0 || t <= 0 || n <= 0) {
      setTotalAmount(null);
      setCompoundInterest(null);
      setError('Please enter valid values.');
      return;
    }

    const A = P * Math.pow((1 + r / n), n * t);
    const CI = A - P;

    setTotalAmount(A.toFixed(2));
    setCompoundInterest(CI.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Compound Interest Calculator</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Compounding Frequency (times per year)"
          keyboardType="numeric"
          value={compoundingFrequency}
          onChangeText={setCompoundingFrequency}
          placeholderTextColor="#b0b0b0"
        />
        <TouchableOpacity style={styles.button} onPress={calculateCompoundInterest}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
        {totalAmount !== null && (
          <Text style={styles.result}>Total Amount: ₹{totalAmount}</Text>
        )}
        {compoundInterest !== null && (
          <Text style={styles.result}>Compound Interest: ₹{compoundInterest}</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 20,
  },
  card: {
    width: '90%',
    maxWidth: 400,
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
    backgroundColor: '#4CAF50',
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
    color: '#4CAF50',
  },
});

export default CompoundInterestCalculator;
