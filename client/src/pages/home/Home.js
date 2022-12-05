import heroimg from '../../assets/image/heroimg.png';
import Footer from '../../components/footer/Footer';
import Post from '../../components/post/Post';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.scss';
const Home = () => {
    return ( 
      <div className="homepage">
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={heroimg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-5">
        <h1 className="display-5 fw-bold lh-1 mb-3">What's your story?</h1>
        <p className="lead">Create a blog now and start writing</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-lg px-4">Start blogging</button>
        </div>
      </div>
    </div>
    <div className="row g-5">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Latest
      </h3>

      <article className="blog-post mb-5 text-center">
        <img className="mb-3" src="https://dspncdn.com/a1/media/originals/c6/82/6b/c6826b08136d0306502ca12b459bd1f7.jpg"/>
        <h2 className="blog-post-title">Title of blog</h2>
        <p className="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut facilisis nulla. 
          Proin egestas enim id accumsan tristique. Vestibulum ut enim eu erat egestas tristique 
          ac sit amet dolor. Cras condimentum rutrum nisi vitae vestibulum. Nulla sit amet tellus.
          In a nisi vulputate, cursus quam et, tincidunt enim.</p>
          <button className="btn btn-sm px-4">Continue reading</button>
      </article>

    </div>
{/*----SIDEBAR----*/}
    <Sidebar/>
  </div>
    <div className="row mb-2">
    <h3 className="pb-4 mb-4 fst-italic border-bottom">
        All Posts
      </h3>
{/*----POSTS----*/}
     <Posts/>
  </div>
  </div>
{/*----FOOTER----*/}
  <Footer/>
  </div>
     );
}
 
export default Home;