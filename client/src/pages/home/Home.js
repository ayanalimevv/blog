import heroimg from '../../assets/image/heroimg.png';
import { useSelector } from 'react-redux';

import './Home.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../axios';
import Post from '../../components/post/Post';
const Home = () => {
  let { user } = useSelector(state => state.user);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    try {
      const getBlogs = async () => {
        let res = await api.get('/blog/find/all');
        setBlogs(res.data.blogs);
      }
      getBlogs()
    } catch (err) { console.log(err); }
  }, [])

  return (
    <div className="homepage mt-5">
      {/* ----HERO SECTION----- */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={heroimg} className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-5">
            <h1 className="display-5 fw-bold lh-1 mb-3">What's your story, {user?.username}?</h1>
            <p className="lead">Create a blog now and start writing</p>
            <div className="d-grid gap-2 d-lg-flex justify-content-lg-start justify-content-md-center">
              <Link to='/write' type="button" className="btn btn-lg px-4">Start blogging</Link>
            </div>
          </div>
        </div>
        <div className="row g-5 ">
          <div className=" col-md-10 ">
            <h3 className="pb-4 mb-3 fst-italic border-bottom">
              Trending Posts
            </h3>
          </div>
          <div className="col-md-2 d-flex align-items-center">
            
            {/*-----Filtering----- */}
            <div class=" dropdown ">
              <a class=" dropdown-toggle btn" data-bs-toggle="dropdown" aria-expanded="false" href="#">
              Filter:</a>
              <ul class="dropdown-menu ">
              <li><a class="dropdown-item" href="#">All</a></li>
                <li><a class="dropdown-item" href="#">Trending</a></li>
                <li><a class="dropdown-item" href="#">Most Recent</a></li>
                <li><a class="dropdown-item" href="#">Author</a></li>
                <li><a class="dropdown-item" href="#">Title</a></li>
              </ul>
            </div>
          </div>
            
            {/*----POSTS----*/}
            {
              blogs.map(e => {
                return <Post data={e} />
              })
            }

        </div>

      </div>
    </div>
  );
}

export default Home;



