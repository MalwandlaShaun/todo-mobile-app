import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./componets/goalInput";
import MobileTextInput from "./componets/TextInput";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalArr, setGoalArr] = useState([]);

  const deleteHandler = (id) => {
    return setGoalArr((currentArr) =>
      currentArr.filter((item) => item.id !== id)
    );
  };

  const inputHandler = (goal) => {
    setGoal(goal);
  };
  const submitGoal = () => {
    setGoalArr((currentGoalArr) => {
      return [...currentGoalArr, { text: goal, id: Math.random().toString() }];
    });
    setGoal("");
  };
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          {
            <MobileTextInput
              functions={{ inputHandler, submitGoal, setGoal, goal }}
            />
          }
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalArr}
            renderItem={({ item }) => {
              return (
                <GoalInput
                  id={item.id}
                  text={item.text}
                  deleteHandler={deleteHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsContainer: {
    flex: 5,
  },
});
