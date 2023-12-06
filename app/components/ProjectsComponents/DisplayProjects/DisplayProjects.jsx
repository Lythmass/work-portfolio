'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { projectsData } from 'data';
import { Project } from 'components';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export const DisplayProjects = () => {
  const { systemTheme, theme } = useTheme();
  const swiperRef = useRef(null);
  const displayProjects = projectsData.map((project) => {
    return (
      <SwiperSlide key={project.id}>
        <Project
          title={project.title}
          image={project.image}
          link={project.link}
        />
      </SwiperSlide>
    );
  });
  useEffect(() => {
    if ((theme == 'system' && systemTheme == 'light') || theme == 'light') {
      for (var i = 0; i < swiperRef.current.lastChild.children.length; i++) {
        swiperRef.current.lastChild.children[i].style.backgroundColor =
          '#191919';
      }
    } else {
      for (var i = 0; i < swiperRef.current.lastChild.children.length; i++) {
        swiperRef.current.lastChild.children[i].style.backgroundColor =
          '#EEEEEE';
      }
    }
  }, [theme, systemTheme]);
  return (
    <div className='w-full flex items-center'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        grabCursor
        className='z-[100]'
        ref={swiperRef}
      >
        {displayProjects}
      </Swiper>
    </div>
  );
};

export default DisplayProjects;
