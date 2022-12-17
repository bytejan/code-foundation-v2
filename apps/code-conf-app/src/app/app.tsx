import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from '../Containers/HomePage';

export function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
