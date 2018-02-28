import React, { Component } from "react";
import { View,TextInput, Text, StyleSheet, Platform, Image, Dimensions, TouchableOpacity } from 'react-native';
import HOME_IMAGE from '../images/home.png';
import SEARCH_IMAGE from '../images/search.png';
let { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
class User extends Component {
    constructor(props) {
        super(props);
        console.log("Launch...!");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                <View style={{ flex: 0.8 }}>
                        <Text style={styles.myTitle}>{this.props.title}</Text>
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <Text style={styles.closeBtn} onPress={() => { Actions.userModal() }}>X</Text>
                    </View>
                </View>
                <View style={styles.center}>
                    <View style={{ flex: 0.1 }}>
                        <TextInput style={styles.inputText} name="email" placeholder="Email" placeholderTextColor="#fff" />
                    </View>
                    <View style={{ flex: 0.4 }}>
                        <TouchableOpacity onPress={() => { Actions.home() }}>
                            <Image source={HOME_IMAGE} style={styles.imgCover} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.1 }}></View>
                    <View style={{ flex: 0.4 }}>
                        <TouchableOpacity>
                            <Image source={SEARCH_IMAGE} style={styles.imgCover} />
                        </TouchableOpacity></View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.myzBottomText}>Skip & Browse</Text>
                </View>

                {/* <TouchableOpacity onPress={()=>{ Actions.main()}}> 
                    <Image source={COVER_IMAGE} style={styles.imgCover} />
                  </TouchableOpacity> */}
            </View>
        )
    }
}


export default User;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    imgCover: {
        marginTop: 25,
        marginLeft: 50
    },
    top: {
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: 'rgb(68, 35, 124)',
    },
    myTitle: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'center',
        padding: 18,
        fontFamily: 'Verdana'
    },
    closeBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 22,
        fontFamily: 'Verdana',
        textAlign: 'center',
    },
    bottom: {
        flex: 0.1,
    },
    center: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    myTitle: {
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'center',
        padding: 15,
        fontFamily: 'Verdana'
    },
    myzBottomText: {
        textAlign: 'center',
        color: 'rgba(155,155,155,0.9)',
        fontSize: 16,
        fontFamily: 'Verdana',
        padding: 15
    },inputText: {
        color: '#fff',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        padding: 10,
        margin: 25
    }
});