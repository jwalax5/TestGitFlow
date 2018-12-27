import React, { Component } from 'react';
//import BackgroundImage from './BackgroundImage';

class Green extends Component {

    constructor() {
        super();
        this.state = {
            result: []
        }
    }

    componentDidMount() {
        var req = {
            method: 'GET',
            headers: {
            //    'Access-Control-Allow-Origin': '*',
            //    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
            }
        };
        console.log('hihimmm');
        var url = process.env.REACT_APP_HELLOWORLD+'test';
        console.log(url);
        fetch(url, req)
            .then(results => {
                return results.json();
            }).then(data => {
                console.log("data", data)
                let result = (<div>
                        <p>{data.id}</p>
                        <p>{data.name}</p>
                    </div>)
                ;
                this.setState({ result: result })
                console.log("state", this.state)
            })
            .catch(
                err => {
                    console.log("hihi", err)
                    this.setState({ result: err.toString() })
                    console.log("state", this.state)
                }
            )
    }


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
                <div>
                    <h1>{this.state.result}</h1>
                </div>
            </div>
        );
    }
}

export default Green;
