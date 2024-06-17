import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const CAGRCalculator: React.FC = () => {
  const [initialValue, setInitialValue] = useState<string>('');
  const [finalValue, setFinalValue] = useState<string>('');
  const [years, setYears] = useState<string>('');
  const [cagr, setCagr] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateCAGR = () => {
    setError(null);
    const initial = parseFloat(initialValue);
    const final = parseFloat(finalValue);
    const numYears = parseInt(years);

    if (isNaN(initial) || isNaN(final) || isNaN(numYears) || initial <= 0 || final <= 0 || numYears <= 0) {
      setCagr(null);
      setError('Please enter valid values.');
      return;
    }

    // CAGR calculation formula
    const CAGR = ((final / initial) ** (1 / numYears) - 1) * 100;

    setCagr(CAGR.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CAGR Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Initial Value (₹)"
        keyboardType="numeric"
        value={initialValue}
        onChangeText={setInitialValue}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Final Value (₹)"
        keyboardType="numeric"
        value={finalValue}
        onChangeText={setFinalValue}
        placeholderTextColor="#b0b0b0"
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Years"
        keyboardType="numeric"
        value={years}
        onChangeText={setYears}
        placeholderTextColor="#b0b0b0"
      />
      <TouchableOpacity style={styles.button} onPress={calculateCAGR}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      {cagr !== null && (
        <Text style={styles.result}>CAGR: {cagr}%</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  result: {
    fontSize: 22,
    marginTop: 20,
    color: '#4CAF50',
  },
});

export default CAGRCalculator;
