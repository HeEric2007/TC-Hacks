// All the site's copy lives here so it's easy to update without touching layout code.

export const site = {
  name: "TC Hacks",
  tagline: "The student hackathon for the Twin Cities",
  contactEmail: "[contact email]",
  instagram: "#",
  linkedin: "#",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/faq", label: "FAQ" },
];

export const heroFacts = ["Date: TBD", "Minneapolis, MN", "Free to attend", "Open to all college students"];

export const whatWeDo = [
  {
    title: "Hackathon",
    short: "A 24-hour event where teams build a project from scratch and present it to industry judges.",
    long: "Our annual 24-hour event. Teams of up to four build a project from scratch, attend workshops, work with mentors and present to judges from Minnesota companies. Open to college students from any school.",
  },
  {
    title: "Networking",
    short: "Speed networking sessions with recruiters from Minnesota companies.",
    long: "Short, structured conversations with recruiters and engineers, so students can meet several companies in one evening.",
  },
  {
    title: "Resume reviews",
    short: "One-on-one feedback from people who hire for technical roles.",
    long: "One-on-one feedback from people who hire for internships and technical roles.",
  },
  {
    title: "Build nights",
    short: "Workshops and open sessions to learn new tools and work on projects.",
    long: "Hands-on sessions to learn new tools, plus open evenings to work on side projects with other students.",
  },
];

export const flagship = {
  name: "TC Hacks hackathon",
  summary:
    "A 24-hour hackathon where teams of up to four build a project from scratch, attend workshops, work with mentors and present to judges from Minnesota companies.",
  facts: [
    { label: "When", value: "Once a year" },
    { label: "Where", value: "UMN Twin Cities campus" },
    { label: "Who", value: "Any college student" },
    { label: "Cost", value: "Free" },
  ],
};

export const recurringEvents = [
  {
    frequency: "Every two weeks",
    title: "Build nights",
    description:
      "Bring a laptop and work on side projects alongside other students. Good for finding future hackathon teammates.",
  },
  {
    frequency: "Monthly",
    title: "Workshops",
    description: "Hands-on sessions on practical skills like Git, web development, APIs and AI tools.",
  },
  {
    frequency: "Monthly",
    title: "Tech talks",
    description: "Engineers, founders and alumni share what they work on and how they got there.",
  },
  {
    frequency: "Each semester",
    title: "Speed networking",
    description: "Meet recruiters and engineers from several Minnesota companies in one evening.",
  },
  {
    frequency: "Each semester",
    title: "Resume reviews",
    description: "One-on-one feedback from industry professionals, timed before career fair season.",
  },
  {
    frequency: "Each semester",
    title: "Interview prep",
    description: "Practice technical and behavioral interviews in pairs, with tips from people who conduct them.",
  },
  {
    frequency: "Each semester",
    title: "Company visits",
    description: "Tour the offices of partner companies and see what working in Twin Cities tech looks like.",
  },
  {
    frequency: "Each semester",
    title: "Demo night",
    description: "Students show off what they've been building. Short demos, friendly crowd.",
  },
];

// Add a LinkedIn photo by saving it to public/team/<file> (square, 400x400 works well)
// and setting `image: "/team/<file>"`.
export const team: { name: string; founder?: boolean; image?: string }[] = [
  { name: "Eric He", founder: true },
  { name: "Ravindu Ranasinghe", founder: true },
  { name: "[Name]" },
];
export const openSeats = 2;

export const sponsorPerks = [
  { title: "Resume book", description: "Access resumes from participants who opt in, organized for easy review." },
  { title: "Event branding", description: "Your logo on our website, event shirts and on-site signage." },
  { title: "Company challenges", description: "Sponsor a prize track built around a problem your team cares about." },
  { title: "Workshops", description: "Lead a session on your tools, APIs or technical practices." },
  { title: "Mentors and judges", description: "Send engineers to guide teams and evaluate final projects." },
  { title: "On-site recruiting", description: "Meet students in person at our hackathon and networking events." },
];

export const faqs: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: "What is TC Hacks?",
    a: "TC Hacks is a student organization at the University of Minnesota. We run the Twin Cities' flagship student hackathon and host networking events, resume reviews and build nights throughout the year.",
  },
  {
    q: "What is a hackathon?",
    a: "A hackathon is an event where teams build a project from start to finish in a short amount of time. At TC Hacks, teams of up to four have 24 hours to create an app, website, hardware project or anything else, then present it to judges.",
  },
  {
    q: "Who can attend?",
    a: "Any current college or university student, from any school and any major. Students traveling from outside Minnesota are welcome.",
  },
  {
    q: "Do I need coding experience?",
    a: "No prior experience is required. TC Hacks is beginner-friendly, with workshops and mentors to help you get started. Some familiarity with programming is helpful, and teams also benefit from designers and people with strong ideas.",
  },
  {
    q: "Do I need a team?",
    a: "No. You can register with a team of up to four, or come on your own and find teammates at the event.",
  },
  { q: "How much does it cost?", a: "Nothing. All TC Hacks events are free for students, thanks to our partners." },
  { q: "Will food be provided?", a: "Yes. Meals and snacks are provided throughout the hackathon." },
  {
    q: "When and where is the hackathon?",
    a: "On the University of Minnesota Twin Cities campus. The date will be announced soon; subscribe on our home page to be notified.",
  },
  {
    q: "How can my company get involved?",
    a: "Companies can sponsor prizes, host workshops, send mentors and judges, or recruit on site.",
    link: { href: "/sponsor", label: "Visit our Sponsor page" },
  },
  {
    q: "How can I join the TC Hacks team?",
    a: "We're looking for students interested in marketing and design, or sponsorships and finance.",
    link: { href: "/about", label: "See our About page" },
  },
];
