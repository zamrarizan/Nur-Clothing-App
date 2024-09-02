import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/nur-logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationText}>London</Text>
          <Ionicons name="location-outline" size={16} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="What are you looking for?"
        />
      </View>

      <View style={styles.banner}>
        <Image
          source={require('../assets/banner-image.jpg')}
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerText}>Discover an Exclusive Selection of Luxury Timepieces</Text>
        </View>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Long Tops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Maxi Dresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Abayas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Handpicked Products</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productList}>
        {/* Product items */}
        <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={require('../assets/product1.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Women's Long Sleeve Co-ord Set</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail')}>
          <Image source={require('../assets/product2.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Women's Long Sleeve Top</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginRight: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  banner: {
    position: 'relative',
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
  },
  categoryText: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  productList: {
    paddingLeft: 16,
  },
  productItem: {
    marginRight: 16,
    width: 150,
  },
  productImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
  },
});

export default HomeScreen;
