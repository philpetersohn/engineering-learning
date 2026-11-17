import { describe, expect, it } from 'vitest'
import { type Task } from './taskUtils'
import { findById } from './findUtils'

interface User {
  id: string
  name: string
}

describe('findById', () => {
  const tasks: Task[] = [
    {
      id: 't1',
      title: 'Create login page',
      projectId: 'p1',
      assigneeId: 'u2',
      status: 'done',
    },
    {
      id: 't2',
      title: 'Build authentication API',
      projectId: 'p1',
      assigneeId: 'u1',
      status: 'in-progress',
    },
  ]

  const users: User[] = [
    { id: 'u1', name: 'Phil' },
    { id: 'u2', name: 'Alice' },
  ]

  it('1. existing task', () => {
    expect(findById(tasks, 't2')?.title).toBe('Build authentication API')
  })

  it('2. missing task', () => {
    expect(findById(tasks, 'missing')).toBeUndefined()
  })

  it('3. existing user', () => {
    expect(findById(users, 'u1')?.name).toBe('Phil')
  })

  it('4. empty array', () => {
    const emptyTasks: Task[] = []

    expect(findById(emptyTasks, 't1')).toBeUndefined()
  })
})
