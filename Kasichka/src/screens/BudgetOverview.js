import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import BudgetTable from '../components/BudgetTable'

export default class BudgetOverview extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.arrows}>
                <Text style={styles.arrowsText}>
                  Here should be 3D circle diagram and arrows for control of the months
                </Text>
              </View>

              <View>
                <BudgetTable style={styles.budgetTable} />
              </View>

              <View style={styles.buttonsContainter}>
                <Text style={styles.buttonsText}>
                  Buttons for adding expenses and incomes
                </Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(244,255,255)',
    },
    arrows: {
      top: 0,
      backgroundColor: 'rgb(0,255,0)',
      marginBottom: 20,
    },
    arrowsText: {
      backgroundColor: 'rgb(0,0,255)',
      textAlign: 'center',
      color: 'rgba(255,145,1,1)',
      fontSize: 22,
    },
    budgetTable: {
      height: 500,
      backgroundColor: 'rgb(100,233,17)'
    },
    buttonsContainter: {
      marginTop: 50,
      padding: 20,
      backgroundColor: 'rgb(199,233,17)'
    },
    buttonsText: {
      fontSize: 18,
      textAlign: 'center'
    }
  });