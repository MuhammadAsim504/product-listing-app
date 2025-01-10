import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductCatalogScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Product A', price: 20 },
    { id: 2, name: 'Product B', price: 30 },
    { id: 3, name: 'Product C', price: 40 },
  ]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product Catalog</Text>
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductCatalogScreen;