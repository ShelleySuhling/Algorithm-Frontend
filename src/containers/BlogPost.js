import React, { Component } from 'react';
import Butter from 'buttercms'
import {Helmet} from "react-helmet"
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import *  as butterAPI from '../api.js'

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let slug = this.props.params.slug;

    butterAPI.fetchPost(slug).then((data) => {
      this.setState({
        loaded: true,
        post: data
      })
    })
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      return (
          <MuiThemeProvider>
              <Helmet>
                <title>{post.seo_title}</title>
                <meta name="description" content={post.meta_description} />
                <meta name="og:image" content={post.featured_image} />
              </Helmet>
              <img className="Post-image" src={post.featured_image}></img>
              <div className="Post-title">{post.title}</div>
              <div className="Post-body" dangerouslySetInnerHTML={{__html: post.body}} />
          </MuiThemeProvider>
        );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default BlogPost;