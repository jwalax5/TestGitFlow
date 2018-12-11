import React, { Component } from 'react';

class BackgroundImage extends Component {
    componentWillMount() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        this.setState({ x: x, y: y });
    }

    render() {
        const bg = require(`../image/${this.props.imageUrl}`);
     //   const bg = require('../image/1.jpg');

        const sectionStyle = {
            height: "500px",
            width: "100%",
            backgroundImage: "url("+bg+")",
            backgroundSize: "cover",
        };

        return (
            
            <div style={sectionStyle}>
           {/* <img src={require('../image/1.jpg')} alt=''/> */}
                {this.props.imageUrl}
            </div>
        );
    }
}

export default BackgroundImage;
