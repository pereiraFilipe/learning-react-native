import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import colors from '../constants/Colors';

class Loading extends React.Component {

    render(){
        return ( this.props.show
            ?
                <View style={[style.container, !this.props.noBackdrop ? style.backdrop : null ]}>
                    <ActivityIndicator size="large" />
                    { this.props.message ? <Text style={style.text}>{ this.props.message }</Text> : null }
                </View>
            :
                null
        )
    }

}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10
    },
    backdrop: {
        backgroundColor: colors.backdrop,
    }
})

export default Loading;