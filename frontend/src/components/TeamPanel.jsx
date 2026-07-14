export function TeamPanel({ members }) {
  return <section className="panel"><h2>Team</h2>{members.map(member => <div className="member" key={member.id}><strong>{member.name}</strong><span>{member.role}</span></div>)}</section>;
}
