import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from './App';

// Define navigation prop type
type FourthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Fourth'>;

type Props = {
  navigation: FourthScreenNavigationProp;
};

const FourthScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Mobile Load</Text>
        <TouchableOpacity>
          <Icon name="information-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Country Selection */}
      <View style={styles.section}>
        <Text style={styles.label}>Country</Text>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Philippines</Text>
          <Image source={{ uri: 'https://flagcdn.com/w320/ph.png' }} style={styles.flag} />
        </View>
      </View>

      {/* Select Telco */}
      <View style={styles.section}>
        <Text style={styles.label}>Select Telco</Text>
        <View style={styles.telcoGrid}>
          {telcos.map((telco, index) => (
            <TouchableOpacity key={index} style={styles.telcoButton}>
              <Icon name={telco.icon} size={40} color="#0066FF" />
              <Text style={styles.telcoText}>{telco.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

// Sample Telco Data with Icons
const telcos = [
  { name: 'Globe', icon: 'cellphone-wireless' },
  { name: 'TM', icon: 'signal' },
  { name: 'GOMO', icon: 'sim' },
  { name: 'Smart', icon: 'wifi' },
  { name: 'TNT', icon: 'access-point' }, // Fixed icon name
  { name: 'DITO', icon: 'network-strength-4' },
  { name: 'eSIM', icon: 'chip' },
  { name: 'Roaming', icon: 'earth' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#0066FF',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 50
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dropdown: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  flag: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  telcoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  telcoButton: {
    width: '23%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
    marginBottom: 10,
  },
  telcoText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#0066FF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FourthScreen;
