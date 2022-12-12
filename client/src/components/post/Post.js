import './Post.scss'
import { Link } from 'react-router-dom';

const Post = ({ data }) => {
  return (
    <div className="post">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">

          {/*-----POST CATEGORY----- */}
          {data.tags.map((e, i) => {
            return (
              <strong key={i} className="d-inline-block mb-2">
                {e}
              </strong>
            )
          })}


          {/*-----TITLE----- */}
          <h3 className="mb-0">{data.title}</h3>

          {/*-----DATE----- */}
          <div className="mb-1 text-muted">{new Date(data.createdAt).toLocaleDateString()}</div>

          {/*-----PREVIEW TEXT----- */}
          <p className="card-text mb-auto">{data.desc.substr(0, 150)}...</p>
          <Link to={`/blog/${data._id}`} className="btn btn-sm px-4">Continue reading</Link>
        </div>

        {/*-----IMAGE THUMBNAIL----- */}
        <div className="col-auto d-none d-lg-block">
          <img className="bd-placeholder-img" width="200" height="250"
            src='' role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

        </div>
      </div>
    </div>
  );
}

export default Post;