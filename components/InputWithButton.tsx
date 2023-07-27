import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { borderRadius, colors, sizes, spacing } from "../utils/style-constants";
import { TextInput } from "react-native";
import { useState } from "react";
import { Text } from "react-native";

interface Props {
  buttonCallback: (inputValue: string) => void;
  buttonText: string;
  placeholder: string;
}

const InputWithButton = ({ buttonCallback, buttonText, placeholder }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={ styles.container }>
      <TextInput 
        placeholder={ placeholder }
        onChangeText={ text => setInputValue(text) }
        value={ inputValue }
        style={ styles.input } />
      <TouchableNativeFeedback
        onPress={ () => buttonCallback(inputValue) }
        background={ TouchableNativeFeedback.Ripple(colors.yellow, false) }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>{ buttonText }</Text>
          </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: spacing.small,
  },
  input: {
    flex: 1,
    fontSize: sizes.fontM,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    borderRadius: borderRadius.small,
  },
  button: {
    backgroundColor: colors.yellowDark,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    justifyContent: 'center',
    borderRadius: borderRadius.small,
  },
  buttonText: {
    fontSize: sizes.fontM,
  }
});

export default InputWithButton;