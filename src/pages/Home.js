import useFetch from "../useFetch";
import BlogList from "../components/BlogList";
import { url_posts } from "../urls";

const Home = () => {
    const { data: blogs, error, isPending  } = useFetch(url_posts);
    
    return (
    <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{console.log(error)}</div>}
        {blogs  && <BlogList blogs={blogs} />}
    </div>
    )
}

export default Home;