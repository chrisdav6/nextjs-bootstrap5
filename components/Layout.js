import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/bootstrap5.png' />
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'></script>
      </Head>

      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
