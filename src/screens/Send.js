import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import strings from '../constants/strings';
import List from '../res/List';

const Send = () => {
  return (
    <View style={styles.main}>
      <View style={styles.top} />
      <Text style={styles.send}>Send</Text>

      {/* header */}
      <View style={styles.header}>
        <View style={styles.direction}>
          <Text style={styles.sendto}>To:</Text>
          <Text style={styles.username}>GK Primary</Text>
        </View>
        <View style={styles.menuBg}>
          <Image
            source={require('../assets/icons/addUser.png')}
            style={styles.menu}
            tintColor={colors.blue}
          />
          <Text style={styles.save}>Save</Text>
        </View>
      </View>

      {/* token list */}
      <View>
        <List />
      </View>

      {/* total */}
      <View style={styles.row}>
        <Text style={styles.all}>{strings.ALL}</Text>
        <Image
          source={require('../assets/icons/arrowRight.png')}
          style={styles.arrow}
          tintColor={colors.white}
        />
      </View>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {width: 20, height: 20, marginRight: 5},
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {color: colors.white, marginRight: 5, fontSize: 18},
  user: {
    backgroundColor: colors.peach,
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    top: 5,
  },
  username: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 15,
  },
  sendto: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 10,
  },
  direction: {flexDirection: 'row'},
  menuBg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 15,
    backgroundColor: colors.gray,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  send: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  all: {color: colors.white, marginRight: 5},
  arrow: {width: 15, height: 15},
  save: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 15,
  },
  top: {
    alignSelf: 'center',
    backgroundColor: colors.gray,
    paddingVertical: 1.5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 1,
  },
});
