import styles from "../../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import { useEffect, useState } from "react/cjs/react.development"

function PostDetail() {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState()
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const { data, error } = useSWR(id ? url : null, id ? fetcher : null)

  const fetcher = (...args) =>
    fetch(...args).then((res) => {
      res.json()
    })

  if (error)
    return (
      <div className="container">
        <p className={styles.title}>Error fetching data...</p>
      </div>
    )

  if (!data)
    return (
      <div className="container">
        <p className={styles.title}>Loading</p>
      </div>
    )

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

export default PostDetail
