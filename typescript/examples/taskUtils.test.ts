import { describe, expect, it } from 'vitest'
import {
  type Task,
  isTaskOverdue,
  updateTaskTitle,
} from './taskUtils'

const today = '2026-11-16'

function task(
  overrides: Partial<Task> & Pick<Task, 'id' | 'title'>,
): Task {
  return {
    projectId: 'p1',
    assigneeId: 'u1',
    status: 'todo',
    ...overrides,
  }
}

function sampleTasks(): Task[] {
  return [
    task({
      id: 't1',
      title: 'Create login page',
      status: 'done',
    }),
    task({
      id: 't2',
      title: 'Implement authentication API',
      status: 'in-progress',
      dueDate: '2026-11-15',
    }),
    task({
      id: 't3',
      title: 'Write documentation',
      dueDate: '2026-11-20',
    }),
  ]
}

describe('isTaskOverdue', () => {
  it('returns true for a past-due unfinished task', () => {
    expect(
      isTaskOverdue(task({
        id: 't1',
        title: 'Implement API',
        status: 'in-progress',
        dueDate: '2026-11-15',
      }), today),
    ).toBe(true)
  })

  it('returns false when the due date is today', () => {
    expect(
      isTaskOverdue(task({
        id: 't1',
        title: 'Review PR',
        dueDate: today,
      }), today),
    ).toBe(false)
  })

  it('returns false when the due date is in the future', () => {
    expect(
      isTaskOverdue(task({
        id: 't1',
        title: 'Write docs',
        dueDate: '2026-11-17',
      }), today),
    ).toBe(false)
  })

  it('returns false when no due date exists', () => {
    expect(
      isTaskOverdue(task({
        id: 't1',
        title: 'Unscheduled task',
      }), today),
    ).toBe(false)
  })

  it('returns false when the due date is an empty string', () => {
    expect(
      isTaskOverdue(task({
        id: 't1',
        title: 'Empty due date',
        dueDate: '',
      }), today),
    ).toBe(false)
  })

  it('returns false for a completed task even when its date is in the past', () => {
    expect(
      isTaskOverdue(task({
        id: 't1',
        title: 'Finished task',
        status: 'done',
        dueDate: '2026-11-10',
      }), today),
    ).toBe(false)
  })
})

describe('updateTaskTitle', () => {
  it('updates the title of the matching task', () => {
    const tasks = sampleTasks()

    const updated = updateTaskTitle(
      tasks,
      't2',
      'Build authentication API',
    )

    expect(updated[1].title).toBe('Build authentication API')
  })

  it('does not mutate the original array or original task', () => {
    const tasks = sampleTasks()
    const originalTitle = tasks[1].title

    updateTaskTitle(tasks, 't2', 'Build authentication API')

    expect(tasks[1].title).toBe(originalTitle)
  })

  it('returns a new array with the same number of elements', () => {
    const tasks = sampleTasks()
    const updated = updateTaskTitle(tasks, 't2', 'New title')

    expect(updated).not.toBe(tasks)
    expect(updated).toHaveLength(tasks.length)
  })

  it('creates a new object only for the updated task', () => {
    const tasks = sampleTasks()
    const updated = updateTaskTitle(tasks, 't2', 'New title')

    expect(updated[1]).not.toBe(tasks[1])
    expect(updated[0]).toBe(tasks[0])
    expect(updated[2]).toBe(tasks[2])
  })

  it('returns a new array but keeps item references when the ID is missing', () => {
    const tasks = sampleTasks()
    const updated = updateTaskTitle(tasks, 'missing', 'New title')

    expect(updated).not.toBe(tasks)
    expect(updated).toEqual(tasks)
    expect(updated[0]).toBe(tasks[0])
    expect(updated[1]).toBe(tasks[1])
    expect(updated[2]).toBe(tasks[2])
  })
})
