import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, Image, Dimensions, TouchableOpacity,ActivityIndicator} from 'react-native';
import HOME_IMAGE from '../images/home.png';
import SEARCH_IMAGE from '../images/search.png';
let { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { MyActions } from 'react-redux';
import {Connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    ComponentWillReciveProps = () => {
        this.props.getLauncher();
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={styles.ActivityIndicatorContainer}>
                    <ActivityIndicator
                        animating={true}
                        style={{
                            height: 80,
                            marginTop: 400
                        }}
                        size='large'
                        color='rgb(68, 35, 124)'
                    />
                </View>
            )
        } else {

            return (
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.myTitle}>{this.props.title}</Text>
                    </View>
                    <View style={styles.center}>
                        <View style={{ flex: 0.5 }}>
                            <TouchableOpacity onPress={() => { Actions.home() }}>
                                <Image source={HOME_IMAGE} style={styles.imgCover} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.5 }}>
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
}

mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(MyActions,dispatch);
}

mapStateToProps=(state,props)=>{
    return({

    }
}

export default (mapStateToProps,mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
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
    }
});