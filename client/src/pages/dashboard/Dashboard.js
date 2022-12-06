import { Link } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import 'animate.css'
import './Dashboard.scss'

const Dashboard = () => {
    return (   
        <div className="dashboard col-xxl-8 px-4 py-5">
            <div className="row g-5 mt-4">
    <div className="col-lg-8">
      <h3 className="pb-4 mb-4 fw-bold border-bottom">
        My Blogs
      </h3>
      <h4 className="pb-4 mb-4 text-center border-bottom">
        Latest
      </h4>

      <article className="blog-post mb-5 text-center">
        <img className="mb-3 w-100" src="https://dspncdn.com/a1/media/originals/c6/82/6b/c6826b08136d0306502ca12b459bd1f7.jpg"/>
        <h2 className="blog-post-title">Title of blog</h2>
        <p className="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut facilisis nulla. 
          Proin egestas enim id accumsan tristique. Vestibulum ut enim eu erat egestas tristique 
          ac sit amet dolor. Cras condimentum rutrum nisi vitae vestibulum. Nulla sit amet tellus.
          In a nisi vulputate, cursus quam et, tincidunt enim.</p>
          <Link to="/singlepost" className="btn btn-sm px-4">Continue reading</Link>
      </article>
      <h4 className="pb-4 mb-4 text-center border-bottom">
        All Blogs
      </h4>
      <Posts/>

    </div>
{/*----SIDEBAR----*/}
    <Sidebar/>
    
  </div>
        </div>
      );
}
 
export default Dashboard;