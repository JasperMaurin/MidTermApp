import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SeventhScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>GSave</Text>
        <Icon name="information-outline" size={28} color="#fff" />
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Hub</Text>
        <Text style={styles.tabText}>FAQ</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Featured Promos */}
        <Text style={styles.sectionTitle}>Featured Promos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promoContainer}>
          <View style={styles.promoCard}>
            <Icon name="piggy-bank-outline" size={40} color="#0066FF" />
            <Text style={styles.promoText}>Start Saving!</Text>
          </View>
          <View style={styles.promoCard}>
            <FontAwesome name="line-chart" size={40} color="#FF8C00" />
            <Text style={styles.promoText}>High Returns</Text>
          </View>
          <View style={styles.promoCard}>
            <Icon name="shield-check-outline" size={40} color="#008000" />
            <Text style={styles.promoText}>Secure & Insured</Text>
          </View>
          <View style={styles.promoCard}>
            <Icon name="gift-outline" size={40} color="#FF4500" />
            <Text style={styles.promoText}>Exclusive Rewards</Text>
          </View>
          <View style={styles.promoCard}>
            <FontAwesome name="credit-card-alt" size={40} color="#DA70D6" />
            <Text style={styles.promoText}>No Hidden Fees</Text>
          </View>
          <View style={styles.promoCard}>
            <Icon name="cash-multiple" size={40} color="#DC143C" />
            <Text style={styles.promoText}>Unlimited Withdrawals</Text>
          </View>
          <View style={styles.promoCard}>
            <Icon name="cellphone-link" size={40} color="#4682B4" />
            <Text style={styles.promoText}>24/7 Online Access</Text>
          </View>
          <View style={styles.promoCard}>
            <Icon name="clock-time-three-outline" size={40} color="#A52A2A" />
            <Text style={styles.promoText}>Fast Transactions</Text>
          </View>
          <View style={styles.promoCard}>
            <FontAwesome name="money" size={40} color="#2E8B57" />
            <Text style={styles.promoText}>Higher Interest</Text>
          </View>
        </ScrollView>

        {/* Partner Banks */}
        <Text style={styles.sectionTitle}>Partner Banks</Text>
        <View style={styles.banksGrid}>
          <View style={styles.bankCard}>
            <Icon name="bank" size={50} color="#FF1493" />
            <Text style={styles.bankName}>#UNOready</Text>
            <Text style={styles.bankDesc}>High-rate savings & daily interest!</Text>
          </View>

          <View style={styles.bankCard}>
            <FontAwesome name="credit-card" size={50} color="#FFD700" />
            <Text style={styles.bankName}>EzySave+</Text>
            <Text style={styles.bankDesc}>Free Debit Card!</Text>
          </View>

          <View style={styles.bankCard}>
            <Icon name="cash-multiple" size={50} color="#DC143C" />
            <Text style={styles.bankName}>GSave</Text>
            <Text style={styles.bankDesc}>High interest, no fees!</Text>
          </View>

          <View style={styles.bankCard}>
            <FontAwesome name="money" size={50} color="#008080" />
            <Text style={styles.bankName}>#MySaveUp</Text>
            <Text style={styles.bankDesc}>Easiest way to start saving!</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
    backgroundColor: '#0052CC',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 18,
    color: '#888',
    fontWeight: 'bold',
  },
  activeTab: {
    color: '#0066FF',
    borderBottomWidth: 2,
    borderBottomColor: '#0066FF',
    paddingBottom: 5,
  },
  content: {
    backgroundColor: '#f0f0f0',
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoContainer: {
    flexDirection: 'row',
  },
  promoCard: {
    width: 150,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  promoText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  banksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bankCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  bankName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bankDesc: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
});

export default SeventhScreen;
