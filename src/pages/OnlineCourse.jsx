import { useState } from 'react';

export default function OnlineCourse() {
  const [isPlaying, setIsPlaying] = useState(false);

  const benefits = [
    {
      title: 'Learn at Your Pace',
      description:
        'Access course content 24/7 and learn according to your schedule',
      icon: '🎯',
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience',
      icon: '👨‍🏫',
    },
    {
      title: 'Interactive Content',
      description: 'Engage with hands-on exercises and real-world projects',
      icon: '💡',
    },
    {
      title: 'Community Support',
      description: 'Join a community of learners and get help when needed',
      icon: '🤝',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'UX Designer',
      content:
        'This course transformed my career. The practical approach and in-depth content were exactly what I needed.',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      content:
        "The best online learning experience I've had. The instructor's expertise and teaching style made complex concepts easy to understand.",
      image: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Emma Williams',
      role: 'Product Manager',
      content:
        "Worth every penny! The course content is up-to-date and relevant to today's industry needs.",
      image: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 text-center lg:pt-32">
        <div className="container mx-auto max-w-6xl">
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
            Master New Skills with Our
            <span className="block text-blue-600">Premium Video Courses</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
            Learn from industry experts and transform your career with our
            comprehensive video-based learning platform.
          </p>
          <button
            className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700"
            onClick={() => (window.location.href = '#enroll')}
          >
            Enroll Now - Save 20%
          </button>

          {/* Video Preview */}
          <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[515px]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Course Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
            Why Choose Our Platform
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{benefit.icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
            What Our Students Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-6 flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enroll" className="bg-blue-600 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-4xl font-bold">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl">
            Join thousands of successful students who have transformed their
            careers through our platform.
          </p>
          <button
            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-gray-100"
            onClick={() => (window.location.href = '/signup')}
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
