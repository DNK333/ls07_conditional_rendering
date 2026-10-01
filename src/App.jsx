import UserProfile from './UserProfile'
import './App.css'

function App() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="page-eyebrow">LS07</p>
        <h1>Профиль пользователя</h1>
      </header>
      <UserProfile />
    </main>
  )
}

export default App
