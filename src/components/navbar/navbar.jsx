import "./navbar.scss"

export default function navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}
