import { useQuery } from 'react-query'

import { getPosts } from '../remotes/post'

function Posts() {
  const { data = [] } = useQuery(['@posts'], getPosts)

  // 이벤트 핸들러는 ErrorBoundary의 대상이 아님
  const throwError = () => {
    try {
      throw new Error('에러 발생!')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ul>
      {data.map((post) => (
        <li style={{ cursor: 'pointer' }} key={post.id} onClick={throwError}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default Posts
