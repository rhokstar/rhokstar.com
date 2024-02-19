interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Project 1',
    description: `Project for later.`,
    imgSrc: '/static/images/google.png',
    href: '#',
  },
  {
    title: 'Project 2',
    description: `Project for later.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '#',
  },
]

export default projectsData
