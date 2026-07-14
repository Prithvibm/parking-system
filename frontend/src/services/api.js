const baseUrl = 'http://localhost:4000/api';
const get = async path => { const response = await fetch(baseUrl + path); if (!response.ok) throw new Error('Request failed'); return response.json(); };

export const api = { tasks: () => get('/tasks'), members: () => get('/members'), metrics: () => get('/metrics/summary') };
