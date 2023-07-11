import { StyleSheet, Pressable, View, Text } from "react-native";

export default function GoalInput(props) {
  const text = props.text;
  const deleteHandler = props.deleteHandler;
  return (
    <Pressable onPress={deleteHandler.bind(this, props.id)}>
      <View style={styles.goalInput}>
        <Text style={styles.goalItem}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalInput: {
    padding: 5,
    backgroundColor: "blue",

    marginBottom: 2,
    borderRadius: 5,
  },
  goalItem: {
    color: "white",
  },
});
