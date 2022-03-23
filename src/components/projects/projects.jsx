import "./projects.scss"
import btcweb from '../../images/btcweb.PNG';

export default function projects() {
  return (
    <div className="projects" id="projects">
      <div className="info-cont">
        <h1 className="sect-head">Bitcoin Tracker</h1>
        <p className="info-text"> Bitcoin price tracker using coindesk's API to track and chart the price of bitcoin from the last 30 days along with a UI Mockup</p>
        <div id="btn-cnt">
          <a id="button" href="https://itseko.github.io" target="_blank" rel="noreferrer">Visit</a>
        </div>
      </div>
      <div className="image-cont">
        <img src={btcweb} alt="Bitcoin Tracker"></img>
        <img src={btcweb} alt="Bitcoin Tracker"></img>
        <img src={btcweb} alt="Bitcoin Tracker"></img>
        </div>
    </div>
  )
}
