import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Define navigation prop type
type ThirdScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Third'>;

type Props = {
  navigation: ThirdScreenNavigationProp;
};

const ThirdScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bank Transfer</Text>
      </View>

      {/* Banner */}
      <Image source={{ uri: 'https://via.placeholder.com/350x100' }} style={styles.banner} />

      {/* Title */}
      <Text style={styles.title}>Bank transfer locally and internationally</Text>

      {/* Transfer Options */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="bank" size={40} color="#0066FF" />
          <Text style={styles.optionTitle}>Local</Text>
          <Text style={styles.optionDesc}>Transfer money to a local bank account.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="earth" size={40} color="#0066FF" />
          <Text style={styles.optionTitle}>International</Text>
          <Text style={styles.optionDesc}>Transfer money to international bank accounts and e-wallets.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 50
  },
  banner: {
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  optionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  optionDesc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ThirdScreen;