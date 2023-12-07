import {FlatList, StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const List = () => {

  // JSON data
  const tokenData = [
    {
      title: 'BNB',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 BNB',
      coin: require('../assets/icons/bnb.png'),
      miniCoin: require('../assets/icons/bnb.png'),
      coinbgColor: colors.yellow,
      miniCoinbgColor: colors.yellow,
      coinTintColor: colors.white,
    },
    {
      title: 'Ethereum',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 ETH',
      coin: require('../assets/icons/ethereum.png'),
      miniCoin: require('../assets/icons/bnb.png'),
      coinbgColor: colors.gray,
      miniCoinbgColor: colors.yellow,
      coinTintColor: colors.white,
    },
    {
      title: 'Cardano Token',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 ADA',
      coin: require('../assets/icons/cardano.png'),
      miniCoin: require('../assets/icons/bnb.png'),
      coinbgColor: colors.peach,
      miniCoinbgColor: colors.yellow,
      coinTintColor: colors.white,
    },
    {
      title: 'Frontier Token',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 FRONT',
      coin: require('../assets/icons/frontierToken.png'),
      miniCoin: require('../assets/icons/bnb.png'),
      coinbgColor: colors.brown,
      miniCoinbgColor: colors.yellow,
      coinTintColor: colors.white,
    },
    {
      title: 'Matic',
      amount: '$0.036',
      percentage: '-1.10%',
      type: '0.000162 MATIC',
      coin: require('../assets/icons/maticCoin.png'),
      miniCoin: require('../assets/icons/matic.png'),
      coinbgColor: colors.offWhite,
      miniCoinbgColor: 'purple',
      coinTintColor: colors.blue,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.list}>
        <View style={styles.coinDetail}>
          <View
            style={[styles.miniCoin, {backgroundColor: item.miniCoinbgColor}]}>
            <Image
              source={item.miniCoin}
              style={styles.miniCoinImg}
              tintColor={colors.white}
            />
          </View>
          <View style={[styles.coin, {backgroundColor: item.coinbgColor}]}>
            <Image
              source={item.coin}
              style={styles.coinImg}
              tintColor={item.coinTintColor}
            />
          </View>
          <View style={styles.desc}>
            <Text style={styles.coinType}>{item.title}</Text>
            <Text style={styles.value}>{item.type}</Text>
          </View>
        </View>
        <View style={styles.amount}>
          <Text style={styles.coinType}>{item.amount}</Text>
          <Text style={styles.value}>{item.percentage}</Text>
        </View>
      </View>
    );
  };
  return <FlatList data={tokenData} renderItem={renderItem} />;
};

export default List;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  coinDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  miniCoin: {
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    right: -10,
    bottom: -5,
    zIndex: 10,
  },
  miniCoinImg: {
    width: 15,
    height: 15,
  },
  coin: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinImg: {width: 25, height: 25},
  desc: {marginLeft: 15},
  coinType: {color: colors.white},
  value: {color: colors.gray},  amount: {alignItems: 'flex-end', width: '30%'},

});
