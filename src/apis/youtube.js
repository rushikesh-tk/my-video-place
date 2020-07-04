import axios from 'axios';

const KEY = 'AIzaSyDeC6RLTYs5IWlrn5Elzvrc362utmkTDEY';

export default axios.create({
	baseURL : "https://www.googleapis.com/youtube/v3",
	params : {
		part : "snippet",
		maxResults : 10,
		key : KEY
	}
});
