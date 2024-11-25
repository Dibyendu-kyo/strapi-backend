// import React from 'react';
// import Hero from './component/Hero';
// import Cta from './component/Cta';
// import Pricing from './component/Pricing';
// import Row from './component/Row';
// import './component/Hero.css';
// import './component/Cta.css';
// import './component/Pricing.css';
// import './component/Row.css';
// import Siuu from './component/siuu.js';

// function App() {
//   return (
//     <div className="App">
//       <Hero />
//       <Row />
//       <Pricing />
//       <Cta />
//       <Siuu />
//     </div>
//   );
// }

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Hero from './component/Hero';
// import Cta from './component/Cta';
// import Pricing from './component/Pricing';
// import Row from './component/Row';
// import CourseDetailPage from './component/CoursePage'; // Import the CoursePage component
// import './component/Hero.css';
// import './component/Cta.css';
// import './component/Pricing.css';
// import './component/Row.css';
// import Siuu from './component/siuu.js';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Home route with all main components */}
//           <Route path="/" element={
//             <>
//               <Hero />
//               <Row />
//               <Pricing />
//               <Cta />
//               <CourseDetailPage/>
              
//             </>
//           } />
          
//           {/* Route for CoursePage */}
//           <Route path="/course/:slug" element={<CourseDetailPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Row from './component/Row';
import Appp from './component/appp.js';
import './component/Row.css';
import CoursePage from './component/Course_page.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home route with all main components */}
          <Route path="/" element={
            <>
              <Row />
              <Appp />
            </>
          } />
          
          {/* Route for CoursePage */}
          <Route path="/course-pages/:slug" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
