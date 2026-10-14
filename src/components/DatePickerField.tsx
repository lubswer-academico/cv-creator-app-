import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerFieldProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
}

export const DatePickerField = ({
  label,
  value,
  onChange,
  placeholder = "Seleccionar fecha",
}: DatePickerFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>


      <TouchableOpacity style={styles.input} onPress={() => setShow(true)}>
        <Text style={value ? styles.textValue : styles.placeholder}>
        {value || placeholder}
        </Text>
        <Text>📅</Text>
      </TouchableOpacity>

   
      {show && (
  <DateTimePicker
    value={new Date()}
    mode="date"
    display="default"
    onValueChange={(_, date) => {
      setShow(false); 
      onChange(date.toLocaleDateString("es-ES")); 
    }}
    onDismiss={() => setShow(false)} 
  />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  textValue: {
    fontSize: 16,
    color: "#333",
  },
  placeholder: {
    fontSize: 16,
    color: "#999",
  },
});
