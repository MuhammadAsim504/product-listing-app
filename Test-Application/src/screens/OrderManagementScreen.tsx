import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const OrderManagementScreen: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://yourapi.com/orders');
        setOrders(response.data);
      } catch (error) {
        alert('Failed to load orders');
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId: number) => {
    try {
      await axios.delete(`https://yourapi.com/orders/${orderId}`);
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (error) {
      alert('Failed to delete order');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Management</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text>{`Order ID: ${item.id} - Product: ${item.productName}`}</Text>
            <Button title="Delete" onPress={() => handleDeleteOrder(item.id)} />
          </View>
        )}
      />
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
  orderItem: {
    marginBottom: 10,
  },
});

export default OrderManagementScreen;