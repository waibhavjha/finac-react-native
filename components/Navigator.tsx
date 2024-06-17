// Navigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import App from '../App';
import SIPCalculator from '../components/SIPCalculator';
import SWPCalculator from '../components/SWPCalculator';
import MutualFundsReturnCalculator from '../components/MutualFundsReturnCalculator';
import PPFCalculator from '../components/PPFCalculator';
import CAGRCalculator from '../components/CAGRCalculator';
import HRACalculator from '../components/HRACalculator';
import RetirementCalculator from '../components/RetirementCalculator';
import GSTCalculator from '../components/GSTCalculator';
import CompoundInterestCalculator from '../components/CompoundInterestCalculator';
import FDCalculator from '../components/FDCalculator';
import RDCalculator from '../components/RDCalculator';
import EMICalculator from '../components/EMICalculator';

// Placeholder screens for each calculator
//const SIPCalculator = () => <Text style={{ fontSize: 30 }}>SIP Calculator Screen</Text>;
//const SWPCalculator = () => <Text style={{ fontSize: 30 }}>SWP Calculator Screen</Text>;
//const MutualFundsReturnCalculator = () => <Text style={{ fontSize: 30 }}>Mutual Funds Return Calculator Screen</Text>;
//const PPFCalculator = () => <Text style={{ fontSize: 30 }}>PPF Calculator Screen</Text>;
//const CAGRCalculator = () => <Text style={{ fontSize: 30 }}>CAGR Calculator Screen</Text>;
//const HRACalculator = () => <Text style={{ fontSize: 30 }}>HRA Calculator Screen</Text>;
//const RetirementCalculator = () => <Text style={{ fontSize: 30 }}>Retirement Calculator Screen</Text>;
//const GSTCalculator = () => <Text style={{ fontSize: 30 }}>GST Calculator Screen</Text>;
//const CompoundInterestCalculator = () => <Text style={{ fontSize: 30 }}>Compound Interest Calculator Screen</Text>;
//const FDCalculator = () => <Text style={{ fontSize: 30 }}>FD Calculator Screen</Text>;
//const RdCalculator = () => <Text style={{ fontSize: 30 }}>RD Calculator Screen</Text>;
//const EMICalculator = () => <Text style={{ fontSize: 30 }}>EMI Calculator Screen</Text>;

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Finance">
                <Stack.Screen name="Finance Calculators" component={App} />
                <Stack.Screen name="SIPCalculator" component={SIPCalculator} />
                <Stack.Screen name="SWPCalculator" component={SWPCalculator} />
                <Stack.Screen name="MutualFundsReturnCalculator" component={MutualFundsReturnCalculator} />
                <Stack.Screen name="PPFCalculator" component={PPFCalculator} />
                <Stack.Screen name="CAGRCalculator" component={CAGRCalculator} />
                <Stack.Screen name="HRACalculator" component={HRACalculator} />
                <Stack.Screen name="RetirementCalculator" component={RetirementCalculator} />
                <Stack.Screen name="GSTCalculator" component={GSTCalculator} />
                <Stack.Screen name="CompoundInterestCalculator" component={CompoundInterestCalculator} />
                <Stack.Screen name="FDCalculator" component={FDCalculator} />
                <Stack.Screen name="RDCalculator" component={RDCalculator} />
                <Stack.Screen name="EMICalculator" component={EMICalculator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
