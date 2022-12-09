import Sidebar from "../sidebar/Sidebar";
import { Link, useLocation } from 'react-router-dom'
import { api } from '../../axios'

import './SinglePost.scss'
import { useEffect, useState } from "react";
const SinglePost = () => {
  const [blog, setBlog] = useState([]);

  const location = useLocation();
  const blogId = location.pathname.split('/')[2];
  useEffect(() => {
    const getBlog = async () => {
      let res = await api.get('/blog/find/' + blogId);
      setBlog(res.data.blog);
    }
    getBlog()
  }, []);
  return (
    <div className="singlepost col-lg-12 px-4 py-5">
      <div className="row g-5 mt-4 justify-content-center">
        <div className="col-md-11">

          <article className="blog-post mb-5 ">
            {/*-----BANNER----- */}
            <img className="mb-3 w-100 img-fluid"
              src="https://dspncdn.com/a1/media/originals/c6/5f/d5/c65fd51537880261e148548479a9c410.jpg" />

            {/*-----TITLE----- */}
            <h2 className=" fw-bold text-center">
              {blog.title}
            </h2>

            {/*-----AUTHOR----- */}
            <p className="mb-0 text-center">Written by: <Link style={{ color: "white" }} to={`/user/${blog.authorId}`}>{blog.author}</Link></p>

            {/*-----DATE----- */}
            <p className="border-bottom text-muted text-center">{blog.createdAt.split('-')[2].substr(0, 2)} / {blog.createdAt.split('-')[1]} / {blog.createdAt.split('-')[0]}</p>

            {/*-----MAIN BODY----- */}
            <div className="content">
              {blog.desc}
            </div>
          </article>
        </div>

      </div>
    </div>
  );
}

export default SinglePost;