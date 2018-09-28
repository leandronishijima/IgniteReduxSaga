import React, { Component } from 'react';
import { ScrollView, Text, ListView, Alert } from 'react-native';
import { connect } from 'react-redux';
import RocketSeatActions from '../Redux/RocketSeatRedux';
import { RocketSeatSelectors } from '../Redux/RocketSeatRedux';

import styles from './Styles/RocketSeatListStyle';

class RocketSeatList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.listProducts();
  }

  renderItem(rowData) {
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.title}</Text>
        <Text style={styles.label}>{rowData.description}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.props.docs}
          renderRow={this.renderItem}
        /> */}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  Alert.alert('mapState', JSON.stringify(state.rocketseat.payload));
  return {
    docs: RocketSeatSelectors.getPayload(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listProducts: () => dispatch(RocketSeatActions.rocketSeatRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RocketSeatList);
