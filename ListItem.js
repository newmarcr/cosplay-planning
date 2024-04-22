import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const ListItem = ({ item, deleteCosplayIdea, openEditModal }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => deleteCosplayIdea(item.id)}>
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <Text>{item.series}</Text>
        {/* You can add more details here */}
      </View>
      <Button title="Edit" onPress={() => openEditModal(item)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  item: {
    flex: 1,
  },
});

export default ListItem;
