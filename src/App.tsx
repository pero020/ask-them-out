import './App.css';
import { Route, Routes } from 'react-router-dom';
import AskPage from './pages/AskPage.tsx';
import LandingPage from './pages/LandingPage.tsx';
import LandingLayout from './components/layouts/LandingLayout.tsx';
import AskLayout from './components/layouts/AskLayout.tsx';

function App() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Routes>
        <Route path='/' element={<LandingLayout />}>
          <Route index element={<LandingPage />}/>
        </Route>
        <Route path="ask" element={<AskLayout />}>
          <Route index element={<AskPage />} />
          <Route path=":askId" element={<AskPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
