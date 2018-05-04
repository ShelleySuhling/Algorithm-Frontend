import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from '../history';

class PostPreview extends Component {

  render() {
    var {post} = this.props
    return <MuiThemeProvider>
              <Card>
                <div className="Card-wrapper" onClick={()=> history.push(`/post/${post.slug}`)}>
                  <img className="Card-featured-image" alt="card" src={post.featured_image}></img>
                  <div className="Card-title">{post.title}</div>
                </div>
            </Card>
          </MuiThemeProvider>
    }
}

export default PostPreview;