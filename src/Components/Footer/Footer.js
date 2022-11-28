import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
        <hr />
              <footer className="  bg-[#0D0D0D] text-white flex justify-center  p-10">
       
        <div className=''>
          <span className="footer-title">Cardekho</span> 
          <ul>
           <li>About us</li>
           <li>Contact us</li>
           <li>allrights@cardekho.com </li>
          </ul>
        </div> 
        <div className='ml-20'>
          <span className="footer-title">Legal</span> 
          <ul>
            <li>Terms and condition</li>
            <li>Terms of use</li>
            <li>Cookie policy</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </footer> 
        </div>
     
    );
};

export default Footer;