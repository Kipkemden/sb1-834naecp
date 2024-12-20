import React from 'react';

const testimonials = [
  {
    content: "This platform has revolutionized how we manage our properties. The M-Pesa integration alone has saved us countless hours.",
    author: "Jane Doe",
    role: "Property Manager",
    company: "Nairobi Heights",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The maintenance tracking system has improved our response time significantly. Our tenants are much happier now.",
    author: "John Smith",
    role: "Building Owner",
    company: "Mombasa Residences",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Property Managers Across Kenya
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Don't just take our word for it - hear what our customers have to say
          </p>
        </div>
        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="lg:col-span-1">
              <div className="h-full bg-white rounded-lg shadow-lg p-8">
                <blockquote>
                  <p className="text-lg text-gray-600">{testimonial.content}</p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-base text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;