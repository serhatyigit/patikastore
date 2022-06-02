import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import data from './store_data.json';
import StoreCard from './components/StoreCard';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>PATIKASTORE</Text>
        <TextInput style={styles.searchBar} placeholder="Ara..." />
        <FlatList
          horizontal={false}
          numColumns={2}
          data={data}
          renderItem={renderStoreItem}
        />
      </View>
    </SafeAreaView>
  );
};

const renderStoreItem = item => <StoreCard item={item} />;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  searchBar: {
    marginVertical: 10,
    backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
});

export default App;
