import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero'
import Login from './pages/Login'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={ <Hero /> }/>
            <Route path="/login" element={ <Login /> }/>
            
        </Routes>
    )    
}

export default App;