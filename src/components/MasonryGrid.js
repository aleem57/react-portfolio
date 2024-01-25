// MasonryGrid.jsx
import React from 'react';
import Masonry from 'react-masonry-css';

const MasonryGrid = ({ items }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="row project-masonry-active"
      columnClassName="col-lg-4 col-md-6 item"
    >
      {items.map((item, index) => (
        <div key={index} className={`project-item style-two wow fadeInUp delay-0-2s grid-item ${item.category}`}>
         
		  <div className="project-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="project-content">
                            <span className="sub-title">{item.subtitle}</span>
                            <h3><a href={item.url} target="_blank">{item.title}</a></h3>
                        </div>
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
