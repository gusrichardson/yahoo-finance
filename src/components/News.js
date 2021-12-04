function News({ pub, story, link }) {
  return (
    <div className="news-item">
      <a href={link}>
        <h4>{pub}</h4>
        <p>{story}</p>
      </a>
    </div>
  );
}

export default News;
