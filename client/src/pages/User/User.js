import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import 'animate.css'
import './User.scss'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import { api } from "../../axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.pathname.split('/')[2];
  useEffect(() => {
    const getUser = async () => {
      let res = await api.get('/user/find/' + userId);
      setUser(res.data.user);
    }
    getUser()
  }, [])

  useEffect(() => {
    const getBlogs = async () => {
      let res = await api.get('/blog/author/' + userId);
      setBlogs(res.data.blog);
      console.log(res.data);
    }
    getBlogs()
  }, [])

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
            <h1 className="text-center">@{user?.username}</h1>

            {/*-----USERNAME----- */}
            <a href={`mailto:${user?.email}`} className="text-muted text-center">{user?.email}</a>

            {/*-----STATS (likes, followers, posts)----- */}
            <div id="statswrapper" className="d-flex px-5 justify-content-sm-center justify-content-sm-around mt-2">
              <div className="articles">
                <span>{blogs?.length} </span><span className="text-muted">Articles</span>
              </div>
              <div className="likes">
                <span>{user?.followers?.length} </span><span className="text-muted">Followers</span>
              </div>
              <div className="followers">
                <span>{user?.followedUsers?.length} </span><span className="text-muted">Followers</span>
              </div>
            </div>
            <button title="Follow" className="btn mt-3 w-25 mx-auto">Follow</button>
          </div>
        </section>
        {/*----END PROFILE HEADER---- */}

        {/*----SIDEBAR----*/}
        <Sidebar />

        {/*-----MOST RECENT POST----- */}
        <div className="col-lg-8">
          <h4 className="pb-4 mb-4 text-center border-bottom">Recents Blogs</h4>

          {/*---POSTS--- */}
          {blogs.slice(0, 4).map(e => <Post key={e._id} data={e} />)}
        </div>

      </div>
    </div>
  );
}

export default Profile;