function News({pub, story, link}) {
    return (
        <div className="news-item">
             <a href={link}>
            <h3>{ pub }</h3>
            <p>{ story }</p></a>
        </div>
    )
}

export default News
