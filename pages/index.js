import Layout from '../components/Layout';
import Showcase from '../components/showcase/Showcase';
import Newsletter from '../components/newsletter/Newsletter';
import Boxes from '../components/boxes/Boxes';
import Learn from '../components/learn/Learn';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <Layout title='Bootstrap 5 Course'>
      <Showcase />
      <Newsletter />
      <Boxes />
      <Learn />
    </Layout>
  );
};

export default Home;
