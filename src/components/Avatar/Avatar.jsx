import "./Avatar.css"

export default function Avatar() {
  return (
    <div id="avatar-wrapper">
      <img
        src="https://i.ibb.co/ZW1p6jv/avatar.jpg"
        id="avatar"
        alt="Personal avatar"
      />
      <div className="eyes eye-1"></div>
      <div className="eyes eye-2"></div>
    </div>
  )
}
