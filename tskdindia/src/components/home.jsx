import React, { Component } from 'react';

import Header from './header';
import AppBody from './appBody'
import Footer from './footer';

export default class Home extends Component{
    render() {
        return (
            <div>
                <Header />
                <AppBody />
                <Footer />
            </div>
            
        );
    }
}