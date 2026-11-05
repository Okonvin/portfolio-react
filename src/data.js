// All the text and image paths for the site live here.
// Images are served from the /public folder (public/assets and public/images).

export const navItems = [
  { id: "home", label: "Home", icon: "/assets/home.svg" },
  { id: "about", label: "About", icon: "/assets/User.svg" },
  { id: "experience", label: "Experience", icon: "/assets/Briefcase.svg" },
  // { id: "education", label: "Education", icon: "/assets/Graduation-Cap.svg" },
  { id: "services", label: "Services", icon: "/assets/Layer-Group.svg" },
  { id: "work", label: "Recent work", icon: "/assets/Recent-work-icon.svg" },
  { id: "hire", label: "Hire me", icon: "/assets/User-Plus.svg" },
  // Turn this on together with <Posts /> in App.jsx:
  // { id: "notes", label: "Notes", icon: "/assets/Sticky-Note.svg" },
  { id: "contact", label: "Contact", icon: "/assets/Facebook-Messenger.svg" },
];

export const profile = {
  name: "Victor",
  tagline: "A Web Designer And A Frontend Engineer",
  photo: "/images/Profile-Image.jpg",
};

export const socials = [
  // { label: "Reddit", icon: "/assets/Reddit-Icon.svg", href: "#" },
  { label: "Twitter", icon: "/assets/Twitter-Icon.svg", href: "#" },
  { label: "Instagram", icon: "/assets/Instagram-Icon.svg", href: "#" },
  { label: "Facebook", icon: "/assets/Facebook-Icon.svg", href: "#" },
  // { label: "YouTube", icon: "/assets/YouTube-Icon.svg", href: "#" },
];

export const about = {
  text: "I'm Victor, a web designer and frontend engineer. I design and build clean, responsive websites, from the first sketch in Figma to the finished page in code.",
  cv: "/assets/cv.pdf",
};

export const skills = [
  { name: "HTML", level: 92, color: "#4dfff2" },
  { name: "CSS", level: 95, color: "#fbff4d" },
  { name: "JavaScript", level: 87, color: "#55ff77" },
  { name: "Figma", level: 83, color: "#1a9a9a" },
  { name: "Tailwind CSS", level: 87, color: "#1565e0" },
];

export const stats = [
  { value: 3, label: "Projects completed", icon: "/assets/fire.svg" },
  { value: 0, label: "Running projects", icon: "/assets/Building.svg" },
  { value: 0, label: "Satisfied clients", icon: "/assets/abt-user.svg" },
  { value: 0, label: "Awards won", icon: "/assets/Baseball.svg" },
];

// One card per entry. The Education card from your HTML was commented out, so it's
// commented out here too: uncomment it to show a second card.
export const resume = [
  {
    id: "experience",
    heading: "Work experience",
    items: [
      {
        icon: "/assets/Briefcase.svg",
        date: "April 2026 - Present",
        title: "Frontend Developer Intern",
        org: "Dev4gold Learning",
        text: "Building and refining responsive, accessible web interfaces with HTML, CSS and JavaScript, and working with the team to turn designs into polished, production-ready pages.",
      },
      {
        icon: "/assets/Graduation-Cap.svg",
        date: "Training completed",
        title: "Frontend Development Training",
        org: "GoMyCode",
        text: "Completed an intensive, project-based program in web development, building a strong foundation in HTML, CSS, JavaScript and responsive design.",
      },
    ],
  },
  // {
  //   id: "education",
  //   heading: "Education",
  //   items: [
  //     { icon: "/assets/Graduation-Cap.svg", date: "2022 - Present", title: "Academic Degree", text: "Lorem ipsum dolor sit amet." },
  //   ],
  // },
];

export const services = [
  { icon: "/assets/HTML 5-logo.svg", title: "PSD to HTML", text: "I will turn your design into a fully responsive HTML web template." },
  { icon: "/assets/worldpress.svg", title: "PSD to WordPress", text: "I will convert your design into a fully responsive WordPress theme." },
  { icon: "/assets/browser (2).svg", title: "Landing Pages", text: "I will build a fast, responsive landing page for your product or event." },
  { icon: "/assets/Figma.svg", title: "Figma Design", text: "I will design a Figma web template or mobile app, fully responsive." },
  { icon: "/assets/worldpress.svg", title: "Figma to WordPress", text: "I will convert your Figma design into a fully responsive WordPress theme." },
  { icon: "/assets/code.svg", title: "Frontend Development", text: "I will build interactive, accessible interfaces with HTML, CSS and JavaScript." },
];

export const works = [
  { tag: "Marketing", name: "Cloudtop G", url: "https://cloudtopg11.netlify.app", image: "/images/cloud-topG.png" },
  { tag: "E-commerce", name: "Furniro", url: "https://furniture-e-commerce01.netlify.app", image: "/images/Furniture E-commerce.png" },
  { tag: "Event", name: "DevHorizon_26", url: "https://tech-conference1.netlify.app", image: "/images/tech conference.png" },
];

export const reviews = [
  {
    name: "Busayo Omotuka",
    role: "Founder, Dev4gold Learning",
    quote: "Great communication and delivered ahead of schedule. The site looks fantastic on every device,👍",
  },
];

export const brands = [
  { name: "HTML5", icon: "/assets/html.svg" },
  { name: "CSS3", icon: "/assets/css.svg" },
  { name: "JavaScript", icon: "/assets/javaScript.svg" },
  { name: "Bootstrap", icon: "/assets/bootstrap.svg" },
  { name: "WordPress", icon: "/assets/WordPress_blue.svg" },
  { name: "Tailwind CSS", icon: "/assets/Tailwind_CSS.svg" },
];

// Not shown right now (your Latest Posts section was commented out). See App.jsx.
export const posts = [
  { image: "/assets/posts/post-1.svg", title: "5 Best App Development Tool for Your Project", date: "2026-02-09", dateLabel: "09 February, 2026", author: "Victor", href: "#" },
  { image: "/assets/posts/post-2.svg", title: "5 Best App Development Tool for Your Project", date: "2026-02-09", dateLabel: "09 February, 2026", author: "Victor", href: "#" },
  { image: "/assets/posts/post-3.svg", title: "5 Best App Development Tool for Your Project", date: "2026-02-09", dateLabel: "09 February, 2026", author: "Victor", href: "#" },
];
