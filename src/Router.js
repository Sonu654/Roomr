import React, { Component } from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import Launch from './components/index';

export default class RouterComponent extends Component {

    render() {
        return (
            <Router >
                <Stack key="root" hideNavBar hideTabBar>
                    <Scene key='launch' name='launch' component={Launch} title='Launch' />
                    <Scene key="login" component={Launch} title="Login" />
                </Stack>
            </Router>
        )
    }
}
