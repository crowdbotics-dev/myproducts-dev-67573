```
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RecipeAuthorsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recipe Authors</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.author}>
          <Image
            source={{ uri: 'https://dummyimage.com/100x100/000/fff' }}
            style={styles.authorImage}
          />
          <Text style={styles.authorName}>John Doe</Text>
          <Text style={styles.authorBio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, sapien vel bibendum bibendum, elit sapien bibendum
            sapien, vel bibendum sapien sapien vel bibendum bibendum.
          </Text>
        </View>
        <View style={styles.author}>
          <Image
            source={{ uri: 'https://dummyimage.com/100x100/000/fff' }}
            style={styles.authorImage}
          />
          <Text style={styles.authorName}>Jane Doe</Text>
          <Text style={styles.authorBio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, sapien vel bibendum bibendum, elit sapien bibendum
            sapien, vel bibendum sapien sapien vel bibendum bibendum.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  author: {
    marginBottom: 20,
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  authorBio: {
    fontSize: 16,
    color: '#666',
  },
});

export default RecipeAuthorsScreen;
```;
export {};