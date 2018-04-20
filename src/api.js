import Butter from 'buttercms'

export const API_TOKEN = '64e049f00b21e445fba2904eeb81d72d3623fa6b';

const butter = Butter(API_TOKEN);

export var fetchPost = (slug) => {
    return butter.post.retrieve(slug).then((resp) => {
        return resp.data.data
    });
}

export var fetchAllPosts = (page) => {
    return butter.post.list({page: page, page_size: 10}).then((resp) => {
        return resp.data
      })
}