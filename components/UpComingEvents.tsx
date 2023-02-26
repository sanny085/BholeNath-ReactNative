import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

export default function UpComingEvents() {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      {/* Heading of Posh */}
      <Text style={styles.headingText}>UpComing Events</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Adiyogi Alayam</Text>
        </View>
        <Image
          source={{
            uri: 'https://static.sadhguru.org/d/46272/1648469542-website-thumbnail-centers-adiyogi-alayam-1.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            The Adiyogi Alayam is specially consecrated to allow one to
            experience Hata Yoga and other yogic practices in their full depth
            and dimension. – Sadhguru
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() =>
              openWebsite('https://isha.sadhguru.org/us/en/events/monthly')
            }>
            <Text>Monthly Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() =>
              openWebsite(
                'https://isha.sadhguru.org/us/en/events/special-events',
              )
            }>
            <Text>Special Events</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },

  headerContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
});
