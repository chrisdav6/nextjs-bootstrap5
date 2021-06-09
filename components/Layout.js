import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/bootstrap5.png' />
      </Head>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
