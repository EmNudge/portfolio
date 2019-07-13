import Layout from '../components/Layout';
import Link from 'next/Link'
import posts from '../posts/index'

const Blog = () => (
    <Layout title="Blog">
        {posts.map(post => (
            <Link href={post.path} key={post.title}>
                <a>
                    <h3>{post.publishedAt}</h3>
                    <h1>{post.title}</h1>
                    <h2>{post.summary}</h2>
                </a>
            </Link>
        ))}
    </Layout>
)

export default Blog;