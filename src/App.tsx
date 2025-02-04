import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Lesson05 from './lessons/lesson05/Lesson05'
import FetchFox from './components/fetchFox/FetchFox'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<h3>Home Page🏠</h3>} />
          <Route path="fellowship" element={<Lesson05 />} />
          <Route path="fetch-fox" element={<FetchFox />} />

        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
