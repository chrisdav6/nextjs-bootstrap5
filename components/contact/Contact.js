import { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.mapbox;

const Contact = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false);

  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: 'myMap',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.59, 40.65],
      zoom: 13,
      pitch: 45
    });
  }, []);

  return (
    <section id='contact' className='p-5'>
      <div className='container'>
        <div className='row g-4'>
          <div className='col-md'>
            <h2 className='text-center mb-4'>Contact Info</h2>
            <ul className='list-group list-group-flush lead'>
              <li className='list-group-item'>
                <span className='fw-bold'>Main Location: </span>50 West Merrick
                Road - Freeport, NY
              </li>
              <li className='list-group-item'>
                <span className='fw-bold'>Enrollment Phone: </span>123-456-7891
              </li>
              <li className='list-group-item'>
                <span className='fw-bold'>Student Phone: </span>234-567-8910
              </li>
              <li className='list-group-item'>
                <span className='fw-bold'>Enrollment Email: </span>
                feclasses@mail.com
              </li>
              <li className='list-group-item'>
                <span className='fw-bold'>Student Email: </span>
                festudent@mail.com
              </li>
            </ul>
          </div>
          <div className='col-md'>
            <div
              id='myMap'
              style={{ height: '100%', width: '100%', borderRadius: '10px' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
