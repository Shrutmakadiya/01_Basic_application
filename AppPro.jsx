import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import LinkCard from './components/LinkCard';
import CartoonList from './components/CartoonLIst';

const AppPro = () => {
  return (
    <View>
        <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <CartoonList />
        <LinkCard />
        </ScrollView>
    </View>
  )
}

export default AppPro;

const styles = StyleSheet.create({});