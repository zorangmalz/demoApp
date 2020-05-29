import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ChallengeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Challenge</Text>
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

export default ChallengeScreen;