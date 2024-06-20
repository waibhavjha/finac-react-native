import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const SIPCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('');
  const [annualReturn, setAnnualReturn] = useState<string>('');
  const [investmentPeriod, setInvestmentPeriod] = useState<string>('');
  const [investedAmount, setInvestedAmount] = useState<string | null>(null);
  const [estimatedReturns, setEstimatedReturns] = useState<string | null>(null);
  const [totalValue, setTotalValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateSIP = () => {
    setError(null);
    const P = parseFloat(monthlyInvestment.replace(/,/g, ''));
    const r = parseFloat(annualReturn) / 100 / 12;
    const n = parseInt(investmentPeriod) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
      setInvestedAmount(null);
      setEstimatedReturns(null);
      setTotalValue(null);
      setError('Please enter valid values.');
      return;
    }

    const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvestment = P * n;
    const returns = FV - totalInvestment;

    setInvestedAmount(totalInvestment.toFixed(2));
    setEstimatedReturns(returns.toFixed(2));
    setTotalValue(FV.toFixed(2));
  };

  const formatCurrency = (value: string) => {
    const formattedValue = value.replace(/\D/g, '');
    return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleMonthlyInvestmentChange = (value: string) => {
    setMonthlyInvestment(formatCurrency(value));
  };

  const handleAnnualReturnChange = (value: string) => {
    setAnnualReturn(value.replace(/[^0-9.]/g, ''));
  };

  const handleInvestmentPeriodChange = (value: string) => {
    setInvestmentPeriod(value.replace(/[^0-9]/g, ''));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>SIP Calculator</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Monthly Investment"
              keyboardType="numeric"
              value={monthlyInvestment}
              onChangeText={handleMonthlyInvestmentChange}
              placeholderTextColor="#b0b0b0"
            />
            <Text style={styles.suffix}>₹</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Expected Annual Return"
              keyboardType="numeric"
              value={annualReturn}
              onChangeText={handleAnnualReturnChange}
              placeholderTextColor="#b0b0b0"
            />
            <Text style={styles.suffix}>%</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Investment Period"
              keyboardType="numeric"
              value={investmentPeriod}
              onChangeText={handleInvestmentPeriodChange}
              placeholderTextColor="#b0b0b0"
            />
            <Text style={styles.suffix}>Years</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={calculateSIP}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
        {investedAmount !== null && (
          <View style={styles.resultContainer}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Invested Amount</Text>
              <Text style={styles.resultValue}>₹{investedAmount}</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Est. Returns</Text>
              <Text style={styles.resultValue}>₹{estimatedReturns}</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Total Value</Text>
              <Text style={styles.resultValue}>₹{totalValue}</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    marginHorizontal: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#004d40',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 55,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333333',
    padding: 0,
  },
  suffix: {
    fontSize: 18,
    color: '#666666',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#004d40',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
  error: {
    color: '#e53935',
    marginTop: 12,
    fontSize: 14,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 24,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  resultLabel: {
    fontSize: 16,
    color: '#666666',
  },
  resultValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#004d40',
  },
});

export default SIPCalculator;