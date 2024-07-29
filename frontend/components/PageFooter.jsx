import './PageFooter.css';
import linkedin from '/linkedin.svg';
import facebook from '/facebook.svg';
import twitter from '/x.svg';

const PageFooter = () => {
  return (
    <div className='cont'>
      <h1>Contac us</h1>
      <div className='child-cont'>
        <div className='img-cont'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='images'>
            <img src={linkedin} alt='linkedin icon' />
            <img src={facebook} alt='facebook icon' />
            <img src={twitter} alt='twitter icon' />
          </div>
        </div>
        <div className='term-links'>
          <p>links to terms and plicies</p>
          <p>Privacy policy link</p>
        </div>
        <div className='b-links'>
          <p>Buisness Location</p>
          <p>business email</p>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
