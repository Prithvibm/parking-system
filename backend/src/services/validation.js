const statuses = ['todo', 'progress', 'done'];
const priorities = ['low', 'medium', 'high'];

export function validateTask(task) {
  const errors = [];
  if (!task.title?.trim()) errors.push('title is required');
  if (!statuses.includes(task.status)) errors.push('status must be todo, progress, or done');
  if (!priorities.includes(task.priority)) errors.push('priority must be low, medium, or high');
  if (!task.owner?.trim()) errors.push('owner is required');
  return errors;
}
