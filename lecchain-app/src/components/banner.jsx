import React, { Component } from 'react'
import Banner from 'react-banner'
import 'react-banner/dist/style.css'


class HomeBanner extends Component{
    render(){
        return (
            <Banner
                title="This is an example banner with CSS" />
        );
    }
}


export default HomeBanner;