import React, { Component } from 'react';
//import BackgroundImage from './BackgroundImage';

class Red extends Component {

    render() {

        const bg = require(`../image/1.jpg`);
        //   const bg = require('../image/1.jpg');
    
        const sectionStyle = {
        //    height: "100%",
            width: "100%",
            backgroundImage: "url(" + bg + ")",
            backgroundSize: "cover",
        };

        const hiddenStyle = {
            visibility: 'hidden'
        };

        return (
            <div className="Red" style={sectionStyle}>
             <img src={bg} style={hiddenStyle} />
                Red
            </div>
        );
    }
}

export default Red;
