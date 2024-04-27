import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import Header from '../../components/header/header';

const Home = ({ navigation }) => {
  return (  
    <View>
      <Header navigation={navigation} />
      <Text>Home</Text>
      <TouchableOpacity style={{backgroundColor: "#0787ea", width: 100, margin: "auto"}} onPress={() => navigation.navigate("Products")}>
        <Text>See Products</Text>
      </TouchableOpacity>
    </View>
  );
}
 
export default Home;
