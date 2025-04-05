const projects = [
    {
      title: "React Blog App",
      description: "A full-featured blog with authentication and CRUD features.",
      image: "/images/blog.png",
      link: "https://github.com/khushleen/react-blog",
      tech: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Dog Image Gallery",
      description: "Fetched random dog images using Dog API and displayed them dynamically.",
      image: "/images/dog.png",
      link: "https://github.com/khushleen/dog-api-gallery",
      tech: ["HTML", "CSS", "JavaScript", "API"]
    },
  ];
  
  const Work = () => (
    <section>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} width="300" />
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
          <ul>
            {project.tech.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
  
  export default Work;
  