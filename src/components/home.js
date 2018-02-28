import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, Image, Dimensions, TouchableOpacity } from 'react-native';
import HOUSE from '../images/housemates.png';
import USER_IMAGE from '../images/user.png';
let { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';


class Main extends Component {
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
                        <Text style={styles.closeBtn} onPress={() => { Actions.launch() }}>X</Text>
                    </View>
                </View>
                <View style={styles.center}>
                    <View style={styles.houseImg}>
                        <Image source={HOUSE} style={styles.imgCover} />
                    </View>
                    <View style={styles.userContainer}>
                        <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flex: 0.7 }}></View>
                            <View style={{
                                backgroundColor: '#ECECEC',
                                flex: 0.1,
                                zIndex: 99,
                                borderBottomLeftRadius: 150,
                                borderBottomRightRadius: 150,
                                borderTopLeftRadius: 150,
                                borderTopRightRadius: 150,
                            }}>
                                <TouchableOpacity onPress={() => { Actions.addUser() }}>
                                    <Text style={styles.plus}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.2 }}></View>
                        </View>
                        <View style={styles.userMainContainer}>
                            <View style={styles.userSubContainer}>
                                <View style={styles.userView}>
                                    <View style={styles.userImageView}>
                                        <Image source={USER_IMAGE} style={styles.userImage} />
                                    </View>
                                    <View style={styles.userTextView}>
                                        <Text style={styles.imageText}>Name</Text>
                                    </View>
                                </View>
                                <View style={styles.userView}>
                                    <View style={styles.userImageView}>
                                        <Image source={USER_IMAGE} style={styles.userImage} />
                                    </View>
                                    <View style={styles.userTextView}>
                                        <Text style={styles.imageText}>Name</Text>
                                    </View>
                                </View>
                                <View style={styles.userView}>
                                    <View style={styles.userImageView}>
                                        <Image source={USER_IMAGE} style={styles.userImage} />
                                    </View>
                                    <View style={styles.userTextView}>
                                        <Text style={styles.imageText}>Name</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={styles.userSubContainer}>
                                <View style={styles.userView}>
                                    <View style={styles.userImageView}>
                                        <Image source={USER_IMAGE} style={styles.userImage} />
                                    </View>
                                    <View style={styles.userTextView}>
                                        <Text style={styles.imageText}>Name</Text>
                                    </View>
                                </View>
                                <View style={styles.userView}>
                                    <View style={styles.userImageView}>
                                        <Image source={USER_IMAGE} style={styles.userImage} />
                                    </View>
                                    <View style={styles.userTextView}>
                                        <Text style={styles.imageText}>Name</Text>
                                    </View>
                                </View>
                                <View style={styles.userView}>
                                    <View style={styles.userImageView}>
                                        <Image source={USER_IMAGE} style={styles.userImage} />
                                    </View>
                                    <View style={styles.userTextView}>
                                        <Text style={styles.imageText}>Name</Text>
                                    </View>
                                </View>

                            </View>

                        </View>
                        <View style={{ flex: 0.1 }}></View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.myzBottomText}></Text>
                </View>

                {/* <TouchableOpacity onPress={()=>{ Actions.main()}}> 
                    <Image source={COVER_IMAGE} style={styles.imgCover} />
                  </TouchableOpacity> */}
            </View>
        )
    }
}


export default Main;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    imgCover: {
        marginTop: 25,
        resizeMode: 'stretch'
    },
    top: {
        flex: 0.1,
        flexDirection: 'row',
        backgroundColor: 'rgb(68, 35, 124)',
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
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'right',
        color: '#fff',
        textAlignVertical: 'center',
        padding: 18,
        fontFamily: 'Verdana'
    },
    myzBottomText: {
        textAlign: 'center',
        color: 'rgba(155,155,155,0.9)',
        fontSize: 16,
        fontFamily: 'Verdana',
        padding: 15
    },
    closeBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 22,
        fontFamily: 'Verdana',
        textAlign: 'center',
    },
    userContainer: {
        flex: 0.7
    },
    userMainContainer: {
        flex: 0.8,
        marginTop: 10
    },
    userSubContainer: {
        flex: 0.5,
        flexDirection: 'row'
    },
    houseImg: {
        flex: 0.3
    },
    userView: {
        flex: 0.33
    },
    userTextView: {
        flex: 0.1
    },
    userImageView: {
        flex: 0.9
    },
    userImage: {
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
        marginLeft: 10,
        marginTop: 20,
    },
    imageText: {
        textAlign: 'center',
        fontSize: 12
    },
    plus: {
        color: 'rgb(68, 35, 124)',
        fontSize: 40,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: -10
    }
});