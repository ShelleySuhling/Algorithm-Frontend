import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Button from '@material-ui/core/Button';
import * as  sortingAlgorithms from '../algorithms/sortingAlgorithms'

var _ = require('lodash')

class AlgDisplay extends Component {

    constructor(props){
        super(props)
        this.state= {
            boxElements:  shuffle([
                {
                  value: 1,
                  color: "red",
                  boxOrder: 1
                },
                {
                  value: 2,
                  color: "orange",
                  boxOrder: 2
                },
                {
                  value: 3,
                  color: "yellow",
                  boxOrder: 3
                },
                {
                  value: 4,
                  color: "green",
                  boxOrder: 4
                },
                {
                  value: 5,
                  color: "blue",
                  boxOrder: 5
                },
                {
                  value: 6,
                  color: "purple",
                  boxOrder: 6
                },
              ]),
            displayFinished: false,
        }
        this.snapshots = []
    }

    componentDidMount(){
        this.restartDisplay()
        this.props.algorithm(this.display, this.state.boxElements.slice(0))
    }
    
    componentWillReceiveProps(newProps) {
        console.log('Algorithm Prop', newProps.algorithm.name)
        if (newProps.algorithm.name !== this.props.algorithm.name) {
            this.restartDisplay()
            this.props.algorithm(this.display, this.state.boxElements.slice(0))
        }
    }

    restartDisplay(){
        console.log('restartDisplay')
        this.setState({
            boxElements: shuffle(this.state.boxElements)
        })
        this.snapshot = []
    }

    display = ( snapshot ) => {
        console.log('display', snapshot)
        this.snapshots.push( snapshot );
    };
     
    renderNextSnapshot = () => {
        console.log('renderNextSnapshot')
        if( this.snapshots.length !== 0) {
            this.setState({ boxElements: this.snapshots.shift() });
        }
    }

    showSteps = () => {
        console.log("showSteps")
        this.renderNextSnapshot()
    }

    startAlgorithm = () => {
        console.log("startAlgorithm")
        this.props.algorithm(this.display, this.state.boxElements.slice(0))
    }

    renderBoxes = () => {
       return ( _.map(this.state.boxElements, (b, i) => {
            return <div className="box" 
                        key={b.value} 
                        style={{backgroundColor: b.color}}>
                            {b.value}
                        </div>
       }))
    }

    render(){        
        return (
            <div>
                <Button variant="contained" size="large" color="primary" onClick={this.showSteps}> Show Steps </Button>
                <div className="Alg-display"> {this.renderBoxes()} </div>
            </div>
        )
    }
}


export default AlgDisplay