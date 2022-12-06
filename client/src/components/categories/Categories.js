import './Categories.scss';

const Categories = () => {
    return (  
       
        <div className="p-4">
          <h4 className="text-center fw-bold p-2">Categories</h4>
          <ol id="categorylist" className="list-unstyled mb-0">
            <li><a href="#">Design</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Medicine</a></li>
            <li><a href="#">World</a></li>
            <li><a href="#">Writing</a></li>
            <li><a href="#">Politics</a></li>
            <li><a href="#">Science</a></li>

          </ol>
        </div> 

    
     );
}
 
export default Categories;