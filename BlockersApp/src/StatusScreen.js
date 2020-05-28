import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class StatusScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Status</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusScreen;