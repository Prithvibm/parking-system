const priorityClass = { high: 'high', medium: 'medium', low: 'low' };

export function TaskCard({ task }) {
  return <article className="card"><span className={'badge ' + priorityClass[task.priority]}>{task.priority}</span><h4>{task.title}</h4><p>{task.description}</p><small>Owner: {task.owner}</small></article>;
}
