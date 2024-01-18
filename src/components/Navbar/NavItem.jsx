import "./NavItem.css"

export default function NavItem(props) {
  return (
    <a href={props.href} className={`nav__item ${props.extraClass}`}>
      <div>
        <span aria-hidden={props.ariaHidden} />
      </div>
    </a>
  )
}
