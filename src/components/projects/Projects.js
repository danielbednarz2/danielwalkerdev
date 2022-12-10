import DiscoverBoldly from '../../images/DiscoverBoldly.png'
import MovieApp from '../../images/MovieApp.png'
import Portfolio from '../../images/Portfolio.png'
import { ComputerDesktopIcon } from '@heroicons/react/24/outline'

const posts = [
    {
      title: 'Discover Boldly',
      href: 'https://discoverboldly.com',
      description:
        'This is my personal blog, I\'ve used React for component-based structure, Strapi as a headless CMS to serve content, PostgreSQL to store article and category information, and Cloudinary for hosting images.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl: DiscoverBoldly,
      githubUrl: 'https://github.com/danielbednarz2/Discover-Boldly'
    },
    {
      title: 'Movie App',
      href: 'https://movieapp.dev',
      description:
        'This is my take on a dynamic video platform. I\'ve used custom API\'s to connect to movie databases to show the most up-to-date movies, ratings, release data and movie posters.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl: MovieApp,
      githubUrl: 'https://github.com/danielbednarz2/movieapp'
    },
    {
      title: 'Portfolio',
      href: 'https://danielwalker.dev',
      description:
        'I created this portfolio to be a living showcase of what I\'m learning and how I\'m implementing new concepts into functional applications.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl: Portfolio,
      githubUrl: 'https://github.com/danielbednarz2/danielwalkerdev'
    },
  ]
  
 function Projects() {
    return (
      <div id="projects" className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>

          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                <a href={post.href} target="_blank" className="mt-2 block" rel="noreferrer">
                  <img className="h-48 w-full object-fit" src={post.imageUrl} alt="" />
                </a>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <a href={post.href} target="_blank" className="mt-2 block" rel="noreferrer">
                  <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-left text-gray-500">{post.description}</p>
                  </div>
                </a>
                <div className="mt-6 flex items-end justify-evenly">
                  <a className="text-sky-200 hover:text-sky-100" href={post.githubUrl} target="_blank" rel="noreferrer">
                    <span className="sr-only">GitHub</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="rgb(0,0,0)"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                        fill="rgb(0,0,0)"
                      />
                    </svg>
                  </a>
                  <a className="text-sky-200 hover:text-sky-100" href={post.href} target="_blank" rel="noreferrer">
                    <span className="sr-only">Website</span>
                    <ComputerDesktopIcon className="h-6 w-6 text-black" />
                  </a>
                    
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Projects;