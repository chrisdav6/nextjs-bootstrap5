import styles from './newsletter.module.scss';

const Newsletter = () => {
  return (
    <section className='bg-primary text-light p-5'>
      <div className='container'>
        <div className='d-md-flex justify-content-between align-items-center'>
          <h3 className='mb-3 mb-md-0'>Signup for our newsletter.</h3>
          <div className={`input-group ${styles.newsInput}`}>
            <input
              className='form-control'
              type='text'
              placeholder='Enter Email'
            />
            <button className='btn btn-dark btn-lg' type='button'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
