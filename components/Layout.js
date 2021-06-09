import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/bootstrap5.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
