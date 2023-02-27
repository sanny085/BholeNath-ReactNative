import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';

import FlatCards from '../components/FlatCards';
import MainCard from '../components/MainCard';
import Banner from '../components/Banner';
import UpComingEvents from '../components/UpComingEvents';
import ContactList from '../components/ContactList';

const PrivateScreen = () => {
  return (
    <ScrollView>
      <View>
        <FlatCards />
        <MainCard />
        <Banner />
        <ContactList />
        <UpComingEvents />
      </View>
    </ScrollView>
  );
};

export default PrivateScreen;

const styles = StyleSheet.create({});
