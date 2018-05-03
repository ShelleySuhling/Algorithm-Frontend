import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'


class PostPreview extends Component {

  constructor(props) {
    super(props);
    console.log(props)
  }


  render() {
    var {post} = this.props
    return <MuiThemeProvider>
              <Card>
                <Link className="Card-wrapper" to={`/post/${post.slug}`}>
                  <img className="Card-featured-image" src={post.featured_image}></img>
                  <div className="Card-title">{post.title}</div>
                </Link>
            </Card>
          </MuiThemeProvider>
    }
}

export default PostPreview;