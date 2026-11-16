export type TaskStatus = 'todo' | 'in-progress' | 'done'

export interface Task {
  id: string
  title: string
  projectId: string
  assigneeId: string
  status: TaskStatus
  dueDate?: string
}

export type TaskUpdate = Partial<Task>
export type TaskSummary = Pick<Task, 'id' | 'title' | 'status'>
export type NewTask = Omit<Task, 'id'>
export type CreateTask = Pick<Task, 'title' | 'projectId'> &
  Partial<Pick<Task, 'id' | 'assigneeId' | 'status' | 'dueDate'>>

/**
 * Returns a new task array. The matching Task is copied with a new title;
 * other Task objects keep their original references.
 */
export function updateTaskTitle(
  tasks: Task[],
  taskId: string,
  newTitle: string,
): Task[] {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, title: newTitle } : task,
  )
}

/**
 * Checks the study's overdue rule:
 * - a due date must exist,
 * - the task must not be completed,
 * - the due date must be earlier than today.
 *
 * Date strings must use YYYY-MM-DD format for string comparison to be valid.
 */
export function isTaskOverdue(task: Task, today: string): boolean {
  if (!task.dueDate) {
    return false
  }

  if (task.status === 'done') {
    return false
  }

  return task.dueDate < today
}

/**
 * Generic example from the generics lesson.
 * Returns undefined for an empty array.
 */
export function getFirstItem<T>(items: T[]): T | undefined {
  return items[0]
}
