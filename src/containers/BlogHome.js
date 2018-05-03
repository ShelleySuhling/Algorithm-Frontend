import React, { Component } from 'react';
import { Link } from 'react-router'
import Butter from 'buttercms'
import *  as butterAPI from '../api.js'

import PostPreview from '../components/PostPreview'

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
      console.log(data)
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
                {/* <Link to={`/post/${post.slug}`}>{post.title}</Link> */}
              </div>
            )
          })}

          <br />
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default BlogHome;