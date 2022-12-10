import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../../axios';
import './Write.scss';
const Write = () => {
	const [content, setContent] = useState({
		title: '',
		desc: ''
	})

	const { user } = useSelector(state => state.user);

	const navigate = useNavigate();

	const handleFormSubmit = async (e) => {

		try {
			e.preventDefault();
			let res = await api.post('/blog/post', content, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				}
			});
			setTimeout(() => navigate('/blog/' + res.data.blog._id));
		} catch (e) {
			console.log(e);
		}
	}

	const handleInputChange = (e) => {
		setContent(prev => {
			return { ...prev, [e.target.name]: e.target.value };
		})
	}
	return (
		<div id="writeblog" className="container mt-5 ">
			<div className="row justify-content-center py-4">
				<div className="col-md-10 col-md-offset-2">
					<h1>Create post</h1>
					<form onSubmit={handleFormSubmit} method="POST">

						<div className="form-group">
							<input required value={content.title} onChange={handleInputChange} type="text" className="form-control" name="title" placeholder="Add a Title..." />
						</div>

						<div className="form-group mt-2 ">
							<textarea required value={content.desc} onChange={handleInputChange} rows="10" className="form-control" name="desc" placeholder="Body..." ></textarea>
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