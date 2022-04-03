import styles from "../../styles/Home.module.css"
import Link from "next/link"

function IndexPost({ allPosts }) {
  return (
    <div className="container">
      <h2 className={styles.title}>
        <a href="#">Posts List: </a>
      </h2>
      <ul>
        {allPosts?.map((post) => (
          <li className={styles.list_item} key={post.id}>
            <Link href={`/staticsitePost/${encodeURIComponent(post.id)}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default IndexPost

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const allPosts = await res.json()
  return {
    props: {
      allPosts,
    },
  }
}
