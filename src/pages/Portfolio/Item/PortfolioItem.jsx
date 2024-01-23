import { InView } from "react-intersection-observer"
import "./PortfolioItem.scss"

export default function PortfolioItem(props) {
  function titleToLink(title) {
    title = title.replace(/\s/g, "-").toLowerCase()
    return title
  }

  return (
    <InView as="div" threshold={0.50}>
      {({ inView, ref, entry }) => (
        <a
          href={`https://osmangund.github.io/${titleToLink(props.title)}/`}
          className="portfolio-item-link"
          target="_blank"
          rel="noreferrer"
        >
          <div
            ref={ref}
            className={`card ${inView ? "show" : ""}`}
            data-project={titleToLink(props.title)}
          >
            <div className="card-border" />
            <div className="card-gradient" />
            <div className="card-letters" />
            <div className="card-content">
              <div className="card-image">
                {props.icon} {props.icon2}
              </div>
              <div className="title-wrapper">
                <h1 className="title">{props.title}</h1>
              </div>
            </div>
          </div>
        </a>
      )}
    </InView>
  )
}
