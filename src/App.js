import './App.css';
import Chatbot from './components/Chatbot';
import ThankYou from './pages/ThankYou'; // à créer à l'étape suivante
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chatbot />} />
        <Route path="/merci" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;