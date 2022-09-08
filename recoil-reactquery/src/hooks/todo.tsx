import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Todo } from '../model/todo'

import { getTodos, updateDone } from '../remote/todo'

export function useTodos() {
  return useQuery(['@todos'], getTodos, {
    suspense: true,
  })
}

export function useUpdateDone() {
  const queryClient = useQueryClient()

  return useMutation((todo: Todo) => updateDone(todo), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['@todos'])
    },
  })
}
