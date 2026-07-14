export function calculateSummary(tasks) {
  const byStatus = Object.fromEntries(['todo', 'progress', 'done'].map(status => [status, tasks.filter(task => task.status === status).length]));
  const byPriority = Object.fromEntries(['high', 'medium', 'low'].map(priority => [priority, tasks.filter(task => task.priority === priority).length]));
  return { total: tasks.length, byStatus, byPriority, completionRate: tasks.length ? Math.round((byStatus.done / tasks.length) * 100) : 0 };
}
