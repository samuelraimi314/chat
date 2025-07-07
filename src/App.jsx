import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import AuthForm from './pages/AuthForm';
import Chat from './pages/Chat';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}
