// import Link from 'next/link'
// const IndexPost = () =>{
//     const postId = "chao-tam-biet"
//     return (
//         <div>
//             <Link href="basic/about">Back to About</Link><br/>
//             <Link href="/">Home</Link><br/>
//             <Link href={`/post/${postId}`}>Chao tam biet</Link><br/>
//             <Link href={{
//                 pathname: '/post/[id]',
//                 query: {id: "Xin-chao"}
//             }}>Xin chao</Link>
//         </div>
//     )
// }
// export default IndexPost

function IndexPost({posts}) {
    return (
        <>
            <ul>
                {posts?.map(post => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </>
    )
}
export default IndexPost

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const allPosts = await res.json()
    const posts = await allPosts.slice(0, 10)
    return {
        props:{
            posts
        },
    }
}