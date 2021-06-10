const Showcase = () => {
  return (
    <>
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
              <button
                className='btn btn-primary btn-lg'
                data-bs-toggle='modal'
                data-bs-target='#enroll'
              >
                Start Enrollment
              </button>
            </div>
            <img
              className='d-none d-sm-block img-fluid w-50'
              src='/images/showcase.svg'
              alt='Showcase'
            />
          </div>
        </div>
      </section>

      {/*Modal*/}
      <div
        className='modal fade'
        id='enroll'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Enroll Today!
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <p className='lead'>
                Complete the form and we will get back to you.
              </p>
              <form>
                <div className='mb-2'>
                  <label htmlFor='first-name' className='col-form-label'>
                    First Name
                  </label>
                  <input type='text' className='form-control' id='first-name' />
                </div>
                <div className='mb-2'>
                  <label htmlFor='last-name' className='col-form-label'>
                    Last Name
                  </label>
                  <input type='text' className='form-control' id='last-name' />
                </div>
                <div className='mb-2'>
                  <label htmlFor='email' className='col-form-label'>
                    Email
                  </label>
                  <input type='email' className='form-control' id='email' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='phone' className='col-form-label'>
                    Phone Number
                  </label>
                  <input type='tel' className='form-control' id='phone' />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
