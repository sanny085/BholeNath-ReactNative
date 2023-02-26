import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import FlatCards from './components/FlatCards';
import MainCard from './components/MainCard';
import Banner from './components/Banner';
import UpComingEvents from './components/UpComingEvents';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <MainCard />
        <Banner />
        <ContactList />
        <UpComingEvents />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
