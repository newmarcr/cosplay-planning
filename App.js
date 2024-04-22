import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Button } from 'react-native';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';

export default function App() {
  const [cosplayIdeas, setCosplayIdeas] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  // Function to add a new cosplay idea
  const addCosplayIdea = (idea) => {
    setCosplayIdeas([...cosplayIdeas, idea]);
  };

  // Function to delete a cosplay idea
  const deleteCosplayIdea = (id) => {
    setCosplayIdeas(cosplayIdeas.filter((item) => item.id !== id));
  };

  // Function to open edit modal
  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsEditModalVisible(true);
  };

  // Function to close edit modal
  const closeEditModal = () => {
    setIsEditModalVisible(false);
    setSelectedItem(null);
  };

  // Function to edit a cosplay idea
  const editCosplayIdea = (editedItem) => {
    setCosplayIdeas(cosplayIdeas.map((item) => (item.id === editedItem.id ? editedItem : item)));
  };

  return (
    <View style={styles.container}>
      <AddItem addCosplayIdea={addCosplayIdea} />
      <FlatList
        data={cosplayIdeas}
        renderItem={({ item }) => (
          <ListItem item={item} deleteCosplayIdea={deleteCosplayIdea} openEditModal={openEditModal} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={isEditModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <EditItem item={selectedItem} editCosplayIdea={editCosplayIdea} closeModal={closeEditModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
