import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const GSTCalculator: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState<string>('');
  const [gstRate, setGstRate] = useState<string>('');
  const [gstAmount, setGstAmount] = useState<string | null>(null);
  const [totalAmount, setTotalAmount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateGST = () => {
    setError(null);
    const amount = parseFloat(initialAmount);
    const rate = parseFloat(gstRate);

    if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate <= 0) {
      setGstAmount(null);
      setTotalAmount(null);
      setError('Please enter valid values.');
      return;
    }

    const gst = (amount * rate) / 100;
    const total = amount + gst;

    setGstAmount(gst.toFixed(2));
    setTotalAmount(total.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>GST Calculator</Text>
        <TextInput
          style={styles.input}
          placeholder="Initial Amount (₹)"
          keyboardType="numeric"
          value={initialAmount}
          onChangeText={setInitialAmount}
          placeholderTextColor="#b0b0b0"
        />
        <TextInput
          style={styles.input}
          placeholder="GST Rate (%)"
          keyboardType="numeric"
          value={gstRate}
          onChangeText={setGstRate}
          placeholderTextColor="#b0b0b0"
        />
        <TouchableOpacity style={styles.button} onPress={calculateGST}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
        {gstAmount !== null && (
          <Text style={styles.result}>GST Amount: ₹{gstAmount}</Text>
        )}
        {totalAmount !== null && (
          <Text style={styles.result}>Total Amount: ₹{totalAmount}</Text>
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

export default GSTCalculator;
