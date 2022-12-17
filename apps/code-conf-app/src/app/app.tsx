import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from '../Containers/HomePage';
import { AboutPage } from '../Containers/AboutPage';

export function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
