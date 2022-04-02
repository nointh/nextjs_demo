import styles from "../../styles/Home.module.css"

export default function PostDetail({ post }) {
  return (
    <div className="container">
      <h1>Post ID: {post.id}</h1>
      <div className={styles.title}>
        <a>{post.title}</a>
      </div>
      <h2></h2>
      <p className={styles.description}>{post.body}</p>
      <h3>Written by: user{post.userId}</h3>
    </div>
  )
}
export async function getServerSideProps(context) {
  console.log("Getting `post " + context.params.id + "` from server...")
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
  const post = await res.json()
  return { props: { post } }
}
