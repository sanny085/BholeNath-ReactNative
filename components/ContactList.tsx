import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      title: '112 Feet Adiyogi',
      country: 'India',
      src: 'https://static.sadhguru.org/d/46272/1648640980-isha_sadhguru_centers_adiyogi-112-coimbatore_3.jpg',
      blog: 'https://isha.sadhguru.org/us/en/center/consecrated-spaces/112-feet-adiyogi',
    },
    {
      id: 2,
      title: '112 Feet Adiyogi',
      country: 'India',
      src: 'https://static.sadhguru.org/d/46272/1648640980-isha_sadhguru_centers_adiyogi-112-coimbatore_3.jpg',
      blog: 'https://isha.sadhguru.org/us/en/center/consecrated-spaces/112-feet-adiyogi',
    },
    {
      id: 3,
      title: '112 Feet Adiyogi',
      country: 'India',
      src: 'https://static.sadhguru.org/d/46272/1648640980-isha_sadhguru_centers_adiyogi-112-coimbatore_3.jpg',
      blog: 'https://isha.sadhguru.org/us/en/center/consecrated-spaces/112-feet-adiyogi',
    },
    {
      id: 4,
      title: '112 Feet Adiyogi',
      country: 'India',
      src: 'https://static.sadhguru.org/d/46272/1648640980-isha_sadhguru_centers_adiyogi-112-coimbatore_3.jpg',
      blog: 'https://isha.sadhguru.org/us/en/center/consecrated-spaces/112-feet-adiyogi',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({id, title, country, src, blog}) => (
          <View style={styles.userCard} key={id}>
            <Image source={{uri: src}} style={styles.userImage} />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.country}>{country}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginVertical: 3,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 6,
    alignItems: 'center',
    backgroundColor: '#E07C24',
    padding: 8,
    borderRadius: 6,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },

  title: {
    fontSize: 16,
    color: '#242B2E',
    fontWeight: '600',
  },
  country: {
    fontSize: 12,
    color: '#CAD5E2',
  },
});
