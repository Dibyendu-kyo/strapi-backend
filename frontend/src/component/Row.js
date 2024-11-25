// import React from 'react';
// import { gql, useQuery } from '@apollo/client';
// import './Row.css';

// // GraphQL query to fetch landing pages
// const GET_LANDING_PAGES = gql`
//   query {
//     landingPages {
//       blocks {
//         ... on ComponentBlocksRow {
//           card {
//             image {
//               url
//             }
//             heading
//             description
//             link {
//               Title
//               link
//               isExternal
//               type
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const Row = () => {
//   const { loading, error, data } = useQuery(GET_LANDING_PAGES);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const landingPages = data.landingPages;

//   return (
//     <section className="row-section">
//       {landingPages.map((page) => (
//         <div key={page.Title} className="row-content">
//           <h2>{page.Title}</h2>
//           <p>{page.Description}</p>
//           <div className="blocks-container">
//             {page.blocks.map((block, index) => (
//               block.card && (
//                 <div key={index} className="block">
//                   {block.card.map((cardItem, cardIndex) => (
//                     <div key={cardIndex} className="card">
//                       {cardItem.image && (
//                         <img
//                           src={`http://localhost:1337${cardItem.image.url}`}
//                           alt={cardItem.heading}
//                           className="card-image"
//                         />
//                       )}
//                       <h3>{cardItem.heading}</h3>
//                       <p>{cardItem.description}</p>
//                       {cardItem.link && (
//                         <a
//                           href={cardItem.link.link}
//                           target={cardItem.link.isExternal ? '_blank' : '_self'}
//                           rel={cardItem.link.isExternal ? 'noopener noreferrer' : ''}
//                           className={`button-link ${cardItem.link.type.toLowerCase()}`}
//                         >
//                           {cardItem.link.Title}
//                         </a>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Row;





// import React from 'react';
// import { gql, useQuery } from '@apollo/client';
// import './Row.css';

// // GraphQL query to fetch landing pages with the updated card fields
// const GET_LANDING_PAGES = gql`
//   query {
//     landingPages {
//       blocks {
//         ... on ComponentBlocksRow {
//           card {
//             image {
//               url
//             }
//             heading
//             description
//             duration
//             category
//             rating
//             reviews
//             price
//             link {
//               Title
//               link
//               isExternal
//               type
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const Row = () => {
//   const { loading, error, data } = useQuery(GET_LANDING_PAGES);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const landingPages = data.landingPages;

//   return (
//     <section className="row-section">
//       {landingPages.map((page) => (
//         <div key={page.Title} className="row-content">
//           <h2>{page.Title}</h2>
//           <p>{page.Description}</p>
//           <div className="blocks-container">
//             {page.blocks.map((block, index) => (
//               block.card && (
//                 <div key={index} className="block">
//                   {block.card.map((cardItem, cardIndex) => (
//                     <div key={cardIndex} className="card">
//                       {cardItem.image && (
//                         <img
//                           src={`http://localhost:1337${cardItem.image.url}`}
//                           alt={cardItem.heading}
//                           className="card-image"
//                         />
//                       )}
//                       <h3>{cardItem.heading}</h3>
//                       <p>{cardItem.description}</p>

//                       {/* Additional Fields */}
//                       {cardItem.duration && <p><strong>Duration:</strong> {cardItem.duration}</p>}
//                       {cardItem.category && <p><strong>Category:</strong> {cardItem.category}</p>}
//                       {cardItem.rating && <p><strong>Rating:</strong> {cardItem.rating}</p>}
//                       {cardItem.reviews && <p><strong>Reviews:</strong> {cardItem.reviews}</p>}
//                       {cardItem.price && <p><strong>Price:</strong> ${cardItem.price.toFixed(2)}</p>}

//                       {/* Link Button */}
//                       {cardItem.link && (
//                         <a
//                           href={cardItem.link.link}
//                           target={cardItem.link.isExternal ? '_blank' : '_self'}
//                           rel={cardItem.link.isExternal ? 'noopener noreferrer' : ''}
//                           className={`button-link ${cardItem.link.type.toLowerCase()}`}
//                         >
//                           {cardItem.link.Title}
//                         </a>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Row;



import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import './Row.css';

// GraphQL query to fetch landing pages with the updated card fields
const GET_LANDING_PAGES = gql`
  query {
    landingPages {
      blocks {
        ... on ComponentBlocksRow {
          card {
            image {
              url
            }
            heading
            description
            duration
            category
            rating
            reviews
            price
            slug
          }
        }
      }
    }
  }
`;

const Row = () => {
  const { loading, error, data } = useQuery(GET_LANDING_PAGES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const landingPages = data.landingPages;

  return (
    <section className="row-section">
      {landingPages.map((page, pageIndex) => (
        <div key={pageIndex} className="row-content">
          <div className="blocks-container">
            {page.blocks.map((block, blockIndex) => (
              block.card && (
                <div key={blockIndex} className="block">
                  {block.card.map((cardItem, cardIndex) => (
                    <div key={cardIndex} className="card">
                      {cardItem.image && (
                        <img
                          src={`http://localhost:1337${cardItem.image.url}`}
                          alt={cardItem.heading}
                          className="card-image"
                        />
                      )}
                      <h3>{cardItem.heading}</h3>
                      <p>{cardItem.description}</p>

                      {/* Additional Fields */}
                      {cardItem.duration && <p><strong>Duration:</strong> {cardItem.duration}</p>}
                      {cardItem.category && <p><strong>Category:</strong> {cardItem.category}</p>}
                      {cardItem.rating && <p><strong>Rating:</strong> {cardItem.rating}</p>}
                      {cardItem.reviews && <p><strong>Reviews:</strong> {cardItem.reviews}</p>}
                      {cardItem.price && <p><strong>Price:</strong> ${cardItem.price.toFixed(2)}</p>}

                      {/* Link to Course Page */}
                      {cardItem.slug && (
                        console.log(cardItem.slug),
                        <Link to={`/course-pages/${cardItem.slug}`} className="button-link">
                          View Course
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Row;
