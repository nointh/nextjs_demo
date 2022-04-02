import styles from "../../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import { useEffect, useState } from "react/cjs/react.development"

const fetcher = async (url) => {
  const res = await fetch(url)
  if (!res.ok){
    throw Error('not so ok')
  }
  const data = await res.json()
  return data
}
function usePost(id){
  const {data, error} = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher)
  return {
    post: data,
    isLoading: !error && !data,
    isError: error
  }
}
function PostDetail() {
  const router = useRouter()
  // const [post, setPost] = useState()
  const {id} = router.query
  // const {data, error} = useSWR(id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null, id ? fetcher : null)
  const {post, isLoading, isError} = usePost(id)
  if (isError)
    return (
      <div className="container">
        <p className={styles.title}>Error fetching data...</p>
      </div>
    )

  if (isLoading)
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
