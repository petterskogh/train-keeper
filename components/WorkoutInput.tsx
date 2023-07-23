import { StatusBar, View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { borderRadius, colors, spacing } from "../utils/style-constants";
import { TextInput } from "react-native";
import { useState } from "react";
import { Text } from "react-native";

const WorkoutInput = () => {
  const [workout, setWorkout] = useState('');

  return (
    <View style={ styles.workoutInputContainer }>
      <TextInput 
        placeholder="Axlar och mage" 
        onChangeText={ text => setWorkout(text) }
        value={ workout }
        style={ styles.workoutInput } />
      <TouchableNativeFeedback
        onPress={ () => console.log('pressed') }
        background={ TouchableNativeFeedback.Ripple(colors.yellow, false) }>
          <View style={ styles.addWorkoutButton }>
            <Text>Add</Text>
          </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  workoutInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    borderRadius: borderRadius.small,
  },
  addWorkoutButton: {
    backgroundColor: colors.yellowDark,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    justifyContent: 'center',
    borderRadius: borderRadius.small,
  },
  workoutInputContainer: {
    flexDirection: 'row',
    columnGap: spacing.small,
  }
});

export default WorkoutInput;