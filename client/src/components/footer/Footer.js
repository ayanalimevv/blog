import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { faFacebook, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let location = useLocation();
  return (
    location.pathname != '/' ? (<footer id="footer" className="text-center text-lg-start border-top border-5 mt-5">
      <div className="container p-4 pb-0">
        <section >
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

              {/*-----NAME AND SHORT DESDRIPTION OF WEBSITE----- */}
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Blog Website
              </h6>
              <p>
                Random blog description who we are etc.
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            {/*-----CATEGORIES----- */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Categories</h6>
              <p>
                <Link>World</Link>
              </p>
              <p>
                <Link>Politics</Link>
              </p>
              <p>
                <Link>Design</Link>
              </p>
              <p>
                <Link>Tech</Link>
              </p>
              <p>
                <Link className=" fst-italic">...View All</Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            {/*-----USEFUL LINKS----- */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <Link>Your Account</Link>
              </p>
              <p>
                <Link>Write a Blog</Link>
              </p>
              <p>
                <Link>About Us</Link>
              </p>
              <p>
                <Link>FAQ</Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            {/*-----CONTACT INFO----- */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> Write address here, Dallas</p>
              <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        {/*-----SITE CREDITS----- */}
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2022 Built By:
                <Link to="https://fatimakay.github.io"> Fatima Khan</Link>
              </div>
            </div>

            {/*-----SOCIAL LINKS----- */}
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <Link className=" btn-outline-dark btn-floating m-1">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link className=" btn-outline-dark btn-floating m-1">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link className="btn-outline-dark btn-floating m-1">
                <FontAwesomeIcon icon={faGoogle} />
              </Link>
              <Link className=" btn-outline-dark btn-floating m-1">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>) : <></>
  );
}

export default Footer;