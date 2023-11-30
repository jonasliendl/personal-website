import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/navigation/Header';
import Router from './routes';

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-darkBackground text-snow">
        <Header/>
        <div className="w-full h-[100px]"></div>
        <Router/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
