import { StackNavigator } from 'react-navigation';
import RocketSeatList from '../Containers/RocketSeatList';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    RocketSeatList: { screen: RocketSeatList },
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'RocketSeatList',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
