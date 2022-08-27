
const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";
const API_KEY="b6003d8a";

const youtube = () => {
   
    const fetchMovie = async (Title) => {
        const {data} = await fetch(`${API_URL}movie/${Title}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
                
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            console.log(trailer ? trailer : data.videos.results[0])
        }

        console.log(data)
    }
    
  return (
    fetchMovie()
  )
}

export default youtube