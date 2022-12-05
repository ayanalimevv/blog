import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faPinterest, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return ( 
        <div className="col-md-4">
      <div className="position-sticky" style={{top: "2rem"}}>
        <div className="p-4 mb-3 rounded">
          <h4 className="text-center fw-bold p-2">About</h4>
          <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
        </div>

        <div className="p-4">
          <h4 className="text-center fw-bold p-2">Categories</h4>
          <ol className="list-unstyled mb-0">
            <li><a href="#">Design</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Medicine</a></li>
          </ol>
        </div> 

        <div className="p-4 mb-3 rounded">
          <h4 className="text-center fw-bold p-2">Social Links</h4>
          <div className="icons d-flex justify-content-evenly">
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