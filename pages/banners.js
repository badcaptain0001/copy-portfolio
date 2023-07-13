import React from 'react'
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";

function banners() {
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll} />
                <h1 className="tablet:m-10 text-8xl text-bold">Website Banners.</h1>
          <div className="mt-5 laptop:mt-10">
            {data.banners.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
                type="banner"
              />
            ))}
          </div>
    </div>
  )
}

export default banners