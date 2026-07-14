import { useEffect, useState } from 'react';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Reports } from './components/Reports';
import { TeamPanel } from './components/TeamPanel';
import { InitBanner } from './components/InitBanner';
import { api } from './services/api';
import { defaultLabels } from './config/ui';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([api.tasks(), api.members()])
      .then(([taskData, memberData]) => { setTasks(taskData); setMembers(memberData); })
      .catch(() => setError('Could not reach the API. Start the backend on port 4000.'));
  }, []);

  return <main className="app">
    <Navbar />
    <InitBanner />
    <Header title={defaultLabels.productName} />
    {error && <p className="error">{error}</p>}
    <section className="dashboard">
      <Board tasks={tasks} />
      <aside><TeamPanel members={members} /><Reports tasks={tasks} /></aside>
    </section>
  </main>;
}
