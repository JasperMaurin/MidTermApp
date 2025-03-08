import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GCashSendScreen = () => {
  const navigation = useNavigation(); // ✅ Added navigation hook

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Send</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        {/* Express Send */}
        <TouchableOpacity style={styles.card}>
          <Icon name="paper-plane" size={24} color="#007AFF" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Express Send</Text>
            <Text style={styles.cardSubtitle}>Send GCash quickly</Text>
          </View>
        </TouchableOpacity>

        {/* Loan Offer */}
        <TouchableOpacity style={styles.loanCard}>
          <Text style={styles.loanText}>Abot-kayang cash loan from P1,000-P125,000</Text>
          <Text style={styles.loanLink}>Go to GLoan</Text>
        </TouchableOpacity>

        {/* GCash Padala */}
        <TouchableOpacity style={styles.card}>
          <Icon name="building" size={24} color="#007AFF" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>GCash Padala</Text>
            <Text style={styles.cardSubtitle}>Send cash to anyone in the country</Text>
          </View>
        </TouchableOpacity>

        {/* Generate QR */}
        <TouchableOpacity style={styles.card}>
          <Icon name="qrcode" size={24} color="#007AFF" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Generate QR</Text>
            <Text style={styles.cardSubtitle}>Request easily using your QR code</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    paddingTop: 50,
  },
  backButton: {
    padding: 10, // ✅ Added padding for better touch response
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTextContainer: {
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  loanCard: {
    backgroundColor: '#EAF3FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  loanText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  loanLink: {
    fontSize: 14,
    color: '#0055A4',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default GCashSendScreen;
