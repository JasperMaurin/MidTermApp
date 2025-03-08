import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Sixth'>;
  route: RouteProp<RootStackParamList, 'Sixth'>;
};

const SixthScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Need extra cash?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Borrow from Fuse */}
        <Text style={styles.sectionTitle}>Borrow from Fuse</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.option}>
            <Icon name="hand-coin-outline" size={36} color="#0066FF" />
            <Text style={styles.optionText}>GLoan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Icon name="calendar-multiple-check" size={36} color="#0066FF" />
            <Text style={styles.optionText}>GGives</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Icon name="cellphone" size={36} color="#0066FF" />
            <Text style={styles.optionText}>Borrow Load</Text>
          </TouchableOpacity>
        </View>

        {/* Borrow from CIMB */}
        <Text style={styles.sectionTitle}>Borrow from CIMB</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.option}>
            <Icon name="credit-card-outline" size={36} color="#0066FF" />
            <Text style={styles.optionText}>GCredit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001F54',
  },
  sectionTitle: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  option: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  optionText: {
    marginTop: 5,
    fontSize: 14,
    color: '#0066FF',
    textAlign: 'center',
  },
});

export default SixthScreen;
