import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from './styles';

const Header = () => {
  const { navigate, goBack } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.div}>
          <Pressable style={styles.burguer} onPress={handleMenuOpen}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </Pressable>
        </View>

        <View style={styles.div}>
          <Text style={styles.logo}>My Store</Text>
        </View>

        <View style={styles.div}>
          <Pressable onPress={() => navigate("Home")}>
            <FontAwesomeIcon icon={faHome} style={styles.icon} />
          </Pressable>
        </View>
      </View>
      {isOpen && (
        <View style={styles.menu}>
          <Pressable onPress={() => navigate("Home")} style={styles.link}>
            <Text>Home</Text>
          </Pressable>
          <Pressable onPress={() => navigate("Products")} style={styles.link}>
            <Text>Products</Text>
          </Pressable>
          <Pressable onPress={() => navigate("About")} style={styles.link}>
            <Text>About</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default Header;
