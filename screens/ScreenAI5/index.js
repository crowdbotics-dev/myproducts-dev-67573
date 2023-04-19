import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
const groceryData = [{
  id: '1',
  name: 'Apples',
  image: require('../assets/apple.jpg'),
  price: '$2.99'
}, {
  id: '2',
  name: 'Bananas',
  image: require('../assets/banana.jpg'),
  price: '$1.99'
}, {
  id: '3',
  name: 'Carrots',
  image: require('../assets/carrot.jpg'),
  price: '$3.49'
}, {
  id: '4',
  name: 'Lettuce',
  image: require('../assets/lettuce.jpg'),
  price: '$2.99'
}];

const GroceryScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>Grocery Delivery</Text>
      <FlatList data={groceryData} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} contentContainerStyle={styles.listContainer} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  listContainer: {
    paddingBottom: 50
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center'
  }
});
export default GroceryScreen;