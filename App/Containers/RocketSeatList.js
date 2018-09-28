import React, { Component } from 'react';
import { View, ScrollView, Text, ListView } from 'react-native';
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

  parseDataSource(data) {
    const rowHasChanged = (r1, r2) => r1 !== r2;

    const ds = new ListView.DataSource({ rowHasChanged });

    return ds.cloneWithRows(data);
  }

  renderItem(rowData) {
    return (
      <View>
        <Text>{rowData.title}</Text>
        <Text style={styles.label}>{rowData.description}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ListView
          dataSource={this.parseDataSource(this.props.docs)}
          renderRow={this.renderItem}
          enableEmptySections
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
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
