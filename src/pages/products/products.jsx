import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import Header from '../../components/header/header';
import styles from './styles';

const Products = ({ navigation }) => {
    const { goBack } = useNavigation();

    return (
        <View>
            <Header navigation={navigation} />
            <View style={styles.container}>
                <Text>Products</Text>
                <TouchableOpacity onPress={() => goBack()}>
                    <Text>Back Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Products;