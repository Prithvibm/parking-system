export function Reports({ tasks }) {
  const done = tasks.filter(task => task.status === 'done').length;
  const percent = tasks.length ? Math.round((done / tasks.length) * 100) : 0;
  return <section className="panel"><h2>Progress</h2><p>{done} of {tasks.length} tasks complete</p><div className="progress"><span style={{ width: `${percent}%` }} /></div><strong>{percent}%</strong></section>;
}
