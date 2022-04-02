import styles from "../../styles/Home.module.css"
// import { useRouter } from "next/router";
// const PostDetail = () =>{
//     const router = useRouter()
//     const { postid } = router.query
//     return (
//         <>
//         <div>
//             <h1>This post's ID is: {postid}</h1>
//         </div>
//         </>
//     )
// }
// export default PostDetail

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
export async function getStaticPaths() {
  console.log("Getting static paths...")
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  const paths = posts.map((post) => ({
    params: { postid: post.id.toString() },
  }))
  console.log(paths)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log(`inner param number ${params.postid}`)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  )
  const post = await res.json()
  return { props: { post } }
}
