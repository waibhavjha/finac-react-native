import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import tw from "twrnc";


type Props = {
  navigation: NavigationProp<any>;
};

const App: React.FC<Props> = ({ navigation }) => {
  const navigateTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const buttons = [
    { screen: 'SIPCalculator', text: 'SIP Calculator', icon: require('./assets/icons/calculator.png'), color: '#4CAF50' },
    { screen: 'SWPCalculator', text: 'SWP Calculator', icon: require('./assets/icons/asset.png'), color: '#FF9800' },
    { screen: 'MutualFundsReturnCalculator', text: 'Mutual Funds Return', icon: require('./assets/icons/bank.png'), color: '#2196F3' },
    { screen: 'PPFCalculator', text: 'PPF Calculator', icon: require('./assets/icons/dashboard.png'), color: '#9C27B0' },
    { screen: 'CAGRCalculator', text: 'CAGR Calculator', icon: require('./assets/icons/economic.png'), color: '#F44336' },
    { screen: 'HRACalculator', text: 'HRA Calculator', icon: require('./assets/icons/payment.png'), color: '#3F51B5' },
    { screen: 'RetirementCalculator', text: 'Retirement', icon: require('./assets/icons/profits.png'), color: '#4CAF50' },
    { screen: 'GSTCalculator', text: 'GST Calculator', icon: require('./assets/icons/stats.png'), color: '#FF9800' },
    { screen: 'CompoundInterestCalculator', text: 'Compound Interest', icon: require('./assets/icons/calculator.png'), color: '#2196F3' },
    { screen: 'FDCalculator', text: 'FD Calculator', icon: require('./assets/icons/asset.png'), color: '#9C27B0' },
    { screen: 'RDCalculator', text: 'RD Calculator', icon: require('./assets/icons/bank.png'), color: '#F44336' },
    { screen: 'EMICalculator', text: 'EMI Calculator', icon: require('./assets/icons/dashboard.png'), color: '#3F51B5' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: button.color }]}
            onPress={() => navigateTo(button.screen)}
          >
            <Image source={button.icon} style={styles.icon} />
            <Text style={styles.buttonText}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: 340, // Ensures that three buttons fit in one row within the parent container width
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%', // Width set to 30% for each button to fit three in a row
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default App;
