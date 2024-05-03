import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Loading from './components/Loading'

import './App.css'

function App() {
  const Home = lazy(() => import('./components/Home'))
  const Dashboard = lazy(() => import('./components/LeadershipDashboard'))
  return (
    <Layout>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/leaderboard/kiosk/:kioskid"
              element={<Dashboard />}
            />
          </Routes>
        </Suspense>
      </Router>
    </Layout>
  )
}

export default App
