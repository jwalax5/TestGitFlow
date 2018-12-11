import React, { Component } from 'react';

class Blue extends Component {
    render() {
        const bg = require(`../image/2.jpg`);
        //   const bg = require('../image/1.jpg');

        const sectionStyle = {
          //  height: "500px",
            width: "100%",
            backgroundImage: "url(" + bg + ")",
            backgroundSize: "cover",
        };

        const hiddenStyle = {
            visibility: 'hidden'
        };

        return (
            <div className="Blue" style={sectionStyle}>
             <img src={bg} style={hiddenStyle} />
                Blue
            </div>
        );
    }
}

export default Blue;
