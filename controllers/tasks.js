// importar modelo

import { TaskModel } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  const tasks = await TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = async (req, res) => {
  const { description } = req.body
  const task = await TaskModel.addTask({ description })
  res.json(task)
}

export const deleteTask = async (req, res) => {
  const { id } = req.params
  const result = await TaskModel.deleteTask({ id })
  result
    ? res.json({ message: 'Deleted successfully' })
    : res.json({ message: 'Could not delete the task' })
}
