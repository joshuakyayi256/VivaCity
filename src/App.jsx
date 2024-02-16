import { Routes, Route } from 'react-router-dom';
import IndexPage from './Pages/IndexPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import Layout from './Layout.jsx';
import OurStory from './Pages/OurStory.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<SignUpPage />} />
        <Route path="/our-story" element={<OurStory />} />
      </Route>
    </Routes>
  );
}

export default App;
