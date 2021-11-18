import React from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';
import {colors} from "../utils/colors"
export const RoundedButton = ({
  style = {},
  textSTyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textSTyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor: '#fff',
      borderWidth: 2,
      justifyContent:"center"
    },
    text: {
      color: '#fff',
      fontSize: size / 3,
    },
  });
