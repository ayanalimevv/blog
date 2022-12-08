import heroimg from '../../assets/image/heroimg.png';
import Posts from '../../components/posts/Posts';
import './Home.scss';
const Home = () => { 
    return ( 
      <div className="homepage mt-5">
  {/* ----HERO SECTION----- */}
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={heroimg} className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-5">
        <h1 className="display-5 fw-bold lh-1 mb-3">What's your story?</h1>
        <p className="lead">Create a blog now and start writing</p>
        <div className="d-grid gap-2 d-lg-flex justify-content-lg-start justify-content-md-center">
          <button type="button" className="btn btn-lg px-4">Start blogging</button>
        </div>
      </div>
    </div>
    <div className="row g-5">
    <div className=" col-md-12 ">
    <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Trending Posts
      </h3>
{/*----POSTS----*/}
     <Posts/>
    </div>

  </div>

  </div>
  </div>
     );
}
 
export default Home;