import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'E-Commerce site Mockups',
      category: 'Website',
      imageUrl: 'https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80'
    },
    {
      title: 'Dashboard UI',
      category: 'Dashboard',
      imageUrl: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Color Theory',
      category: 'Mockups',
      imageUrl: 'https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Responsive Wireframes',
      category: 'App',
      imageUrl: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <section id='projects' className="bg-background">
      <div className="container px-6 py-10 lg:py-20 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">My Recent Projects</h1>
        <p className="mt-4 mb-12 lg:mb-20 text-center text-gray-500 dark:text-gray-300">
        I had the privilege of working with a wide array of clients across various industries.
        <br /> 
        Each project highlights my commitment to excellence, creativity, and innovation.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:mx-[10rem]">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-end overflow-hidden bg-cover rounded-lg h-96 group"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute inset-0 flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 cursor-pointer">
               
                <p className="mt-2 text-lg tracking-wider text-accent text-center">View Project</p>
              </div>
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 group-hover:opacity-0">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{item.title}</h2>
                <p className="mt-2 text-lg tracking-wider text-gray-400 font-semibold uppercase ">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
