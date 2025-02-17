//Solution
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState([{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}, {"id": 3, "name": "Item 3"}]);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  const handleFilter = () => {
    //Example filter. Note: We are now directly managing the data.
    const newData = data.filter(item => item.id > 1);
    setData(newData);
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <Button title="Filter" onPress={handleFilter} />
    </View>
  );
};

export default MyComponent;