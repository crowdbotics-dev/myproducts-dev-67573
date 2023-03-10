import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
const globalVariable = "I am a global variable (in this screen file).";
const DATA = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'John Doe',
  image: 'https://i.imgur.com/8ZfWgpy.jpg',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}, {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Mary Jane',
  image: 'https://i.imgur.com/BBLwOVm.png',
  message: 'Nam eleifend tellus dapibus, mollis orci, elementum enim.'
}, {
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Sean Paul',
  image: 'https://i.imgur.com/MIapmvB.png',
  message: 'Duis eget augue ornare, dignissim quam, consequat tellus.'
}];

const App = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={({
      item
    }) => <View style={styles.item}>
            <View style={styles.messageContainer}>
              <Text style={styles.title}>User Name</Text>
              <Text style={styles.message}>User Message</Text>
              <Text style={styles.NiwqDqxk}>View More</Text>
            </View>
          </View>} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: 'white',
    borderColor: '#F7F7F7',
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18
  },
  message: {
    color: '#9B9B9B',
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    fontSize: 12
  },
  messageContainer: {
    marginLeft: 10,
    width: '100%'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white'
  },
  NiwqDqxk: {
    padding: 5,
    alignSelf: "end",
    color: "#3333ae"
  }
});
export default App;