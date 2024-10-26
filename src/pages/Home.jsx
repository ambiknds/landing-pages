import { Link } from 'react-router-dom';

function Home() {
  const landingPages = [
    { name: 'SaaS Product', path: '/saas-product' },
    { name: 'Online Course', path: '/online-course' },
    { name: 'Mobile App', path: '/landing-page-3' },
    { name: 'Event or Webinar', path: '/landing-page-4' },
    { name: 'Ebook Download', path: '/landing-page-5' },
    { name: 'Portfolio', path: '/landing-page-6' },
    { name: 'Non-profit Organization', path: '/landing-page-7' },
    { name: 'Freelancer', path: '/landing-page-8' },
    { name: 'Real Estate', path: '/landing-page-9' },
    { name: 'Restaurant', path: '/landing-page-10' },
    { name: 'Fitness Coach', path: '/landing-page-11' },
    { name: 'Personal Blog', path: '/landing-page-12' },
    { name: 'Agency Service', path: '/landing-page-13' },
    { name: 'Online Store', path: '/landing-page-14' },
    { name: 'Affiliate Marketing', path: '/landing-page-15' },
    { name: 'Crowdfunding Campaign', path: '/landing-page-16' },
    { name: 'Digital Marketing', path: '/landing-page-17' },
    { name: 'Product Launch', path: '/landing-page-18' },
    { name: 'Travel Agency', path: '/landing-page-19' },
    { name: 'Online Yoga Classes', path: '/landing-page-20' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Landing Pages</h1>
      <ul className="w-4/5 flex flex-wrap space-x-8">
        {landingPages.map((page, index) => (
          <li key={index} className='bg-slate-200 shadow-xl border rounded p-4 m-2'>
            <Link
              to={page.path}
              className="text-lg text-blue-600 hover:text-blue-800 transition"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
