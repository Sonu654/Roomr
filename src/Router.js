import React, { Component } from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import Launch from './components/';
import Main from './components/main';
import Home from './components/home';
import User from './components/user';
import UserModal from './components/userModal';

export default class RouterComponent extends Component {

    render() {
        return (
            <Router >
                <Scene key="root" hideNavBar hideTabBar>
                    <Scene key='launch' name='launch' component={Launch} title='Launch' initial />
                    <Stack key="tab_" hideNavBar hideTabBar>
                        <Scene key="main" component={Main} title="Create a Profile" />
                        <Scene key="home" component={Home} title="Create a New Home" />
                        <Scene key="addUser" component={User} title="Add a Person" />
                        <Scene key="userModal" component={UserModal} title="Add User" />
                        
                    </Stack>
                </Scene>
            </Router>
        )
    }
}


// https://github.com/Sonu654/Roomr/invitations