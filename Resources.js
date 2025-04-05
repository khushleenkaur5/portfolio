const resources = [
    {
      title: "MDN Web Docs",
      image: "/icons/mdn.png",
      summary: "Comprehensive documentation for web developers.",
      link: "https://developer.mozilla.org"
    },
    {
      title: "React Docs",
      image: "/icons/react.png",
      summary: "Official documentation for React.js.",
      link: "https://reactjs.org"
    },
  ];
  
  const Resources = () => (
    <section>
      <h2>Resources</h2>
      {resources.map((res, index) => (
        <div key={index}>
          <img src={res.image} alt={res.title} width="40" />
          <h4>{res.title}</h4>
          <p>{res.summary}</p>
          <a href={res.link}>Visit</a>
        </div>
      ))}
    </section>
  );
  
  export default Resources;
  