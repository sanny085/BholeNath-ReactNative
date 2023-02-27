import {
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import React from 'react';
const Separator = () => <View style={styles.separator} />;
const StarterScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <View style={styles.fixedHeader}>
        <Text style={styles.headingText}>
          Yog
          <Text style={styles.subHeading}> Jagat </Text>
        </Text>
      </View>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Sadhguru-Jaggi-Vasudev.jpg',
        }}
        style={{height: windowHeight, width: windowWidth}}
      />
      <View style={styles.stickyFooter}>
        <Text style={styles.subtitle}>
          A powerful program for leading a life of fulfillment and joy
        </Text>

        <TouchableOpacity
          style={styles.Button1}
          onPress={() => openWebsite('PrivateScreen')}>
          <Text>Let's Start</Text>
        </TouchableOpacity>
        <Separator />
        <Text>Continue Your Journey</Text>
      </View>
    </View>
  );
};

export default StarterScreen;

const styles = StyleSheet.create({
  fixedHeader: {
    marginBottom: -100,
    marginTop: 20,
    zIndex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
    width: 220,
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#fff',
  },
  subHeading: {
    color: '#E07C24',
    fontWeight: '800',
    fontSize: 30,
  },

  stickyFooter: {
    backgroundColor: 'black',
    height: 180,
    marginBottom: 0,
    marginTop: -120,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 2,
  },
  Button1: {
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#23C4ED',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 8,
  },
});
