import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditItem = ({ item, editCosplayIdea, closeModal }) => {
  const [title, setTitle] = useState(item.title);
  const [series, setSeries] = useState(item.series);

  const handleEditItem = () => {
    if (!title || !series) {
      alert('Please enter both title and series.');
      return;
    }
    const editedItem = {
      ...item,
      title,
      series,
    };
    editCosplayIdea(editedItem);
    closeModal();
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter title"
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Enter series"
        style={styles.input}
        value={series}
        onChangeText={(text) => setSeries(text)}
      />
      {/* Add more input fields for additional details */}
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleEditItem} />
        <Button title="Cancel" onPress={closeModal} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EditItem;
