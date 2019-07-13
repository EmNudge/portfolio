import { useRouter } from 'next/router'
import Header from "../../Header";
import Head from '../../Head'
import './index.scss';

const Layout = ({ title, publishedAt, children }) => { 
  const router = useRouter();
  return (
    <div className="page">
      <Head title={title} />
      <Header currentRoute={router.route} />
      <div className="title">
        <h1>{title}</h1>
      </div>
      <main>
        { children }
      </main>
    </div>
  )}

export default Layout;