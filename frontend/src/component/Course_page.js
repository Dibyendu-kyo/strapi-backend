import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { slug } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      if (!slug) {
        console.error('Slug is undefined');
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:1337/api/course-pages/${slug}?populate=*`
        );

        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();

        console.log("API Response:", data); // Log to inspect the response

        // Check if the response has the correct data path
        if (!data || !data.data || !data.data.attributes) {
          throw new Error("Course data not found.");
        }

        setCourseData(data.data.attributes); // Access attributes directly
        setLoading(false);
      } catch (err) {
        console.error("Error fetching course data:", err.message);
        setError(err.message || "Failed to load course data");
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [slug]); // useEffect is correctly called only once when 'slug' changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!courseData) {
    return <div>Course data not found.</div>;
  }

  const {
    title,
    description,
    rating,
    reviews,
    duration,
    level,
    students_enrolled,
    language,
    subtitle_language,
    features,
    share_links,
    price,
    image,
    video_preview,
  } = courseData;

  return (
    <div className="course-page">
      {/* Course Header */}
      <header className="course-header">
        <img
          src={`http://localhost:1337${image.formats.large.url}`}
          alt={title}
          className="course-image"
        />
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      {/* Course Details */}
      <section className="course-details">
        <h2>Course Details</h2>
        <ul>
          <li><strong>Rating:</strong> {rating} ⭐ ({reviews} reviews)</li>
          <li><strong>Duration:</strong> {duration}</li>
          <li><strong>Level:</strong> {level}</li>
          <li><strong>Language:</strong> {language}</li>
          <li><strong>Subtitle Language:</strong> {subtitle_language}</li>
          <li><strong>Students Enrolled:</strong> {students_enrolled}</li>
        </ul>
      </section>

      {/* Features */}
      <section className="course-features">
        <h2>Features</h2>
        <ul>
          {features && features.map((feature, index) => (
            <li key={index}>{feature.name}</li>
          ))}
        </ul>
      </section>

      {/* Price */}
      <section className="course-price">
        <h2>Price</h2>
        <p>
          <strong>₹{price.current}</strong> 
          <span className="original-price"> ₹{price.original}</span>
        </p>
      </section>

      {/* Share Links */}
      <section className="course-share">
        <h2>Share This Course</h2>
        <ul>
          {share_links && share_links.map((link, index) => (
            <li key={index}>
              {Object.entries(link).map(([key, value]) => (
                <a href={value} target="_blank" rel="noopener noreferrer" key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </section>

      {/* Video Preview */}
      <section className="course-preview">
        <h2>Preview</h2>
        <video controls width="100%">
          <source
            src={`http://localhost:1337${video_preview.url}`}
            type={video_preview.mime}
          />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default CoursePage;
