import Sidebar from "../sidebar/Sidebar";

import './SinglePost.scss'
const SinglePost = () => {
    return ( 
    <div className="singlepost col-lg-12 px-4 py-5">
      <div className="row g-5 mt-4 justify-content-center">
        <div className="col-md-11">

          <article className="blog-post mb-5 ">
          {/*-----BANNER----- */}
          <img className="mb-3 w-100 img-fluid" 
          src="https://dspncdn.com/a1/media/originals/c6/5f/d5/c65fd51537880261e148548479a9c410.jpg"/>

            {/*-----TITLE----- */}
            <h2 className=" fw-bold text-center">
              Single Post Title
            </h2>
            
            {/*-----AUTHOR----- */}
            <p className="mb-0 text-center">Written by: Joshua</p>

            {/*-----DATE----- */}
            <p className="border-bottom text-muted text-center">November 12, 2022</p>

            {/*-----MAIN BODY----- */}
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit nunc non augue fringilla, vitae aliquam lacus rhoncus. Sed vestibulum metus sapien, nec fermentum est auctor vitae. Aliquam sagittis risus eget velit gravida, a ullamcorper felis viverra. Curabitur hendrerit consectetur metus vel aliquam. Proin molestie iaculis neque ut posuere. Phasellus ornare tortor justo, ut pretium justo aliquet non. Nunc egestas est id ipsum laoreet luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed suscipit justo sit amet tellus gravida, eget dignissim nisi auctor. Phasellus nec sagittis turpis. Vestibulum sed odio lorem.</p>
              <p>Aliquam nec maximus eros, molestie cursus tortor. Donec accumsan purus ac tortor malesuada fringilla. Integer ullamcorper commodo laoreet. Aenean auctor tincidunt mi eget tempus. Phasellus fringilla posuere viverra. Praesent at dolor eget neque dapibus mattis vel ut diam. Etiam vitae porttitor ipsum.</p>
              <p>Proin erat tellus, tincidunt eget velit ut, euismod condimentum eros. Etiam ut libero et eros scelerisque accumsan. Curabitur egestas est ut lorem egestas accumsan. Pellentesque vitae sem tristique, eleifend mi ac, vulputate purus. Aliquam erat volutpat. Maecenas quis mollis lacus, sed malesuada dolor. Donec at tellus sed leo luctus consectetur. In molestie bibendum arcu at tincidunt. Morbi ac gravida lacus, ut tincidunt nisi. Suspendisse potenti. Nulla molestie felis arcu, et porta arcu elementum nec. Pellentesque vitae turpis quis ex hendrerit pellentesque. Etiam pharetra ac risus a volutpat. Nullam vitae rhoncus turpis. Donec efficitur felis urna, eget finibus lacus varius sed.</p>
            </div>
          </article>
        </div>

     </div>
  </div>
     );
}
 
export default SinglePost;