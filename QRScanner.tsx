import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QRScanner: React.FC = () => {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    (async () => {
      if (!hasPermission) {
        await requestPermission();
      }
    })();
  }, [hasPermission]);

  if (!hasPermission) return <View style={styles.center}><Text>Requesting Camera Permission...</Text></View>;
  if (!device) return <View style={styles.center}><Text>Loading Camera...</Text></View>;

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      
      <View style={styles.overlay}>
        <Text style={styles.header}>QR Reader</Text>
        
        <View style={styles.scannerFrame} />
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="qr-code" size={24} color="#fff" />
            <Text style={styles.buttonText}>Generate QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="upload" size={24} color="#fff" />
            <Text style={styles.buttonText}>Upload QR</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.paymentContainer}>
          <Icon name="credit-card" size={24} color="#000" />
          <Text style={styles.paymentText}>Pay abroad with Alipay</Text>
        </View>
        
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navButton}><Icon name="home" size={24} color="#000" /></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Icon name="mail" size={24} color="#000" /></TouchableOpacity>
          <TouchableOpacity style={styles.navButtonActive}><Icon name="qr-code-scanner" size={24} color="#fff" /></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Icon name="receipt" size={24} color="#000" /></TouchableOpacity>
          <TouchableOpacity style={styles.navButton}><Icon name="person" size={24} color="#000" /></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scannerFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#00f',
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginTop: 5,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  paymentText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  navButton: {
    padding: 10,
  },
  navButtonActive: {
    padding: 10,
    backgroundColor: '#00f',
    borderRadius: 50,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QRScanner;
