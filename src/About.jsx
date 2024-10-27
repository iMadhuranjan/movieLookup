import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About Movie LookUp
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <p className="text-lg text-gray-700 mb-6">
          Movie LookUp is my first React project, designed to showcase the trending movies and web series of the week. Users can easily search for their favorite films and shows, receiving comprehensive information including release dates, cast details, budgets, and much more.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Features:</h3>
          <ul className="list-disc list-inside mb-6">
            <li className="text-lg text-gray-700 mb-2">🔍 <strong>Search Functionality:</strong> Quickly find your favorite movies and series.</li>
            <li className="text-lg text-gray-700 mb-2">🔥 <strong>Trending Movies:</strong> Stay updated with the latest hits in the film industry.</li>
            <li className="text-lg text-gray-700 mb-2">📖 <strong>Detailed Movie Information:</strong> Access in-depth details, including ratings, cast, and plot summaries.</li>
            <li className="text-lg text-gray-700 mb-2">🔄 <strong>Continuous Improvement:</strong> Regular updates and new features to enhance user experience.</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Join the Journey:</h3>
          <p className="text-lg text-gray-700">
            Explore, discover, and dive deep into the world of cinema and television. Stay tuned for more features that will enrich your movie-watching experience!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
