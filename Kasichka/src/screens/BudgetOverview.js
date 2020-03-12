import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import BudgetTable from '../components/BudgetTable'
import Counter from '../TestRedux/Counter'

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

              <Counter></Counter>
              <View style={styles.buttonsContainter}>
                <TouchableOpacity style={styles.buttonLeft}>
                  <Ionicons style={styles.buttonIcon} name='ios-add' size={55} color="rgba(0,0,0,0.35)" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRight}>
                  <Ionicons style={styles.buttonIcon} name='ios-remove' size={55} color="rgba(0,0,0,0.35)" iconStyle={styles.text}/>
                </TouchableOpacity>
              </View>
          </View>
        );
    }
}

/*================ Styles =================*/
const buttonBase = {
  width:75,
  height: 75,
  backgroundColor: 'rgb(255,255,255)',
  borderRadius: 200,
  justifyContent: 'center',
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
      backgroundColor: 'rgb(199,233,17)',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonLeft: {
      width:75,
      height: 75,
      borderRadius: 200,
      backgroundColor: 'rgb(255,255,255)',
      justifyContent: 'center',
      left: 80,
    },
    buttonRight: {
      ...buttonBase,
      right: 80,
    },
    buttonIcon: {
      top: 3,
      alignSelf: 'center',
    }
  });