import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
import './Carrousel.css';

export default function Carrousel() {
  return (
        <div clasName="carrousel">
          <InfiniteCarousel
            breakpoints={[
            {
            breakpoint: 500,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            },
            },
            {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={.5}
        sideSize={.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
         >
        <div>
          <img
          alt=''
          src='https://images.metmuseum.org/CRDImages/as/web-large/13751a.jpg'
          />
        </div>
        <div>
        <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
        />
        </div>
        <div>
        <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
        />
        </div>
        <div>
        <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
      <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
        <div>
      <img
        alt=''
        src='https://images.metmuseum.org/CRDImages/ad/web-large/DT5516.jpg'
      />
      </div>
    </InfiniteCarousel>
  </div>
    );
}

