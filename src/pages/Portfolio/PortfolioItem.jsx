import React from "react"

export default function PortfolioItem(props) {
  function titleToLink(title) {
    title = title.replace(/\s/g, "-").toLowerCase()
    return title
  }

  return (
    <a
      href={`https://osmangund.github.io/${titleToLink(props.title)}/`}
      className="portfolio-link"
      target="_blank"
      rel="noreferrer"
    >
      <div className="card" data-project={titleToLink(props.title)}>
        <div className="card-border" />
        <div className="card-content">
          <div className="card-image-wrapper">{props.icon }</div>
          <div className="title-wrapper">
            <h1 className="title">{props.title}</h1>
          </div>
          <ul className="description">
            {props.listItems.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </a>
  )
}
