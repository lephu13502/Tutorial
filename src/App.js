import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/navbar.jsx';
import Footer from './components/layout/footer.jsx';
import Alert from './components/layout/alert'
import {GithubProvider} from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar/>
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/notfound' component={NotFound} />
                <Route component={NotFound} />
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
