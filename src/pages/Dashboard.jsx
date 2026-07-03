import { useAuth } from '../contexts/AuthContext.jsx'

function Dashboard() {
  const { currentUser, logout } = useAuth()

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Logado como: {currentUser?.email}</p>
      <button onClick={logout}>Sair</button>
    </div>
  )
}

export default Dashboard
