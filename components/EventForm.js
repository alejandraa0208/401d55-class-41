import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { createCalendarEvent } from '../api/Calendar';
import { scheduleNotification } from '../api/Notifications';

export default function EventForm() {
  const [title, setTitle] = useState('');

  const handleCreateEvent = () => {
    // For demonstration, using fixed dates. You'll replace these with user input.
    const startDate = new Date();
    const endDate = new Date();
    endDate.setHours(startDate.getHours() + 1);

    createCalendarEvent(title, startDate, endDate);
    scheduleNotification(title, startDate);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Event Title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Create Event" onPress={handleCreateEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
});
