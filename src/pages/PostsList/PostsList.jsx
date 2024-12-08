import style from "./PostsList.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import sectionsStyle from "../Sections.module.css"
// import posts from "../../data/posts.js"
import Card from "../../components/Card/Card.jsx"

export const API_BASE_URI = "http://localhost:3000/"

function PostsList() {

    const [posts, setPosts] = useState([])

    const [search, setSearch] = useState("")
    const [filteredPosts, setFilteredPosts] = useState([])

    //FETCH
    function fetchPosts() {
        axios.get(`${API_BASE_URI}posts`)
            .then((res) => {
                setPosts(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    //HANDLERS
    //Search
    function handleSearch(event) {
        const value = event.target.value
        setSearch(value)
        // console.log(value)
    }

    //FILTER
    useEffect(() => {
        setFilteredPosts(posts.filter((post) => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        }))
    }, [posts, search])

    //DELETE
    function deletePost(id) {
        axios.delete(`${API_BASE_URI}posts/${id}`)
            .then((res) => {
                fetchPosts()
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <>
            <main>
                <section className={sectionsStyle.title_section}>
                    <h1>Posts Page</h1>
                </section>
                <section className={sectionsStyle.search_section}>
                    <input type="text" placeholder="Cerca" className={style.search_bar} value={search} onChange={handleSearch} />
                    <button className={style.button}>Cerca</button>
                </section>
                <section className={sectionsStyle.cards_section}>
                    <div className="container">
                        <div className="row">
                            {filteredPosts.map((post) => (
                                <div key={post.id} className="col-4">
                                    <Card item={post} deleteItem={deletePost} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PostsList