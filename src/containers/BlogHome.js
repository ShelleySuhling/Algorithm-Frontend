import React, { Component } from 'react';
import { Link } from 'react-router'
import Butter from 'buttercms'
import *  as butterAPI from '../api.js'


class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let page = this.props.params.page || 1;

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

    let page = nextProps.params.page || 1;

    this.fetchPosts(page)
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;
 
      return (
        <div>
          {this.state.resp.data.map((post) => {
            return (
              <div key={post.slug}>
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </div>
            )
          })}

          <br />

          <div>
            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
          </div>
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