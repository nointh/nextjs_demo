export default function PostDetail({post}){
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
export async function getServerSideProps(context){
    console.log(context.params.id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()
    return {props: {post}}
}