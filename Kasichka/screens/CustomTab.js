import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class CustomTab extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <OptionButton
            icon="md-compass"
            label="Go to google from CustomTab class!"
            onPress={() => WebBrowser.openBrowserAsync('https://www.google.com')}
            />

            <OptionButton
            icon="md-compass"
            label="Check safari"
            onPress={() => WebBrowser.openBrowserAsync('https://www.instagram.com')}
            />
            
            <OptionButton
            icon="ios-appstore"
            label="Chat box Ios"
            onPress={() => WebBrowser.openBrowserAsync('https://www.zamunda.net')}
            />
        </ScrollView>
        );
    }
}

class OptionButton extends React.Component {
    constructor(props) {
        super(props);
        this.icon = props.icon;
        this.label = props.label;
        this.onPress = props.onPress;
        this.isLastOption = props.isLastOption;
    }

    render() {
        return (
            <RectButton style={[styles.option, this.isLastOption && styles.lastOption]} onPress={this.onPress}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                <Ionicons name={this.icon} size={22} color="rgba(0,0,0,0.35)" />
                </View>
                <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>{this.label}</Text>
                </View>
            </View>
            </RectButton>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fafafa',
},
contentContainer: {
    paddingTop: 15,
},
optionIconContainer: {
    marginRight: 12,
},
option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
},
lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
},
optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
},
});
