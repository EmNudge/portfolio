import Layout from '../components/layouts/Main';
import posts from '../data/posts'
import PostStub from '../components/PostStub'

const Blog = () => (
  <Layout title="Blog">
    {posts.map(post => <PostStub key={post.title} {...post} />)}
  </Layout>
)

export default Blog;