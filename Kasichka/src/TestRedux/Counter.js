import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

import { connect } from 'react-redux';
import { changeCount } from './CounterActions';
import { bindActionCreators } from 'redux';

class Counter extends Component {

  decrementCount() {
    let { count } = this.props.count;
    let actions = this.props.actions;
    count--;
    actions.changeCount(count);
  }

  incrementCount() {
    let a = Object.assign({}, {randomProp : this.props.count});

    let { count } = this.props.count;
    let actions = this.props.actions;
    count++;
    actions.changeCount(count);

  }

  render() {
    const { count } = this.props.count;
    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
    count: state.count,
  });


const ActionCreators = {
    changeCount
};

// We create hand made object where we list all action creators which we have for the current component,
// because Object.assign is not working properly in the global namespace (it works if it is in function)
// const ActionCreatorsWithFunction = Object.assign(
//     {},
//     changeCount,
// );
// console.log(ActionCreatorsWithFunction)
// console.log(ActionCreators)


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)