import styles from "../../styles/Home.module.css"
import Link from "next/link"

function IndexPost({ posts }) {
  return (
    <div className="container">
      <h2 className={styles.title}>
        <a href="#">Posts List: </a>
      </h2>
      <ul>
        {posts?.map((post) => (
          <li className={styles.list_item} key={post.id}>
            <Link href={`/serversidePost/${encodeURIComponent(post.id)}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default IndexPost

export async function getServerSideProps() {
  console.log("Getting post list from Server...")
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
