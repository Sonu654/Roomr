import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, Image, Dimensions, TouchableOpacity } from 'react-native';
import COVER_IMAGE from '../images/cover.png';
let { height, width } = Dimensions.get('window');
import Actions from 'react-native-router-flux';
class Launch extends Component {
    constructor(props) {
        super(props);
        console.log("Launch...!");
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{ Actions.home()}}> 
                    <Image source={COVER_IMAGE} style={styles.imgCover} />
                </TouchableOpacity>
            </View>
        )
    }
}


export default Launch;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        flex: 1,
        backgroundColor: '#FF0000',
    },
    imgCover: {
        width: width,
        height: height
    }
});