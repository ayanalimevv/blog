import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faPinterest, faTwitter} from '@fortawesome/free-brands-svg-icons'
import './Sidebar.scss'

const Sidebar = () => {

    return ( 
        <div id="sidebar" className="col-lg-4">
      <div className="position-sticky" style={{top: "2rem"}}>

        {/*-----ABOUT USER----- */}
        <div className="px-4 mb-3 ">
          <h4 className="text-center fw-bold p-2">About</h4>
          <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
        </div>
        
      {/*--issue: SOCIAL LINKS NOT RESPONSIVE ON MOBILE VIEW---- */}
        <div className="p-4 mb-3 rounded">
          <h4 className="text-center fw-bold p-2">Social Links</h4>
          <div id="socials" className=" d-flex justify-content-sm-evenly">
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faFacebook}/> 
          <FontAwesomeIcon icon={faPinterest}/>
          <FontAwesomeIcon icon={faInstagram}/>
          </div>
        </div>

      </div>
    </div>
     );
}
 
export default Sidebar;