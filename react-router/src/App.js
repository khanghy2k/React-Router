import './App.css';
import { Link, Outlet, Route, Routes, NavLink, useParams, useNavigate, useSearchParams } from 'react-router-dom';

function App() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
    backgroundColor: isActive ? 'black' : 'red'
  });

  return (
    <>
      <Header />
      <ul>
        <li><NavLink to={'/'} style={navLinkStyle}>Home</NavLink></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route index element={<AboutRikkeiSoft />} />
          <Route path="soft" element={<AboutRikkeiSoft />} />
          <Route path="academy" element={<AboutRikkeiAcademy />} />
        </Route>
        <Route path="/product/:id/:name" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
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
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Home</h1>
        <button onClick={e => navigate('product/SP01/Tivi Sony')}>SP01</button>
      </div>
    </>
  );
}

export function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  let courseName = searchParams.get('courseName');
  let time = searchParams.get('time');
  return (
    <>
      <div>
        <h1>About {'Name: ' + searchParams.get('fullname')} | {'Age: ' + searchParams.get('Age')}</h1>
        <button onClick={()=> setSearchParams({courseName:'java',time:1000})}>Detail</button>
        <ul>
          <li><Link to={'/about/soft'}>Soft</Link></li>
          <li><Link to={'/about/academy'}>Academy</Link></li>
        </ul>
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

export function AboutRikkeiAcademy() {
  return (
    <>
      <div>
        <h1>AboutRikkeiAcademy</h1>
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

export function Product() {
  const { id, name } = useParams();
  return (
    <>
      <div>
        <h1>Product</h1>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
      </div>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <div>
        <h1>NotFound</h1>
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
