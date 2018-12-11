import React, { Component } from 'react';
//import BackgroundImage from './BackgroundImage';

class Green extends Component {
    render() {
        const bg = require(`../image/3.jpg`);

        const sectionStyle = {
         //   height: "500px",
            width: "100%",
            backgroundImage: "url(" + bg + ")",
            backgroundSize: "cover",
        };

        const hiddenStyle = {
            visibility: 'hidden'
        };

        return (
            <div className="Green" style={sectionStyle}>
             <img src={bg} style={hiddenStyle} />
                Green
            </div>
        );
    }
}

export default Green;
