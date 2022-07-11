import { Component } from "react";
import './App.css';
import PostList from "./Components/post-list"

class App extends  Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      showPosts: false,
      searchInput: ''
    };
  }

  changeName = (e) => {
    this.setState({
      movies: [],
    });
  }

  componentDidMount() {
    fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then((api) => 
    this.setState(() => {
      return {posts: api.posts, showPosts: true};
    })
    );
  }

  searchPosts = (e) => {
    const search = e.target.value.toLowerCase();
    this.setState(() => {
      return {searchInput: search}
    })
  }

  render() {
    let {showPosts, searchInput, posts} = this.state;
    const filterPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchInput);
    });
    let renderPosts = "Loading Posts ...";


    if(showPosts) renderPosts = <PostList posts={filterPosts}/>

    return (
      <div className="App">
        <h1>BLOG POSTS <button onClick={() => {
          this.setState({showPosts: !showPosts})
        }}>SHOW POSTS</button></h1>
          <input
            type="text"
            placeholder="Search Posts"
            onChange={this.searchPosts} />
          
        {renderPosts}
       
      </div>
    );
  }
}

export default App;
