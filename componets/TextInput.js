import { TextInput, StyleSheet, Button } from "react-native";

export default function MobileTextInput({ functions }) {
  const { inputHandler, submitGoal, goal } = functions;
  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={inputHandler}
        value={goal}
      />
      <Button title="Add Goal" onPress={submitGoal} />
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
