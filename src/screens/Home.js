import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import strings from '../constants/strings';

const Home = ({navigation}) => {
  const userData = {name: 'GK Primary', price: '$0.0056'};

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
        <View style={{alignItems: 'flex-end', width: '30%'}}>
          <Text style={styles.coinType}>{item.amount}</Text>
          <Text style={styles.value}>{item.percentage}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bgColor,
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <View style={styles.menuBg}>
          <Image
            source={require('../assets/icons/scan.png')}
            style={{width: 15, height: 15}}
            tintColor={colors.peach}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.peach,
            height: 70,
            width: 70,
            borderRadius: 50,
            justifyContent: 'center',
            alignSelf: 'center',
            top: 5,
          }}>
          <Image
            source={require('../assets/icons/user.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
        </View>
        <View style={styles.menuBg}>
          <Image
            source={require('../assets/icons/option.png')}
            style={{width: 20, height: 20}}
            tintColor={colors.peach}
          />
        </View>
      </View>

      {/* user profile */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.white, marginRight: 5, fontSize: 18}}>
            {userData.name}
          </Text>
          <Image
            source={require('../assets/icons/arrowDown.png')}
            style={{width: 15, height: 15}}
            tintColor={colors.white}
          />
        </View>
        <Text style={{color: colors.white, fontSize: 30}}>{userData.price}</Text>
      </View>

      {/* modules */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => console.log('add')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.featureBg}>
            <Image
              source={require('../assets/icons/add.png')}
              style={{width: 20, height: 20}}
              tintColor={colors.black}
            />
          </View>
          <Text style={{color: colors.offWhite}}>{strings.BUY}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('swap')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.featureBg}>
            <Image
              source={require('../assets/icons/swap.png')}
              style={{width: 20, height: 20}}
              tintColor={colors.black}
            />
          </View>
          <Text style={{color: colors.offWhite}}>{strings.SWAP}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('send')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.featureBg}>
            <Image
              source={require('../assets/icons/send.png')}
              style={{width: 20, height: 20}}
              tintColor={colors.black}
            />
          </View>
          <Text style={{color: colors.offWhite}}>{strings.SEND}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('copy')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.featureBg}>
            <Image
              source={require('../assets/icons/copy.png')}
              style={{width: 20, height: 20}}
              tintColor={colors.black}
            />
          </View>
          <Text style={{color: colors.offWhite}}>{strings.COPY}</Text>
        </TouchableOpacity>
      </View>

      {/* token list */}
      <View>
        <FlatList data={tokenData} renderItem={renderItem} />
      </View>

      {/* total */}
      <View style={styles.row}>
        <View
          style={[
            styles.tabs,
            {flexDirection: 'row', backgroundColor: 'gray'},
          ]}>
          <Text style={{color: colors.white, marginRight: 5}}>{strings.ALL}</Text>
          <Image
            source={require('../assets/icons/arrowRight.png')}
            style={{width: 15, height: 15}}
            tintColor={colors.white}
          />
        </View>
        <Text style={{color: colors.white}}>$4.0012443</Text>
      </View>

      {/* bottom tabs */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          backgroundColor: colors.black,
          marginTop: 120,
        }}>
        <View style={styles.tabs}>
          <Image
            source={require('../assets/icons/home.png')}
            style={{width: 20, height: 20}}
            tintColor={colors.gray}
          />
        </View>
        <View style={styles.tabs}>
          <Image
            source={require('../assets/icons/search.png')}
            style={{width: 20, height: 20}}
            tintColor={colors.gray}
          />
        </View>
        <View style={styles.tabs}>
          <Image
            source={require('../assets/icons/clock.png')}
            style={{width: 20, height: 20}}
            tintColor={colors.gray}
          />
        </View>
        <View style={styles.tabs}>
          <Image
            source={require('../assets/icons/balloon.png')}
            style={{width: 20, height: 20}}
            tintColor={colors.gray}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

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
  miniCoinImg: {
    width: 15,
    height: 15,
  },
  desc: {marginLeft: 15},
  coinImg: {width: 25, height: 25},
  coinType: {color: colors.white},
  value: {color: colors.gray},
  menuBg: {
    backgroundColor: colors.brown,
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureBg: {
    backgroundColor: colors.peach,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    backgroundColor: colors.brown,
    height: 30,
    width: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coin: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
});
