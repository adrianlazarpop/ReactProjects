import './contact.styles.scss';

const Contact = ({ imgLink , firstName, lastName }) => {
  // const scr = require(imgLink).default;
  console.log(imgLink)
  return (
    <div className="contact">
      <div className='header-user-icon'>
        <img className='user-icon' src={require('../../assets/images/user-icon10.png')}></img>
      </div>
      <div className='name'>
        <p>{firstName} {lastName}</p>
      </div>
    </div>

  )
}

export default Contact;