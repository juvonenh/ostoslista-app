import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems([...items, { key: item }]);
    setItem("");
  };
  console.log(items);

  const handleClear = () => {
    setItems([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new item..."
        onChangeText={(item) => setItem(item)}
        value={item}
      ></TextInput>
      <View style={styles.buttons}>
        <Button title="ADD" onPress={handleAdd}></Button>
        <Button title="CLEAR" onPress={handleClear}></Button>
      </View>
      <View>
        <Text style={styles.listTitle}>Shopping List</Text>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Text style={styles.listItems}>{item.key}</Text>
          )}
        ></FlatList>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 70,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 150,
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
  buttons: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
  },
  listTitle: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 18,
  },
  listItems: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
  },
});
