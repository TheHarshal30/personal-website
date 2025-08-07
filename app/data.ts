type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'skinwise',
    description:
      'uses vgg-16, llm, 3D models and provides solution for your skin problems with an accuracy that might amaze you!',
    link: 'https://github.com/TheHarshal30/skinwise',
    video: 'https://res.cloudinary.com/dkimppsvb/video/upload/v1742204349/ezgif-6838c33a1c15a9_dms0wt.mp4', // Ensures absolute path

    id: 'project1',
  },
  {
    name: 'eclipse',
    description: 'calculates expenses and categorizes them in seconds without asking for any personal details!',
    link: 'https://github.com/TheHarshal30/eclipse',
    video:
      'https://res.cloudinary.com/dkimppsvb/video/upload/v1742205155/ezgif-6838c33a1c15a9_feug5b.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Medigene Care',
    title: 'Software Developer - Freelance',
    start: 'Jun 2024',
    end: 'Oct 2024',
    link: 'https://drive.google.com/file/d/1VRXkBL7g8-bZSoKwO8Qy-HQ-1oKc0BHV/view',
    id: 'work1',
  },
  {
    company: 'Uttam Infotech',
    title: 'Software Consultant - Freelance',
    start: 'Aug 2024',
    end: 'Sept 2024',
    link: '',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How I Built a Neural Network from Scratch Without Losing My Mind',
    description: 'a structure as complex as neural networks can be reduced to a beautiful matrix multiplications',
    link: '/blog/How-I-Built-a-Neural-Network-from-Scratch-Without-Losing-My-Mind',
    uid: 'How-I-Built-a-Neural-Network-from-Scratch-Without-Losing-My-Mind',
  },
    {
    title: 'The Curious Case of Well-Behaved Matrices',
    description: 'initializing weights orthogonally keeps the gradients from vanishing/exploding',
    link: '/blog/The-Curious-Case-of-Well-Behaved-Matrices',
    uid: 'The-Curious-Case-of-Well-Behaved-Matrices',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/theharshal30',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/herschelle___',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/harshalrudra',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/theharshalrudra',
  },
]

export const EMAIL = ""
