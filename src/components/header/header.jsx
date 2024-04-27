// CustomHeader.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from './styles';

const Header = ({ navigation }) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.div}>
        <View style={styles.burguer}>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
        </View>
      </View>

      <View style={styles.div}>
        <Text style={styles.logo}>My Store </Text>
      </View>

      <View style={styles.div}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <FontAwesomeIcon icon={faHome} style={styles.icon}/>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
