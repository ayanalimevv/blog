import { Link } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import 'animate.css'
import './Profile.scss'

const Profile = () => {
    return (   
  <div className="profile px-4 py-5">
    <div className="row g-5 mt-4">
      {/*----PROFILE HEADER---- */}
      <section className=" row justify-content-evenly align-items-center">
        <div className="col-lg-3 col-md-4">
          <img className="img-thumbnail" 
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
        </div>
        <div className="col-lg-7 col-md-8 d-flex flex-column">

          {/*-----NAME OF USER----- */}
          <h1 className="text-center">Jamie Adams</h1>

          {/*-----USERNAME----- */}
          <p className="text-muted text-center">@jamieadams92</p>

          {/*-----STATS (likes, followers, posts)----- */}
          <div id="statswrapper" className="d-flex px-5 justify-content-sm-center justify-content-sm-around">
          <div className="articles">
            <span>20 </span><span className="text-muted">Articles</span>
            </div>
            <div className="likes">
            <span>1.9k </span><span className="text-muted">Likes</span>
            </div>
            <div className="followers">
            <span>92 </span><span className="text-muted">Followers</span>
            </div>
          </div>
          <button className="btn mt-3 w-25 mx-auto">Follow</button>
        </div>
      </section>
      {/*----END PROFILE HEADER---- */}

      {/*----SIDEBAR----*/}
      <Sidebar/>

      {/*-----MOST RECENT POST----- */}
      <div className="col-lg-8">
        <h4 className="py-4 mb-4 text-center border-bottom border-top">Latest</h4>

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
        <h4 className="pb-4 mb-4 text-center border-bottom">All Blogs</h4>
        
        {/*---POSTS--- */}
        <Posts/>
      </div>
      
    </div>
  </div>
      );
}
 
export default Profile;