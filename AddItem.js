import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddItem = ({ addCosplayIdea }) => {
  const [title, setTitle] = useState('');
  const [series, setSeries] = useState('');

  const handleAddItem = () => {
    if (!title || !series) {
      alert('Please enter both title and series.');
      return;
    }
    const newItem = {
      id: Math.random().toString(), // Temporary unique id (not ideal for production)
      title,
      series,
      // Add more properties as needed
    };
    addCosplayIdea(newItem);
    setTitle('');
    setSeries('');
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
      <Button title="Add" onPress={handleAddItem} />
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
});

export default AddItem;
