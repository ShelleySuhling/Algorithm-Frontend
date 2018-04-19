import React, { Component } from 'react';
import Butter from 'buttercms'
import {Helmet} from "react-helmet"
import {API_TOKEN} from './utils/butter_token.js'

const butter = Butter(API_TOKEN);

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    butter.content.retrieve(['homepage_headline']).then(function(response) {
        console.log(response)
      });

    let slug = this.props.params.slug;

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div>
            <Helmet>
                <title>{post.seo_title}</title>
                <meta name="description" content={post.meta_description} />
                <meta name="og:image" content={post.featured_image} />
            </Helmet>


            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.body}} />
        </div>
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