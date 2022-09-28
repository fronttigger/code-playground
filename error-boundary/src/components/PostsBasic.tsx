import { useEffect, useState } from 'react'

import { getPosts, Post } from '../remotes/post'

function Posts() {
  const [data, setData] = useState<Post[]>([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getPosts()

        setData(response)
      } catch (error) {
        console.log('error!!!', error)
        setIsError(true)
      }
    })()
  }, [])

  if (isError) {
    return <div>에러 발생!</div>
  }

  return (
    <ul>
      {data?.map((post) => (
        <li style={{ cursor: 'pointer' }} key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default Posts
