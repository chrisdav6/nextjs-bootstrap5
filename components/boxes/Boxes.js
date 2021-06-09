const Boxes = () => {
  return (
    <section className='p-5'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-md'>
            <div className='card bg-dark text-light'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi-laptop mt-0'></i>
                </div>
                <h3 className='card-title mb-3'>Virtual</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, maiores! Quidem accusamus aspernatur repudiandae
                  qui.
                </p>
                <a href='#' className='btn btn-primary'>
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className='col-md'>
            <div className='card bg-secondary text-light'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi-person-square mt-0'></i>
                </div>
                <h3 className='card-title mb-3'>Hybrid</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, maiores! Quidem accusamus aspernatur repudiandae
                  qui.
                </p>
                <a href='#' className='btn btn-dark'>
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className='col-md'>
            <div className='card bg-dark text-light'>
              <div className='card-body text-center'>
                <div className='h1 mb-3'>
                  <i className='bi-people mt-0'></i>
                </div>
                <h3 className='card-title mb-3'>In Person</h3>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, maiores! Quidem accusamus aspernatur repudiandae
                  qui.
                </p>
                <a href='#' className='btn btn-primary'>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
