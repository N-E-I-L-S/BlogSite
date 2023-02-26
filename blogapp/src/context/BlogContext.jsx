import { useContext, createContext, useReducer, useEffect } from "react";
import axios from 'axios';
import reducer from './BlogFunctions'

const BlogContext = createContext();
export function BlogProvider({ children }) {

    const initialstate={
        loading : false,
        blogs: []
    }

    const [state, dispatch] = useReducer(reducer, initialstate)
    const getBlogs = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get("http://localhost:3001/blogs");
            const blogs = await res.data;
            dispatch({ type: "SET_API_DATA", payload: blogs })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }


    useEffect(() => {
        getBlogs()
    }, [])
    return (
        <BlogContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}
function useBlog() {
    return useContext(BlogContext)
}

export default useBlog;
