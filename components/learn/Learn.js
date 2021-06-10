const Learn = () => {
  return (
    <>
      <section id='learn' class='p-5'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-md'>
              <img
                className='img-fluid'
                src='/images/fundamentals.svg'
                alt='Fundamentals'
              />
            </div>
            <div className='col-md p-5'>
              <h2>Learn The Fundamentals</h2>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                unde maxime commodi inventore ab impedit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, dolores modi possimus, aperiam quae incidunt vel enim
                magnam suscipit neque aliquam dolorum quidem ipsam, quibusdam at
                minima totam sunt culpa?
              </p>
              <a className='btn btn-dark mt-3' href='#'>
                <i className='bi bi-chevron-right'></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class='p-5 bg-dark text-light'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-md p-5'>
              <h2>Learn React</h2>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                unde maxime commodi inventore ab impedit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, dolores modi possimus, aperiam quae incidunt vel enim
                magnam suscipit neque aliquam dolorum quidem ipsam, quibusdam at
                minima totam sunt culpa?
              </p>
              <a className='btn btn-light mt-3' href='#'>
                <i className='bi bi-chevron-right'></i> Read More
              </a>
            </div>
            <div className='col-md'>
              <img className='img-fluid' src='/images/react.svg' alt='React' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn;
