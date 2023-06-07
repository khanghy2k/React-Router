import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about/rikkei-soft">Rikkei Soft</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="rikkei-soft" element={<AboutRikkeiSoft />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export function Header() {
  return (
    <>
      <div>
        <h1>Header</h1>
       
      </div>
    </>
  );
}

export function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

export function About() {
  return (
    <>
      <div>
        <h1>About</h1>
        <Outlet />
      </div>
    </>
  );
}

export function AboutRikkeiSoft() {
  return (
    <>
      <div>
        <h1>AboutRikkeiSoft</h1>
      </div>
    </>
  );
}

export function Contact() {
  return (
    <>
      <div>
        <h1>Contact</h1>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
}

export default App;
