import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RecipeAuthorScreen = () => {
  return <View style={styles.container}>
      <View style={styles.authorContainer}>
        <Image source={{
        uri: 'https://dummyimage.com/100x100/000/fff'
      }} style={styles.authorImage} />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>John Doe</Text>
          <Text style={styles.authorBio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, sapien vel bibendum bibendum, elit sapien bibendum
            sapien, vel bibendum sapien sapien vel bibendum bibendum.
          </Text>
        </View>
      </View>
      <View style={styles.authorContainer}>
        <Image source={{
        uri: 'https://dummyimage.com/100x100/000/fff'
      }} style={styles.authorImage} />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>Jane Smith</Text>
          <Text style={styles.authorBio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, sapien vel bibendum bibendum, elit sapien bibendum
            sapien, vel bibendum sapien sapien vel bibendum bibendum.
          </Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20
  },
  authorInfo: {
    flex: 1
  },
  authorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  authorBio: {
    fontSize: 16,
    lineHeight: 24
  }
});
export default RecipeAuthorScreen;