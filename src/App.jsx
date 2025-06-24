import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserList from './pages/UserList'
import PostList from './pages/PostList'
import UserDetail from './pages/UserDetail'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  )
}

export default App
