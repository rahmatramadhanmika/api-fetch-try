import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserList from './pages/UserList'
import PostList from './pages/PostList'
import UserDetail from './pages/UserDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </Router>
  )
}

export default App
