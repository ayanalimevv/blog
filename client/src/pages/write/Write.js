import './Write.scss';
const Write = () => {
    return ( 
    <div id="writeblog" className="container mt-5 ">
        <div className="row justify-content-center py-4">
	        <div className="col-md-10 col-md-offset-2">
    		    <h1>Create post</h1>
    		    <form action="" method="POST">

    		    <div className="form-group">
    		        <input type="text" className="form-control" name="title" placeholder="Add a Title..." />
    		    </div>
    		    
    		    <div className="form-group mt-2 ">
    		        <textarea rows="10" className="form-control" name="description" placeholder="Body..." ></textarea>
    		    </div>
                <div className="form-group mt-2 ">
                <label for="img">Upload an image:</label>
    		    <input type="file" className="form-control" name="image" accept="image/*" ></input>
    		    </div>
    		
    		    <div className="form-group mt-2 justify-content-end d-flex">
    		        <button type="submit" className="btn me-2">
    		            Publish
    		        </button>
    		        <button id="discardbtn" className="btn">
    		            Discard
    		        </button>
    		    </div>
    		    
    		</form>
		</div>
		
	</div>
        </div>
     );
}
 
export default Write;