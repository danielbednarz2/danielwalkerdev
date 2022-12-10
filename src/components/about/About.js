  import { 
    HtmlIcon,
    ReactIcon,
    GraphIcon,
    CssIcon,
    ExpressIcon,
    NodeIcon,
    TailwindIcon,
    JavascriptIcon
 } from '../../icons'
  
  const features = [
    {
      name: 'HTML',
      description: 'The cornerstone of the web. Understanding the semantics of how browsers feed content to consumers and making the internet a place for all to participate equally.',
      icon: HtmlIcon,
    },
    {
      name: 'CSS',
      description: 'The lasting effects of how CSS impacts the way we interact with the web are shown throughout all development. Applications are not only meant to function, but to be presentable as well.',
      icon: CssIcon,
    },
    {
      name: 'Javascript',
      description: 'We all want our websites to be interactive, right?',
      icon: JavascriptIcon,
    },
    {
      name: 'React.js',
      description: 'React packages Javascript into an easily scalable libray to create consistent themse across my websites.',
      icon: ReactIcon,
    },
    {
      name: 'Node.js',
      description: 'Node is an incredible language using Javascript to accomplish interacting with databases, APIs, and beyond the browser completely.',
      icon: NodeIcon,
    },
    {
      name: 'Express',
      description: 'A great framework for streamlining Node functions as well as providing routing for web pages and easy access to middleware for accomplishing back-end tasks.',
      icon: ExpressIcon,
    },
    {
      name: 'GraphQL',
      description: 'An approachable technology that allows me to easily consume data from hosted database sources.',
      icon: GraphIcon,
    },
    {
      name: 'TailwindCSS',
      description: 'A design aid for my analytical mind.',
      icon: TailwindIcon,
    },
  ]
  
 function About() {
    return (
      <div id="about" className="bg-sky-700">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:max-w-7xl lg:px-8 lg:py-40">
          <h2 className="text-4xl font-bold tracking-tight text-white">Skills & Technologies</h2>
          <p className="text-center mt-6 text-lg leading-8 text-sky-200">
          As a self-taught developer, I have had the pleasure of working with a lot of different technoloiges. The following skills are ones that I've found myself coming back to time and again and one's that I want to use to create beautiful, functional sites to increase engagement or cast vision for visitors to your site.
          </p>
          <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-50">
                    <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold leading-8 text-white">{feature.name}</h3>
                  <p className="mt-2 text-left leading-7 text-sky-200">{feature.description}</p>
                </div>
              </div>
            ))}
            {}
          </div>
        </div>
      </div>
    )
  }
  
  export default About;