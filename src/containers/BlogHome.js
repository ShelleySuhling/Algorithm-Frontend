import React, { Component } from 'react';
import PostPreview from '../components/PostPreview'
import *  as butterAPI from '../api.js'

class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    var page = 1
    butterAPI.fetchAllPosts(page).then((data) => {
      this.setState({
        loaded: true,
        resp: data
      })
    })
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
              <div key={post.slug}>
                <PostPreview post={post}/>
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