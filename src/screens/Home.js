import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  const userData = {name: 'GK Primary', price: '$0.0056'};
  const tokenData = [
    {
      title: 'BNB',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 BNB',
    },
    {
      title: 'Ethereum',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 ETH',
    },
    {
      title: 'Cardano Token',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 ADA',
    },
    {
      title: 'Frontier Token',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 FRONT',
    },
    {
      title: 'Matic',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 MATIC',
    },
  ];
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
