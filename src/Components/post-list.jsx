import { Component} from 'react';

class PostList extends Component {
  render() {
    return (
      <div className="cardContainer">
          {
              this.props.posts.map((post) => {
                return (
                  <div className="card" key={post.id}>
                    <h2 className="titlecard">{post.title}</h2>
                  </div>
                )
              })
          }
        </div>
    )
  }
}

export default PostList;
