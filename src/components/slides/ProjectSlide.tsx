import React from 'react'
import { projects } from '../../data';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};




const ProjectSlide = ({deviceType}: any) => {
  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true} 
    infinite={true}
    // autoPlay={deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    {         
      projects.map((c)=> (
        <ProjectSlide item={c} key={c.id}/>
      ))
    }
  </Carousel>
  )
}

export default ProjectSlide
