import {
    Component
} from 'react';

class PostList extends Component {
    render() {
        return (
            <div className="py-4 flex flex-wrap justify-center">
          {
                this.props.posts.map((post) => {
                    return (
                        <div className="md:w-3/12 sm:w-4/12 m-3 bg-white rounded overflow-hidden shadow-lg" key={post.id}>
                        <img className="w-full" src="https://source.unsplash.com/random/200x100?sig=tecnology" />
                        <div className="p-2">
                            <h2 className="font-bold text-xl mb-2">{post.title.substring(0, 20)}...</h2>
                            <p className="text-gray-600">
                            {post.body.substring(0, 120)}...
                        </p>
                        <a href="" className="mt-3 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read more >></a>
                        </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default PostList;