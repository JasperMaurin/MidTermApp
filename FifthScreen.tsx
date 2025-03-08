import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = StackScreenProps<RootStackParamList, 'Fifth'>;

const FifthScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pay Bills</Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="magnify" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search billers"
          placeholderTextColor="#aaa"
        />
      </View>

      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite Billers</Text>
          <View style={styles.billerCard}>
            <Icon name="plus" size={30} color="#aaa" />
            <Text>Add a biller</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.categoryCard}>
              <Icon name="flash" size={30} color="#0099FF" />
              <Text style={styles.categoryText}>Electric Utilities</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Icon name="water" size={30} color="#0099FF" />
              <Text style={styles.categoryText}>Water Utilities</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Icon name="television" size={30} color="#0099FF" />
              <Text style={styles.categoryText}>Cable/Internet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Icon name="cellphone" size={30} color="#0099FF" />
              <Text style={styles.categoryText}>Telecoms</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#0066FF',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',

  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    padding: 50
  },
  searchContainer: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  billerCard: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default FifthScreen;