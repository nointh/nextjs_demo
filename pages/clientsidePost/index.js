import styles from "../../styles/Home.module.css"
import Link from "next/link"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function IndexPost() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  )

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
      <h2 className={styles.title}>
        <a href="#">Posts List: </a>
      </h2>
      <ul>
        {data?.map((post) => (
          <li className={styles.list_item} key={post.id}>
            {/* <Link href={`/clientsidePost/${encodeURIComponent(post.id)}`}>
              <a>{post.title}</a>
            </Link> */}
            <Link href={{ pathname: `/clientsidePost/${post.id}` }}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default IndexPost
