import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const games = [
  { name: 'BingoPlus', icon: 'dice-5' },
  { name: 'Table Game', icon: 'chess-knight' },
  { name: 'PlayTime', icon: 'gamepad-variant' },
  { name: 'ArenaPlus', icon: 'trophy' },
  { name: 'Super Ace', icon: 'cards-playing' },
  { name: 'Color Game', icon: 'palette' },
  { name: 'Mega Spin', icon: 'slot-machine' },
  { name: 'Jackpot', icon: 'star' },
  { name: 'Lucky Draw', icon: 'clover' },
  { name: 'Spin & Win', icon: 'sync' },
  { name: 'Roulette', icon: 'circle' },
  { name: 'Blackjack', icon: 'cards' },
  { name: 'Poker', icon: 'cards-heart' },
  { name: 'Racing Bet', icon: 'horse' },
  { name: 'Fantasy League', icon: 'soccer' },
];

const EighthScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Games</Text>
      <ScrollView>
        {games.map((game, index) => (
          <TouchableOpacity key={index} style={styles.gameItem}>
            <Icon name={game.icon} size={30} color="#007bff" style={styles.icon} />
            <Text style={styles.gameText}>{game.name}</Text>
            <View style={styles.newBadge}><Text style={styles.newText}>New</Text></View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  gameText: {
    flex: 1,
    fontSize: 18,
  },
  newBadge: {
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  newText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EighthScreen;
