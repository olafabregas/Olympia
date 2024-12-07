import React from "react";
import './Footer.css';


function Footer () {

    return(
        <footer className="footers">
            <ul className="list">
                <div className="link">
                    <li>
                    <a href="faq" className ="link">FAQ</a>
                    </li>
                    <li>
                    <a href="policy" className ="link">Privacy Policy</a>
                    </li>               
                    <li>
                    <a href="feedback" className ="link">Send Us Feedback</a>
                    </li>
                    <li className="copy">&copy; {new Date().getFullYear()} Copyright: Olympia.com</li>    

                </div>
                              
            </ul>
        </footer>
    );
}
   
export default Footer;