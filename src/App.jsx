import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  // Tech,
  Projects,
  Particles,
} from './components';
import Sponsors from './components/Sponsors';
import InstaHandle from './components/InstaHandle';
import Research from './components/Research';
import Team_History from './components/Team_History';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/research' element={<Research/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

const Home = () => (
  <>
    <div>
            <Particles/>
            <Navbar />
            <Hero />
          </div>

          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <About />
          </div>
          <Team_History />
          {/* <Projects /> */}
          {/* <Research /> */}
          <Sponsors/>
          
          {/* <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
              rounded-tl-[150px] rounded-br-[150px]">
            <div
              className="bg-experienceLight bg-cover bg-center 
              bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Experience />
            </div>
          </div> */}
          <div>
            <InstaHandle/>
            <Contact />
          </div>
  </>
);

export default App;
