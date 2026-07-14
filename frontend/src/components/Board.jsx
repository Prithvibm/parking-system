import { TaskCard } from './TaskCard';
import { columns } from '../config/board';

export function Board({ tasks }) {
  return <section><h2>Sprint board</h2><div className="board">{columns.map(column => <div className="column" key={column.id}><h3>{column.label}</h3>{tasks.filter(task => task.status === column.id).map(task => <TaskCard key={task.id} task={task} />)}</div>)}</div></section>;
}
