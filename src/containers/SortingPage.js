import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AlgDisplay from '../components/AlgDisplay'
import * as  sortingAlgorithms from '../algorithms/sortingAlgorithms'

class SortingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentAlg: sortingAlgorithms.bubblesortBasic,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});
  }

  componentDidMount() {
      this.setState({loaded: true});
  }

  bubbleSortPress = (data) => {
    this.setState({...this.state,
                    currentAlg: sortingAlgorithms.bubblesortBasic})
  }

  insertionsortPress = (data) => {
    this.setState({...this.state,
      currentAlg: sortingAlgorithms.insertionSort})
  }

  selectionsortPress = (data) => {
    this.setState({...this.state,
      currentAlg: sortingAlgorithms.selectionSort})
  }

  mergeSortPress = (data) => {
    console.log("mergeSortPress")
    this.setState({...this.state,
      currentAlg: sortingAlgorithms.mergeSortTopDown})
  }


  render() {
    if (this.state.loaded) {
      return (
        <div className="Alg-body">
            <div className="Alg-list">
                <Button variant="contained" size="large" color="primary" onClick={this.bubbleSortPress}> Bubble Sort </Button>
                <Button variant="contained" size="large" color="primary" onClick={this.insertionsortPress}> Insertion Sort </Button>
                <Button variant="contained" size="large" color="primary" onClick={this.selectionsortPress}> Selection Sort </Button>
                <Button variant="contained" size="large" color="primary" onClick={this.mergeSortPress}> Merge Sort </Button>
            </div>
            <AlgDisplay algorithm={this.state.currentAlg}/>
        </div>  
      );
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default SortingPage;