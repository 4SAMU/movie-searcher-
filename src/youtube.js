
const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";
const API_KEY="b6003d8a";

const youtube = () => {
   
    const fetchMovie = async (imdbID) => {
        const {data} = await fetch(`${API_URL}&s=${imdbID} `,
        {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
                
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            console.log(trailer)
        }

        console.log(data)
    }
    
  return (
    fetchMovie()
  )
}

export default youtube