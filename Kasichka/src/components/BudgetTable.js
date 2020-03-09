import * as React from 'react';
import { View, Text , StyleSheet, SafeAreaView, SectionList } from 'react-native';

import { BudgetTableData } from '../../dummy_data/Overview/BudgetTableData'

class BudgetTableItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
        <View style={styles.item}>
            <Text style={styles.subcategoryName}>{this.props.item.title}</Text>
            <Text style={styles.subcategoryExpense}>{this.props.item.price}</Text>
        </View>
        );
    }
}

export default class BudgetTable extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View {...this.props}>
                <SafeAreaView style={styles.container}>
                    <SectionList
                        sections={BudgetTableData}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <BudgetTableItem item={item} />}
                        renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.headerView}>
                            <Text style={styles.header}>{title}</Text>
                        </View>
                        )}
                    />
                </SafeAreaView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
        marginHorizontal: 8,
      },
      item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(111, 255, 217)',
        padding: 15,
      },
      headerView: {
        backgroundColor: 'rgb(111, 255, 217)',
      },
      header: {
        fontSize: 26,
        padding: 10,
      },
      subcategoryName: {
        fontSize: 18,
      },
      subcategoryExpense: {
        fontSize: 16,
      },
});