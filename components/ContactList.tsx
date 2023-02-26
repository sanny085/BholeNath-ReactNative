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
      <Text>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({id, title, country, src, blog}) => (
          <View style={styles.userCard} key={id}>
            <Image source={{uri: src}} style={styles.userImage} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.country}>{country}</Text>
            <Text>{title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  userCard: {},
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  title: {},
  country: {},
});
