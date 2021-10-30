import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class Input extends Component {
    state={text:''}
    render() {
        return (
            <View>
                <TextInput
                 {...this.props}
                 style={styles.input}
                 value={this.state.text}
                 onChangeText={text=>this.setState({text})}
                 ref={this.props.inputRef}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        height:40,
        paddingHorizontal:5,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#F2F2F2',
        color:'#999',
        marginBottom:8,
        fontSize:14,
        fontWeight:'600'

    }
})
