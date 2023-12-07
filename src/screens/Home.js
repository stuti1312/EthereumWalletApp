import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import strings from '../constants/strings';
import List from '../res/List';

const Home = ({navigation}) => {
  const userData = {name: 'GK Primary', price: '$0.0056'};

  return (
    <View style={styles.main}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.menuBg}>
          <Image
            source={require('../assets/icons/scan.png')}
            style={styles.miniCoinImg}
            tintColor={colors.peach}
          />
        </View>
        <View style={styles.user}>
          <Image
            source={require('../assets/icons/user.png')}
            style={styles.userImage}
          />
        </View>
        <View style={styles.menuBg}>
          <Image
            source={require('../assets/icons/option.png')}
            style={styles.menu}
            tintColor={colors.peach}
          />
        </View>
      </View>

      {/* user profile */}
      <View style={styles.profile}>
        <View style={styles.userName}>
          <Text style={styles.name}>{userData.name}</Text>
          <Image
            source={require('../assets/icons/arrowDown.png')}
            style={styles.miniCoinImg}
            tintColor={colors.white}
          />
        </View>
        <Text style={styles.price}>{userData.price}</Text>
      </View>

      {/* modules */}
      <View style={styles.modules}>
        <TouchableOpacity
          onPress={() => console.log('add')}
          style={styles.addBtn}>
          <View style={styles.featureBg}>
            <Image
              source={require('../assets/icons/add.png')}
              style={styles.menu}
              tintColor={colors.black}
            />
          </View>
          <Text style={styles.moduleBtn}>{strings.BUY}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('swap')}
          style={styles.addBtn}>
          <View style={styles.featureBg}>
            <Image
              source={require('../assets/icons/swap.png')}
              style={styles.menu}
              tintColor={colors.black}
            />
          </View>
          <Text style={styles.moduleBtn}>{strings.SWAP}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('send')}
          style={styles.addBtn}>
          <View style={styles.featureBg}>
            <Image
              source={require('../assets/icons/send.png')}
              style={styles.menu}
              tintColor={colors.black}
            />
          </View>
          <Text style={styles.moduleBtn}>{strings.SEND}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('copy')}
          style={styles.addBtn}>
          <View style={styles.featureBg}>
            <Image
              source={require('../assets/icons/copy.png')}
              style={styles.menu}
              tintColor={colors.black}
            />
          </View>
          <Text style={styles.moduleBtn}>{strings.COPY}</Text>
        </TouchableOpacity>
      </View>

      {/* token list */}
      <View>
        <List />
      </View>

      {/* total */}
      <View style={styles.row}>
        <View
          style={[
            styles.tabs,
            {flexDirection: 'row', backgroundColor: 'gray'},
          ]}>
          <Text style={styles.all}>{strings.ALL}</Text>
          <Image
            source={require('../assets/icons/arrowRight.png')}
            style={styles.arrow}
            tintColor={colors.white}
          />
        </View>
        <Text style={styles.coinType}>$4.0012443</Text>
      </View>

      {/* bottom tabs */}
      <View style={styles.bottomTabs}>
        <View style={styles.tabs}>
          <Image
            source={require('../assets/icons/home.png')}
            style={styles.menu}
            tintColor={colors.gray}
          />
        </View>
        <View style={styles.tabs}>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.menu}
            tintColor={colors.gray}
          />
        </View>
        <View style={styles.tabs}>
          <Image
            source={require('../assets/icons/clock.png')}
            style={styles.menu}
            tintColor={colors.gray}
          />
        </View>
        <View style={styles.tabs}>
          <Image
            source={require('../assets/icons/balloon.png')}
            style={styles.menu}
            tintColor={colors.gray}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  menu: {width: 20, height: 20},
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {color: colors.white, marginRight: 5, fontSize: 18},
  userName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.black,
    marginTop: 120,
  },
  user: {
    backgroundColor: colors.peach,
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    top: 5,
  },
  userImage: {width: 30, height: 30, alignSelf: 'center'},
  miniCoinImg: {
    width: 15,
    height: 15,
  },
  modules: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  price: {color: colors.white, fontSize: 30},
  coinType: {color: colors.white},
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
  addBtn: {justifyContent: 'center', alignItems: 'center'},
  moduleBtn: {color: colors.offWhite},
  all: {color: colors.white, marginRight: 5},
  arrow: {width: 15, height: 15},
});
