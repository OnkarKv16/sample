import React from 'react';

function DairyCorner() {
  return (
    <>
      <div className="container-fluid p-3 my-3" style={{backgroundColor:"antiquewhite"}}>
            <h2 className='text-center'>Best Dairy Products Order Now</h2>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3">
            <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/beauty-WEB.jpg"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px'  }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-07/electronics-WEB.jpg"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px'  }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-07/pharmacy-WEB.jpg"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px'  }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/babycare-WEB.jpg"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px'  }}
              />
            </div>
          </div>

          {/* Add similar code for the other cards */}
        </div>
      </div>

      
    </>
  );
}

export default DairyCorner;
