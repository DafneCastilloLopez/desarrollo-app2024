import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

function Categories({navigation}) {
  return (
    <View style={StyleSheet.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (  
        <CategoryItem navigation={navigation} caegory={item}/>
  )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});