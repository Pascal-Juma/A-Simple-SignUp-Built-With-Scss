import './Card.css'
import music from '../../assets/muziki.jpg'

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="image-wrapper">
            <img src={music} alt="music image" />
        </div>
        <div className="card-content">
            <p className="card-paragragh">
                Create an account and start enjoying your top music <span className="paragragh-stylings">For free</span>
            </p>
        </div>
      </div>
    </>
  )
}

export default Card
