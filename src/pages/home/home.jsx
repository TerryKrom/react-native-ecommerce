import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Header from '../../components/header/header';
import styles from './styles';
import { SafeAreaView, StyleSheet } from 'react-native'
import CarouselCards from '../../components/carouselCards'

const Home = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <View>
        <SafeAreaView>
          <CarouselCards />
        </SafeAreaView>
      </View>
    </View>
  );
}

export default Home;
