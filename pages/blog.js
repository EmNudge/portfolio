import Layout from '../components/layouts/Main';
import posts from '../posts/index'
import PostStub from '../components/PostStub'

const Blog = () => (
  <Layout title="Blog">
    {posts.map(post => <PostStub key={post.title} {...post} />)}
  </Layout>
)

export default Blog;