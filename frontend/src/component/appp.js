// import React from "react";
// import "./appp.css";
// import { FaStar, FaRegClock, FaUsers, FaLanguage, FaCheckCircle, FaCopy, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

// function Appp() {
//   return (
//     <div className="course-container">
//       {/* Breadcrumb Navigation */}
//       <nav className="breadcrumb">
//         <span>Home &gt; Courses &gt; Web Development &gt; Webflow</span>
//       </nav>

//       {/* Course Title Section */}
//       <section className="course-header">
//         <h1>Complete Website Responsive Design: from Figma to Webflow to Website Design</h1>
//         <p>3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.</p>
//         <div className="rating">
//           <FaStar className="star-icon" />
//           <span>4.8</span> <span>(451,444 Rating)</span>
//         </div>
//       </section>

//       {/* Course Details */}
//       <section className="course-body">
//         {/* Left Section */}
//         <div className="course-left">
//           <img
//             src="https://via.placeholder.com/600x300"
//             alt="Course Thumbnail"
//             className="course-image"
//           />
//         </div>

//         {/* Right Section */}
//         <div className="course-right">
//           <h2 className="price">
//             ₹114.00 <span className="original-price">₹126.00</span>
//           </h2>
//           <ul className="course-details">
//             <li>
//               <FaRegClock /> Course Duration: 6 Month
//             </li>
//             <li>
//               <FaUsers /> Beginner and Intermediate
//             </li>
//             <li>
//               <FaUsers /> Students Enrolled: 69,419,618
//             </li>
//             <li>
//               <FaLanguage /> Language: English
//             </li>
//             <li>
//               <FaLanguage /> Subtitle Language: English
//             </li>
//           </ul>
//           <button className="btn add-to-cart">Add To Cart</button>
//           <button className="btn buy-now">Buy Now</button>
//           <div className="course-includes">
//             <h3>This course includes:</h3>
//             <ul>
//               <li>
//                 <FaCheckCircle /> Lifetime access
//               </li>
//               <li>
//                 <FaCheckCircle /> 30-days money-back guarantee
//               </li>
//               <li>
//                 <FaCheckCircle /> Free exercises file & downloadable resources
//               </li>
//               <li>
//                 <FaCheckCircle /> Shareable certificate of completion
//               </li>
//               <li>
//                 <FaCheckCircle /> Access on mobile, tablet, and TV
//               </li>
//               <li>
//                 <FaCheckCircle /> English subtitles
//               </li>
//               <li>
//                 <FaCheckCircle /> 100% online course
//               </li>
//             </ul>
//           </div>
//           <div className="social-share">
//             <h3>Share this course:</h3>
//             <button className="social-btn">
//               <FaCopy /> Copy Link
//             </button>
//             <button className="social-btn">
//               <FaFacebookF /> Facebook
//             </button>
//             <button className="social-btn">
//               <FaTwitter /> Twitter
//             </button>
//             <button className="social-btn">
//               <FaWhatsapp /> WhatsApp
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Description */}
//       <section className="description">
//         <h2>Description</h2>
//         <p>
//           It gives you a huge self-satisfaction when you look at your work and say, “I made this!” I
//           love that feeling after I’m done working on something. When I lean back in my chair, look
//           at the final result with a smile, and have this little “spark joy” moment. It’s especially
//           satisfying when I know I just made $5,000.
//         </p>
//       </section>
//     </div>
//   );
// }

// export default Appp;



import React, { useState } from "react";
import "./appp.css";
import { FaStar, FaRegClock, FaUsers, FaLanguage, FaCheckCircle, FaCopy, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Appp() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="course-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <span>Home &gt; Courses &gt; Web Development &gt; Webflow</span>
      </nav>

      <div className="course-content">
        {/* Left Section: Image/Video + Description */}
        <div className="course-left">
          {isVideoPlaying ? (
            <video
              className="course-media"
              controls
              autoPlay
              onEnded={() => setIsVideoPlaying(false)}
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src="https://th.bing.com/th/id/OIP.F-viGlLtTBTS6SjD_P5m9AHaEC?w=315&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Course Thumbnail"
              className="course-media"
              onClick={handleThumbnailClick}
            />
          )}
          <section className="description">
            <h2>Description</h2>
            <p>
              It gives you a huge self-satisfaction when you look at your work and say, “I made this!” I
              love that feeling after I’m done working on something. When I lean back in my chair, look
              at the final result with a smile, and have this little “spark joy” moment. It’s especially
              satisfying when I know I just made $5,000.
            </p>
            <p>
              For example, this is a design course but I don’t teach you Photoshop. Because Photoshop is
              needlessly complicated for web design. Instead, I teach Figma—a simple tool that is quick
              and easy to learn.
            </p>
          </section>
        </div>

        {/* Right Section */}
        <div className="course-right">
          <h2 className="price">
            ₹114.00 <span className="original-price">₹126.00</span>
          </h2>
          <ul className="course-details">
            <li>
              <FaRegClock /> Course Duration: 6 Month
            </li>
            <li>
              <FaUsers /> Beginner and Intermediate
            </li>
            <li>
              <FaUsers /> Students Enrolled: 69,419,618
            </li>
            <li>
              <FaLanguage /> Language: English
            </li>
            <li>
              <FaLanguage /> Subtitle Language: English
            </li>
          </ul>
          <button className="btn add-to-cart">Add To Cart</button>
          <button className="btn buy-now">Buy Now</button>
          <div className="course-includes">
            <h3>This course includes:</h3>
            <ul>
              <li>
                <FaCheckCircle /> Lifetime access
              </li>
              <li>
                <FaCheckCircle /> 30-days money-back guarantee
              </li>
              <li>
                <FaCheckCircle /> Free exercises file & downloadable resources
              </li>
              <li>
                <FaCheckCircle /> Shareable certificate of completion
              </li>
              <li>
                <FaCheckCircle /> Access on mobile, tablet, and TV
              </li>
              <li>
                <FaCheckCircle /> English subtitles
              </li>
              <li>
                <FaCheckCircle /> 100% online course
              </li>
            </ul>
          </div>
          <div className="social-share">
            <h3>Share this course:</h3>
            <button className="social-btn">
              <FaCopy /> Copy Link
            </button>
            <button className="social-btn">
              <FaFacebookF /> Facebook
            </button>
            <button className="social-btn">
              <FaTwitter /> Twitter
            </button>
            <button className="social-btn">
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appp;
