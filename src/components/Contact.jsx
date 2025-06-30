import React from 'react';

const Contact = () => {
  return (
    <section className="p-8 bg-white rounded-lg shadow max-w-3xl mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">📬 Contact Me</h2>

      <div className="text-gray-700 space-y-4">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:jerico@student.com" className="text-blue-600 underline">
            jerico@student.com
          </a>
        </p>

        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+639123456789" className="text-blue-600 underline">
            +63 912 345 6789
          </a>
        </p>

        <p>
          <strong>Location:</strong> Marikina City, Metro Manila, Philippines
        </p>
      </div>
    </section>
  );
};

export default Contact;
