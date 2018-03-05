import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
    Button
} from 'react-native';
import HOUSE from '../images/housemates.png';
import USER_IMAGE from '../images/add_new.png';
let { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myActions from '../actions/';
class Main extends Component {
    constructor(props) {
        super(props);
        console.log("Launch...!");
        this.state = {
            loading: true,
            users: [],
            modalVisible: false,
            contact: []
        }
    }

    openModal() {
        this.setState({ modalVisible: true });
    }

    closeModal() {
        this.setState({ modalVisible: false });
    }

    findUser = (userName) => {
        this.props.getUserByName(userName);
        this.openModal();
    }

    componentDidMount() {
        this.props.getUser();
    }

    componentWillReceiveProps = (nextProps) => {
        console.log("current Props :", this.props);
        console.log("Next Props : ", nextProps);
        if (nextProps.users != this.props.users) {
            this.setState(
                this.state.users = nextProps.users
            );
        }
        console.log("New State: ", this.state.users);
        console.log("Next Props : ", nextProps);
        if (nextProps.contact != this.props.contact) {
            this.setState(
                this.state.contact = nextProps.contact,
            );
        }
        console.log("New Contact: ", this.state);
    }
    render() {
        if (this.props.loading == true) {
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
            userList = this.state.users.map((user) => {
                return (

                    <View style={styles.userView} key={user.uname}>
                        <View style={styles.userImageView}>
                            <TouchableOpacity onPress={() => { this.findUser(user.uname) }}>
                                <Image source={{ uri: user.userImg }}
                                    style={styles.userImage} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.userTextView}>
                            <Text style={styles.imageText} onPress={() => { this.findUser(user.uname) }}>
                                {user.name ? user.name : 'Name'}
                            </Text>
                        </View>
                    </View>

                )
            });
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
                                <View style={styles.plusBG}>
                                    <TouchableOpacity onPress={() => { Actions.addUser() }}>
                                        <Text style={styles.plus}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 0.2 }}></View>
                            </View>
                            <View style={styles.userMainContainer}>
                                {userList}
                                <Modal
                                    visible={this.state.modalVisible}
                                    animationType={'slide'}
                                    onRequestClose={() => this.closeModal()}
                                >
                                    <View style={styles.modalContainer}>
                                        <View style={styles.innerContainer}>
                                            <View style={styles.userView}>
                                                <View style={styles.userImageView}>
                                                    <TouchableOpacity>
                                                        <Image source={{ uri: this.props.contact && this.props.contact.userImg?this.props.contact.userImg:'' }}
                                                            style={styles.userImage} />
                                                    </TouchableOpacity>
                                                </View>

                                                <View style={styles.userTextView}>
                                                    <Text style={styles.imageText} >
                                                        {this.props.contact &&this.props.contact.name ? this.props.contact.name : 'Name'}
                                                    </Text>
                                                </View>
                                            </View>
                                            <Button
                                                onPress={() => this.closeModal()}
                                                title="Close modal"
                                            >
                                            </Button>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                            <View style={{ flex: 0.1 }}></View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.myzBottomText}></Text>
                    </View>
                </View>
            )
        }

    }
}

mapStateToProps = (state, props) => {
    if (state.contactReducer.isContactInfo == true) {
        return {
            loading: state.contactReducer.loading,
            contact: state.contactReducer.data,
            users: state.userReducer.data
        }
    } else {
        return {
            users: state.userReducer.data,
            loading: state.userReducer.loading,
        }
    }
}

mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps: dispatch : ', dispatch);
    return bindActionCreators(myActions, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(Main);

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
    plusBG: {
        backgroundColor: '#ECECEC',
        flex: 0.1,
        zIndex: 99,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
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
        flex: 0.2,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    },
    imageText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    },
    plus: {
        color: 'rgb(68, 35, 124)',
        fontSize: 40,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: -10
    },
    modalContainer: {
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    innerContainer: {
        alignItems: 'center',
    },
});