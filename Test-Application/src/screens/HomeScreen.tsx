import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen: React.FC = ({ navigation }: any) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://yourapi.com/products');
        setProducts(response.data);
      } catch (error) {
        alert('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Button title="Add to Cart" onPress={() => alert('Added to cart')} />
          </View>
        )}
      />
      <Button title="Go to Orders" onPress={() => navigation.navigate('OrderManagement')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  productItem: {
    marginBottom: 10,
  },
});

export default HomeScreen;