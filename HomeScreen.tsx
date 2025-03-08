import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/images/gcash.png')} style={styles.logo} />
        <Text style={styles.headerText}>GCash</Text>
      </View>

      {/* Balance Card */}
      <View style={styles.card}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₱ 12,345.67</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.gridContainer}>
        {actionButtons.map((button, index) => (
         <TouchableOpacity 
         key={index} 
         style={styles.gridButton} 
         onPress={() => navigation.navigate(button.screen as keyof RootStackParamList)}
       >
       
            <Icon name={button.icon} size={28} color="#fff" />
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* QR Scanner Button */}
      <TouchableOpacity style={styles.qrButton} onPress={() => navigation.navigate('QRScanner')}>
        <Icon name="qrcode-scan" size={28} color="#fff" />
        <Text style={styles.qrButtonText}>Scan QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const actionButtons = [
  { label: 'Send', icon: 'send', screen: 'Second' },
  { label: 'Transfer', icon: 'bank-transfer', screen: 'Third' },
  { label: 'Load', icon: 'cellphone', screen: 'Fourth' },
  { label: 'Bills', icon: 'receipt', screen: 'Fifth' },
  { label: 'Borrow', icon: 'cash', screen: 'Sixth' },
  { label: 'GSave', icon: 'piggy-bank-outline', screen: 'Seventh' },
  { label: 'Games', icon: 'controller-classic', screen: 'Eighth' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#0052CC',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#555',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  gridContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridButton: {
    backgroundColor: '#0099FF',
    paddingVertical: 15,
    width: '30%',
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  qrButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#0044AA',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  qrButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logo: {
    width: 40,  
    height: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
  
});

export default HomeScreen;
