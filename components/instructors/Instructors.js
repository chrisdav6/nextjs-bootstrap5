const Instructors = () => {
  return (
    <section id='instructors' className='p-5 bg-primary'>
      <div className='container'>
        <h2 className='text-center text-white'>Our Instructors</h2>
        <p className='lead text-center text-white mb-5'>
          Our instructors all have 5+ years experience working as web developers
          in the industry.
        </p>

        <div className='row g-4'>
          {/*User 1*/}
          <div className='col-md-6 col-lg-3'>
            <div className='card bg-light'>
              <div className='card-body text-center'>
                <img
                  src='https://randomuser.me/api/portraits/men/11.jpg'
                  alt='User 1'
                  className='rounded-circle mb-3'
                />
                <h3 className='card-title mb-3'>John Doe</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat odit autem sequi, cupiditate error neque.
                </p>
                <a href='#'>
                  <i className='bi bi-twitter text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-facebook text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-linkedin text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-instagram text-dark mx-1'></i>
                </a>
              </div>
            </div>
          </div>

          {/*User 2*/}
          <div className='col-md-6 col-lg-3'>
            <div className='card bg-light'>
              <div className='card-body text-center'>
                <img
                  src='https://randomuser.me/api/portraits/women/12.jpg'
                  alt='User 2'
                  className='rounded-circle mb-3'
                />
                <h3 className='card-title mb-3'>Jane Doe</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat odit autem sequi, cupiditate error neque.
                </p>
                <a href='#'>
                  <i className='bi bi-twitter text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-facebook text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-linkedin text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-instagram text-dark mx-1'></i>
                </a>
              </div>
            </div>
          </div>

          {/*User 3*/}
          <div className='col-md-6 col-lg-3'>
            <div className='card bg-light'>
              <div className='card-body text-center'>
                <img
                  src='https://randomuser.me/api/portraits/men/14.jpg'
                  alt='User 3'
                  className='rounded-circle mb-3'
                />
                <h3 className='card-title mb-3'>Jack Doe</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat odit autem sequi, cupiditate error neque.
                </p>
                <a href='#'>
                  <i className='bi bi-twitter text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-facebook text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-linkedin text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-instagram text-dark mx-1'></i>
                </a>
              </div>
            </div>
          </div>

          {/*User 4*/}
          <div className='col-md-6 col-lg-3'>
            <div className='card bg-light'>
              <div className='card-body text-center'>
                <img
                  src='https://randomuser.me/api/portraits/women/15.jpg'
                  alt='User 4'
                  className='rounded-circle mb-3'
                />
                <h3 className='card-title mb-3'>Mary Doe</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat odit autem sequi, cupiditate error neque.
                </p>
                <a href='#'>
                  <i className='bi bi-twitter text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-facebook text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-linkedin text-dark mx-1'></i>
                </a>
                <a href='#'>
                  <i className='bi bi-instagram text-dark mx-1'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
