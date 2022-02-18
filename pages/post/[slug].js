import client from "../../client"
const Post = ({post}) => {
  console.log(post)
  
  return (
    <article>
      <h1>{post?.title}</h1>
    </article>
  )
}

export default Post

export async function getStaticPaths() {
    
    const paths = await client.fetch(
      `*[_type == "post" && defined(slug.current)][].slug.current`
    )
  
    return {
      paths: paths.map((slug) => ({params: {slug}})),
      fallback: false,
    }
}
export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const post = await client.fetch(`
      *[_type == "post" && slug.current == $slug][0]
    `, { slug })
    return {
      props: {
        post
      }
    }
  }
  