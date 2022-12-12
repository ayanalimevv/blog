import heroimg from '../../assets/image/heroimg.png';
import { useSelector } from 'react-redux';

import './Searchpage.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../axios';
import Post from '../../components/post/Post';
const SearchPage = () => {
  const location = useLocation();

  let { user } = useSelector(state => state.user);

  const [blogs, setBlogs] = useState([]);
  const term = location.pathname.split('/')[2];

    useEffect(() => {
      try {
        const getBlogs = async () => {
          let res = await api.get('/blog/title/'+term);
          console.log(res.data);
          setBlogs(res.data.blog);
        }
        getBlogs()
      } catch (err) { console.log(err); }
    }, [])

  return (
    <div className="homepage mt-5">
      {/* ----HERO SECTION----- */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row g-5 ">
          <div className="col-md-2 d-flex align-items-center">

            {/*-----Filtering----- */}
            {/* <div class=" dropdown ">
              <a class=" dropdown-toggle btn" data-bs-toggle="dropdown" aria-expanded="false" href="#">
              Filter:</a>
              <ul class="dropdown-menu ">
              <li><a class="dropdown-item" href="#">Subscribed Blogs</a></li>
                <li><a class="dropdown-item" href="#">Trending</a></li>
                <li><a class="dropdown-item" href="#">Most Recent</a></li>
              </ul>
            </div> */}
          </div>

          {/*----POSTS----*/}
          {
            blogs.slice(0, 5).map(e => {
              return <Post key={e._id} data={e} />
            })
          }

        </div>

      </div>
    </div>
  );
}

export default SearchPage;



