import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const wishlistData = [
  { id: '1', name: "Women's Long Sleeve Co-ord Set", price: 'LKR 12,500', image: require('../assets/product1.jpg') },
  { id: '2', name: "Women's Long Sleeve Top", price: 'LKR 14,800', image: require('../assets/product2.jpg') },
  { id: '3', name: "Women's Long Shirt Top", price: 'LKR 7,500', image: require('../assets/product3.jpg') },
];

const WishlistScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Ionicons name="close-circle" size={24} color="#888" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlistData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  itemInfo: {
    flex: 1,
    padding: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    padding: 12,
    justifyContent: 'center',
  },
});

export default WishlistScreen;