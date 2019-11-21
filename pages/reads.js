import Layout from '../components/layouts/Main';
import reads from '../data/reads/index'
import ReadStub from '../components/ReadStub'

const Reads = () => (
  <Layout title="Recent Reads">
    {reads.map(read => <ReadStub key={read.title} {...read} />)}
  </Layout>
)

export default Reads;