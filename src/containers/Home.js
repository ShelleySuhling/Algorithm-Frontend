import React, { Component } from 'react';

class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    // butterAPI.fetchAllPosts(page).then((data) => {
    //   this.setState({
    //     loaded: true,
    //     resp: data
    //   })
    // })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});
  }

  render() {
    if (this.state.loaded) { 
      return (
        <div>
          {this.state.resp.data.map((post) => {
            return (
              <div> hey
              </div>
            )
          })}

          <br />
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

export default BlogHome;