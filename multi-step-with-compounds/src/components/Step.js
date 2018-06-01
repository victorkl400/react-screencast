import React, { PureComponent } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class Step extends PureComponent {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        {this.props.children({
          onChangeValue: this.props.onChangeValue,
          values: this.props.values,
        })}
        <View style={styles.buttonWrapper}>
          <Button
            title="Prev"
            disabled={this.props.currentIndex === 0}
            onPress={this.props.prevStep}
          />
          <Button
            title="Next"
            disabled={this.props.isLast}
            onPress={this.props.nextStep}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Step;
