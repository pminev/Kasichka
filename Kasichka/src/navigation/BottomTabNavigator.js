import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames, ScreenTitles } from '../constants/Screens'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import CustomTab from '../screens/CustomTab';
import BudgetOverview from '../screens/BudgetOverview'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = ScreenNames.Overview;

export default class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props)

    this.props = props;

    props.navigation.setOptions({ headerTitle: getHeaderTitle(props.route) });
  }

  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  render() {
    this.props.navigation.setOptions({ headerTitle: getHeaderTitle(this.props.route) });

    return (
      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <BottomTab.Screen
          name={ScreenNames.Overview}
          component={BudgetOverview}
          options={{
            title: ScreenTitles.Overview,
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          }}
        />
        <BottomTab.Screen
          name={ScreenNames.Transactions}
          component={LinksScreen}
          options={{
            title: ScreenTitles.Transactions,
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
          }}
        />
        <BottomTab.Screen
          name={ScreenNames.Settings}
          component={CustomTab}
          options={{
            title: ScreenTitles.Settings,
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" />,
          }}
        />
      </BottomTab.Navigator>
    );
  }  
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case ScreenNames.Overview:
      return ScreenTitles.Overview;
    case ScreenNames.Transactions:
      return ScreenTitles.Transactions;
    case ScreenNames.Settings:
      return ScreenTitles.Settings;
  }
}
