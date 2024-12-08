import style from "./PostsList.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import sectionsStyle from "../Sections.module.css"
// import posts from "../../data/posts.js"
import Card from "../../components/Card/Card.jsx"

export const API_BASE_URI = "http://localhost:3000/"

function PostsList() {

    const [posts, setPosts] = useState([])

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


    return (
        <>
            <main>
                <section className={sectionsStyle.title_section}>
                    <h1>Posts Page</h1>
                </section>
                <section className={sectionsStyle.cards_section}>
                    <div className="container">
                        <div className="row">
                            {posts.map((post) => (
                                <div key={post.id} className="col-4">
                                    <Card item={post} />
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