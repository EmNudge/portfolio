import { useRouter } from 'next/router'
import Header from "../Header/";
import './index.scss';

const Layout = ({ children, title, subtitle }) => { 
  const router = useRouter();
  return (
    <div className="page">
      <Header currentRoute={router.route} />
      <div className="title">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <main>
        { children }
      </main>
    </div>
  )}

export default Layout;