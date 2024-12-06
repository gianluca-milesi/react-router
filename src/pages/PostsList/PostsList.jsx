import style from "./PostsList.module.css"
import sectionsStyle from "../Sections.module.css"
import posts from "../../data/posts.js"
import Card from "../../components/Card/Card.jsx"

function PostsList() {
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