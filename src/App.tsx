import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/intro/intro';
import Home from './pages/home/home';
import InsideBag from './pages/inside-bag/inside-bag';
import Phone from './pages/phone/phone';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/inside-bag" element={<InsideBag />} />
                <Route path="/phone" element={<Phone />} />
            </Routes>
        </Router>
    );
};

export default App;
