export type Task = {
  id: number
  title: string
  completed: boolean
}

export let tasks: Task[] = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    completed: true,
  },
]