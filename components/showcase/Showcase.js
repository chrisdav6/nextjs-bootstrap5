const Showcase = () => {
  return (
    <section className='bg-dark text-light p-5 pb-lg-0 text-center'>
      <div className='container'>
        <div className='d-sm-flex align-items-sm-center text-sm-start'>
          <div>
            <h1>
              Become A <span className='text-warning'>Web Developer</span>
            </h1>
            <p className='lead my-4'>
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev
              role.
            </p>
            <button className='btn btn-primary btn-lg'>Start Enrollment</button>
          </div>
          <img
            className='d-none d-sm-block img-fluid w-50'
            src='/images/showcase.svg'
            alt='Showcase'
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
