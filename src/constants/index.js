import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    python,
    mysql,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    mongodb,
    // bull,
    // bowling,
    newHome,
    dojo,
    travel,
    sparx,
    // arch,
    threejs,
    // building,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id:"projects",
      title: "Projects"
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Architecture Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    // {
    //   title: "Carpenter",
    //   company_name: "MESH Architecture & Fabrication",
    //   icon: building,
    //   iconBg: "#F3F3F3",
    //   date: "May 2013 - Aug 2016",
    //   points: [
    //     "Read blueprints to compile cut list and check for adequate material inventory.",
    //     "Assembled and installed custom cabinetry and furniture.",
    //     "Responsibly delivered finished materials on schedule.",
    //   ],
    // },
    // {
    //   title: "Bartender",
    //   company_name: "Garage Bowl & Billiards",
    //   icon: bowling,
    //   iconBg: "#E6DEDD",
    //   date: "Sept 2016 - Feb 2020",
    //   points: [
    //     "Handled bar with attention to detail for 150+ customers per night.",
    //     "Maintained large catered event hosting of 50+ person groups.",
    //     "Reached 98% positive customer satisfaction and received positive feedback from managers.",
    //   ],
    // },
    // {
    //   title: "Bartender",
    //   company_name: "The Matador",
    //   icon: bull,
    //   iconBg: "black",
    //   date: "March 2021 - present",
    //   points: [
    //     "Increased bar sales 20% by upselling key menu  items.",
    //     "Utilize multitasking skills to provide  bar service and customer care to 100+ customers per day.",
    //     "Trained new  staff members ensuring adherence to established guidelines.",
    //   ],
    // },
    {
      title: "Student",
      company_name: "Coding Dojo Bootcamp",
      icon: dojo,
      iconBg: "#202020",
      date: "Feb 2021 - Sept 2021",
      points: [
        "Developing and maintaining web applications using Python, MERN, Java and other related technologies.",
        "Collaborating with cohorts and instructor via remote zoom meetings, discord",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other student developers.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "SPARX Market",
      description:
        "An online marketplace using Next.js that seamlessly integrates with Sanity.io for efficient data storage. Stripe payment for a secure and smooth payment process.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sanity.io",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: sparx,
      source_code_link: "https://github.com/RDixonCodes/ecommerce",
    },
    {
      name: "Space Finder",
      description:
        "Efficiently discover your 'space' with a streamlined web app. Search for homes, view listings for sale, and find available rentals effortlessly. ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "pink-text-gradient",
        },
      ],
      image: newHome,
      source_code_link: "https://github.com/RDixonCodes/homeFinderApp",
    },
    {
      name: "Trip Buddy",
      description:
        "Discover everything you need for global travel on our comprehensive platform – find restaurants, hotels, and attractions in popular destinations worldwide.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "google-maps",
          color: "green-text-gradient",
        },
        {
          name: "materials-ui",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/RDixonCodes/travelApp",
    },
  ];
  
  export { services, technologies, experiences, projects };