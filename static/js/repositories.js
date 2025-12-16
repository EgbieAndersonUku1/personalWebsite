const repositories = [];

function addToRepository(repository) {
    repository.indexed = repositories.length - 1;
    repositories.push(repository);
    repository = {};

}

const listOfRepositories = [

 {
  name: "Django 2FA Recovery Codes",
  description: "A Django app for generating, managing, and validating one-time use recovery codes as a backup for two-factor authentication (2FA). Users are given a set of secure recovery codes that can be used if they lose access to their primary 2FA method. Each code is invalidated after use to ensure better security.",
  languages: ["Python", "Django", "HTML", "CSS"],
  gitLink: "https://github.com/EgbieAndersonUku1/django_2fa_recovery_codes",
  image: "static/img/jpg/django-2fa-recovery.jpg",
  hasWebsite: false,
  websiteUrl: "",
  dateCreated: "2025-09-23",
  indexed: "",
  projectStatus: "Completed",
  tags: [
    "django",
    "2fa",
    "recovery codes",
    "security",
    "authentication",
    "backup",
    "one-time use",
    "django app",
    "TOTP"
  ]
},


 {
  name: "Django Email Sender",
  description: "A clean, reusable, lightweight and chainable utility for sending emails in Django. Supports HTML and plain-text templates, context injection, and optional logging or database integration for tracking email delivery. It uses a fluent API so templated emails can be composed and sent with minimal boilerplate.",
  languages: ["Python", "Django", "HTML", "Text", "CSS"],
  gitLink: "https://github.com/EgbieAndersonUku1/django-email-sender",
  image: "static/img/png/django-email-sender.png",
  hasWebsite: true,
  websiteUrl: "https://pypi.org/project/django-email-sender/",
  dateCreated: "2025-04-23",
  indexed: "",
  projectStatus: "Completed",
  tags: [
    "django",
    "email",
    "python",
    "templating",
    "chainable api",
    "logging",
    "delivery tracking",
    "lightweight",
    "utility",
    "reusable",
    "html email",
    "plain text email",
    "context injection",
    "open source",
  ]
},



 {
  name: "Human seconds",
  description: "Convert seconds into clean, human-readable time strings in Python.",
  languages: ["Python"],
  gitLink: "https://github.com/EgbieAndersonUku1/django_2fa_recovery_codes",
  image: "static/img/png/human-seconds.png",
  hasWebsite: true,
  websiteUrl: "https://pypi.org/project/human-seconds/",
  dateCreated: "2025-12-14",
  indexed: "",
  projectStatus: "Completed",
  tags: [
    "Python",
    "Time Conversion",
    "Utilities",
    "Human-Readable",
    "Python Library",
    "Developer Tools",
    "DateTime",
    "Formatting",
    "Productivity",
    "Open Source"
    ]

},


    {
    name: 'Portfolio',
    description: "My portfolio serves as a comprehensive showcase of all my GitHub projects. It provides a curated collection of my work, spanning various domains and demonstrating my skills and expertise in software development as well as the different programming language. Visitors can explore my projects to gain insight into my capabilities and contributions.",
    languages: ['JavaScript', 'HTML', 'CSS', 'Node JS'],
    gitLink: '',
    image: 'static/img/png/portfolio.png',
    hasWebsite: true,
    websiteUrl: 'https://egbieandersonuku1.github.io/personalWebsite/',
    dateCreated: '2024-05-03',
    indexed: "",
    projectStatus: "InProgress",
    tags: [
        "portfolio",
        "comprehensive showcase",
        "GitHub projects",
        "curated collection",
        "work",
        "domains",
        "skills",
        "expertise",
        "frontEnd",
        "software development",
        "programming language",
        "projects",
        "capabilities",
        "contributions"
    ]
    
}, {
    name: 'Database Challenge',
    description: "Practise using the SQLite database to persist information for an Express app",
    languages: ['SQlite', 'Node JS', "Express", "JS"],
    gitLink: 'https://github.com/EgbieAndersonUku1/database-challenge',
    image: 'static/img/jpg/sqlite.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2024-05-08',
    indexed: "",
    projectStatus: "InProgress",
    tags: [
        "Databases",
        "Sqlite",
        "Challenge",
        "Persistance",
        "app"
    ]
    
}, {
    name: 'Fruit and veg store',
    description: "An online store for fresh fruits, vegetables, and more. This project aims to provide a user-friendly shopping experience with features like product categories, search functionality, user accounts, and a responsive design",
    languages: ['HTML', 'CSS'],
    gitLink: 'https://github.com/EgbieAndersonUku1/fruit-and-veg-store',
    image: 'static/img/jpg/fruit-n-veg.jpeg',
    hasWebsite: true,
    websiteUrl: 'https://egbieandersonuku1.github.io/fruit-and-veg-store/',
    dateCreated: '2024-05-17',
    indexed: "",
    projectStatus: "InProgress",
    tags: [
        "Online",
        "Fruit",
        "Vegetables",
        "organic",
        "fresh"
    ]
    
}, {
    name: 'Cryptography',
    description: "This project aims to implement various classical ciphers and modern cryptographic techniques using Python and JavaScript. Each cipher will be implemented both as a class-based and function-based solution.",
    languages: ['Python', 'JS', 'Node JS'],
    gitLink: 'https://github.com/EgbieAndersonUku1/cryptography',
    image: 'static/img/jpg/crypto.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2024-05-15',
    indexed: "",
    projectStatus: "InProgress",
    tags: [
        "Cryptography",
        "cipher",
        "ceaser",
        "affine",
        "RSA",
        "reverse",
        "encryption",
        "decryption"
    ]
    

}, {
    name: 'Adorable cats',
    description: "A user-friendly webpage for viewing and adorable ats. Browse through a variety of cats, express your interest by liking them, and enjoy an interactive experience. ",
    languages: ['HTML', 'CSS', 'JS', 'Node JS'],
    gitLink: 'https://github.com/EgbieAndersonUku1/cuteCats',
    image: 'static/img/jpg/cute-cats.jpeg',
    hasWebsite: true,
    websiteUrl: 'https://egbieandersonuku1.github.io/cuteCats/',
    dateCreated: '2024-05-18',
    indexed: "",
    projectStatus: "InProgress",
    tags: [
       "cats",
       "cute",
       "cute cats",
       "animals",
       "frontend",
    ]
    
}, {
    name: 'Food restuarant',
    description: "This repository presents the development of a responsive restaurant website, crafted using HTML, CSS, JavaScript, and Node.js. Features include a dynamic menu, seamless booking system, captivating homepage, and convenient contact page.",
    languages: ['JavaScript', 'HTML', 'CSS', 'Node JS'],
    gitLink: 'https://github.com/blackNoir2/food-restuarant',
    image: 'static/img/png/resturant.png',
    hasWebsite: true,
    websiteUrl: 'https://blacknoir2.github.io/food-restuarant/',
    dateCreated: '2024-03-28',
    indexed: "",
    projectStatus: "Completed",
    tags: ["customer notifications",
        "drinks",
        "food",
        "frontend",
        "menu",
        "online",
        "order",
        "restaurant website",
        "responsive design",
        "reviews",
        "table booking"
    ]

}, {
    name: 'Meetup clone',
    description: "This is a Meetup clone that attempts to replicate the original meetup a web application designed to facilitate organizing and attending events within communities. This clone has none of the functionality of the original like allowing users to create, browse, and join events based on their interests and location. This clone only aims to replicate visual aspect of the popular Meetup platform not the core functionality.",
    languages: ['HTML', 'CSS', 'JS', 'Node JS'],
    gitLink: 'https://github.com/blackNoir2/meetupClone',
    image: 'static/img/png/meetup-clone.png',
    hasWebsite: true,
    websiteUrl: 'https://blacknoir2.github.io/meetupClone/',
    dateCreated: '2024-03-08',
    indexed: "",
    projectStatus: "Completed",
    tags:[
        "Meetup clone",
        "replicate",
        "web application",
        "organizing",
        "attending events",
        "communities",
        "functionality",
        "frontend",
        "original",
        "create",
        "browse",
        "join events",
        "interests",
        "location",
        "visual aspect",
        "popular Meetup platform",
        "core functionality",
        "frontend",
    ]
    

}, {
    name: 'Quantum Innovation Agency website',
    description: "This agency website showcases an 'About', 'Meet the team' section, providing insights into the agency's mission, values, and team members. It also features a 'Testimonials' page, highlighting client feedback and success stories. Additionally, there's a 'Contacts' page offering various means of communication for potential clients and partners as well as allowing the user to get a quote",
    languages: ['HTML', 'CSS', 'JS', 'Node JS'],
    gitLink: 'https://github.com/fac30/WebCyberAgency-Project-Kieran-Egbie',
    image: 'static/img/png/agency-website.png',
    hasWebsite: true,
    websiteUrl: 'https://fac30.github.io/WebCyberAgency-Project-Kieran-Egbie/',
    dateCreated: '2024-01-24',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "About",
        "About section",
        "Agency",
        "Agency website",
        "Call to action",
        "Client feedback",
        "Contact",
        "Frontend",
        "Contacts page",
        "Meet the team",
        "Mission statement",
        "Quote",
        "Quote request",
        "Success stories",
        "Team members",
        "Testimonials page",
        "Values",
        "frontend"
    ]
    
}, {
    name: 'Chatgpt Clone',
    description: "A ChatGPT clone designed to emulate the acclaimed conversational prowess of OpenAI's technology. Users can seamlessly engage in dialogue, asking questions and receiving insightful response as well as seen their entire chat history",
    languages: ['HTML', 'CSS', 'JS', 'Node JS', 'Fetch API', 'API'],
    gitLink: 'https://github.com/blackNoir2/front-end-chatgpt-clone',
    image: 'static/img/png/chatgpt.png',
    hasWebsite: true,
    websiteUrl: 'https://blacknoir2.github.io/front-end-chatgpt-clone/',
    dateCreated: '2024-01-31',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "AI",
        "API",
        "Chat history",
        "ChatGPT",
        "ChatGPT clone",
        "Conversational AI",
        "Clone",
        "Dialogue simulation",
        "Frontend",
        "Insightful responses",
        "Node JS",
        "Question",
        "Question answering",
        "QA",
    ]
    
}, {
    name: 'Movie App',
    description: "The Movie App is a web application that operates a little like IMBD but except on a much smaller scale. The application allows the user to add a movie, series, etc to the application along with the title, description, cast, rating, length of the movie and the year it was made. Once added the user of the application can view the movie or delete the movie. The site also has a simple authentication",
    languages: ['HTML', 'CSS', 'JS', 'Node JS'],
    gitLink: 'https://github.com/blackNoir2/EUMovieDatabase',
    image: 'static/img/png/movie-app.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2023-06-13',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Adding movies",
        "Authentication",
        "Cast",
        "Deleting movies",
        "Description",
        "Frontend",
        "IMDb alternative",
        "Length",
        "Login",
        "Movie App",
        "Node",
        "Node JS",
        "Rating",
        "Release year",
        "Register",
        "Registration",
        "Simple authentication",
        "Title",
        "Viewing movies",
        "Web application"
    ]
    
}, {
    name: 'Dogstram',
    description: "Dogstagram, a static website project showcasing a replication of the Instagram frontend with a focus on our furry friends. ",
    languages: ['HTML', 'CSS', 'Node JS'],
    gitLink: 'https://github.com/blackNoir2/dogstram',
    image: 'static/img/jpg/dogs.jpeg',
    hasWebsite: true,
    websiteUrl: 'https://blacknoir2.github.io/dogstram/',
    dateCreated: '2024-01-06',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "cute",
        "Dogstagram",
        "dogs",
        "frontend",
        "Furry friends",
        "furry",
        "Instagram lookalike",
        "Node JS",
        "Replication project",
        "Replication",
        "Static website",
        "static"
    ]
    
}, {
    name: 'Rock Paper and Scissor',
    description: "This is a simple implementation of the classic Rock Paper Scissors game in JavaScript. The game allows users to play against a computer or another player. Players can choose between rock, paper, or scissors, and the winner is determined based on the rules of the game.",
    languages: ['HTML', 'CSS', 'JS', 'Node JS'],
    gitLink: 'https://github.com/blackNoir2/rockPaperScissor',
    image: 'static/img/jpg/rock-paper-scissor.jpg',
    hasWebsite: true,
    websiteUrl: 'https://starlit-druid-c20ade.netlify.app/',
    dateCreated: '2023-08-23',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "frontend",
        "game",
        "computer",
        "Interactive gameplay",
        "JavaScript implementation",
        "Multiplayer mode",
        "node js",
        "Paper",
        "Player vs computer",
        "Player vs player",
        "Rock",
        "Rock Paper Scissors game",
        "scissors",
        "Single player mode",
        "single player"
    ]
    
}, {
    name: 'Food market Vendor App',
    description: "FoodMarketVendor Website: A Django-based project for food vendors to manage menus, orders, and interactions with customers.",
    languages: ['Django', 'Python', 'Python 3.12.3', 'HTML', 'CSS', 'Node JS'],
    gitLink: 'https://github.com/EgbieAndersonUku1/foodResturantVendor',
    image: 'static/img/png/food.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2024-05-06',
    indexed: "",
    projectStatus: "InProgress",
    tags: [
        "FoodMarketVendor Website",
        "Django-based project",
        "food vendors",
        "manage menus",
        "orders",
        "interactions",
        "customers",
        "backend",
        "frontend",
        "fullstack",
        "vendors",
        "vendor",
    ]
    
    
}, {
    name: 'Hobby Site',
    description: "A simple site displaying my personal hobbies",
    languages: ['HTML', 'CSS', 'JS', 'Node JS'],
    gitLink: 'https://github.com/blackNoir2/hobbySite',
    image: 'static/img/png/hobbies.png',
    hasWebsite: true,
    websiteUrl: 'https://blacknoir2.github.io/hobbySite/',
    dateCreated: '2023-03-26',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "about me",
        "frontend",
        "fun",
        "hobbies",
        "hobby",
        "Hobby showcase",
        "interests",
        "personal",
        "Personal hobbies",
        "Node JS",
        "simple",
        "showcase",
    ]
    
}, {
    name: 'CleverMovies',
    description: "CleverMovies is a dynamic web application that fetches movie and TV series data from an external API and provides a personalized experience for users. With CleverMovies, you can browse through a vast collection of titles, search for specific movies or TV series, and even track your favourites. The website has also has a login and registration page for authentication along with a custom cache",
    languages: ['HTML', 'CSS', 'JS', 'Node JS', 'Express', 'Fetch API', 'API'],
    gitLink: 'https://github.com/fac30/api-project--egbie-ollie',
    image: 'static/img/png/movie-api.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2024-03-27',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "API",
        "clever",
        "CleverMovies",
        "dynamic",
        "web application",
        "fetches",
        "movie",
        "TV series",
        "external API",
        "users",
        "browse",
        "collection",
        "titles",
        "search",
        "specific",
        "track",
        "favourites",
        "website",
        "login",
        "registration page",
        "authentication",
        "custom cache"
    ]
    
    
}, {
    name: 'DiscordBot',
    description: "A versatile Discord bot, adept at managing various server tasks like sending direct messages, moderating, and more. Empowered by OpenAI's natural language processing, it facilitates seamless interaction, allowing users to inquire and receive responses effortlessly. In addition, it also announces when a user joins or leaves the server, monitors foul language and acts accordingly in order to foster a friendly environment",
    languages: ['HTML', 'CSS', 'JS', 'Node JS', 'Fetch API', 'OpenAPI', 'API', 'Discordjs', 'Sinon'],
    gitLink: '',
    image: 'static/img/icons/svg/bot.svg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2024-03-27',
    indexed: "",
    projectStatus: "Completed",
    tags:[
        "API",
        "Backend",
        "Discord bot",
        "Bot development",
        "Discord bot programming",
        "Discord bot management",
        "Bot moderation",
        "Direct messaging bot",
        "Natural language processing bot",
        "Server interaction bot",
        "Server management bot",
        "Discord bot API",
        "Bot integration with Discord",
        "Bot scripting for Discord",
        "Bot"
    ]
    
    
    
}, {
    name: 'Superstore',
    description: "This is a website store simulation I developed, offering users the ability to replicate the functionality of any online web store. Users can browse, add items to their basket, update or delete basket items, and checkout with chosen payment methods. Admin privileges are required to manage the store's database, facilitated through an accessible admin dashboard showcasing crucial metrics like item stock and customer orders. Note: This is a demonstration store, with no real monetary transactions. Product images sourced from Topshop and NeXT website",
    languages: ['Python 3.6', 'Flask', 'Bootstrap', 'Sqlite3', 'SQLAlchemy', 'HTML', 'CSS', 'ORM'],
    gitLink: 'https://github.com/EgbieAndersonUku1/MyStore',
    image: 'static/img/jpg/store.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2020-02-26',
    indexed: "",
    projectStatus: "Completed",
    tags:[
        "website store simulation",
        "developed",
        "replicate functionality",
        "online web store",
        "browse",
        "add items",
        "basket",
        "update",
        "delete basket items",
        "checkout",
        "payment methods",
        "Admin privileges",
        "manage store's database",
        "admin dashboard",
        "crucial metrics",
        "item stock",
        "customer orders",
        "demonstration store",
        "real monetary transactions",
        "Product images",
        "sourced",
        "Topshop",
        "NeXT website",
        "ORM"
    ]
    
    
}, {
    name: 'Virtual vending maching',
    description: "A Python-based Command Line Interface (CLI) for a virtual vending machine. It efficiently tracks stock items including 'Item ID', 'Price', 'Quantity', and 'Item Name'. Additionally, the vending machine provides transaction receipts and offers distinct menus for both employees and students",
    languages: ['Python 3.6', 'Python'],
    gitLink: 'https://github.com/EgbieAndersonUku1/vendingMachine',
    image: 'static/img/jpg/vending-machine.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2021-06-18',
    indexed: "",
    projectStatus: "Completed",
    tags: ["CLI",
           "command",
           "command line interface",
            "Distinct",    
            "Employee",    
            "ID",    
            "Interface",   
            "Item",    
            "machine",
            "menu",
            "Name",  
            "receipt",
            "receipts",
             "stock",
             "Price",    
             "Quantity",    
             "Student",
             "track",    
             "Vending",
             "virtual",
             "Transaction"
            ]

    
}, {
    name: 'Job Journal Tracker',
    description: "JobJournalTracker is a comprehensive web-based application I developed, designed for freelancers, job seekers, contractors, and more. It streamlines job tracking, allowing users to effortlessly add, modify, view, or delete job entries. By consolidating job applications, interviews, and employer responses into one accessible platform, it simplifies the job search process, akin to using a password manager for multiple accounts.",
    languages: ['Python 3.6', 'Flask', 'Flask-SQLAlchemy', 'HTML', 'CSS', 'Python', 'ORM'],
    gitLink: 'https://github.com/EgbieAndersonUku1/journal_tracker',
    image: 'static/img/png/job-tracker.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2021-01-16',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Accessible platform",
        "Adding job entries",
        "Backend",
        "Contractors",
        "Deleting job entries",
        "Employer responses",
        "Freelancers",
        "Frontend",
        "Job seekers",
        "Job tracking",
        "JobJournalTracker",
        "Modifying job entries",
        "Web-based application",
        "backend",
        "frontend",
        "Consolidating job applications",
        "Interview tracking",
        "Job seekers",
        "jobseekers",
        "Adding job entries",
        "Employers",
        "frontend",
        "interview",
        "Job tracking",
        "job",
        "job",
        "login",
        "platform",
        "registration",
        "Simplified job search",
        "Viewing job entries",
        "ORM",
    ]
    
}, {
    name: 'Blogger Application',
    description: "A robust blogging application complete with authentication features like registration and login. Users can create posts, define categories, and enjoy all the essential features expected from a modern blog platform",
    languages: ['Python 3.6', 'Flask', 'Flask-SQLAlchemy', 'HTML', 'CSS', 'Python', 'ORM'],
    gitLink: 'https://github.com/EgbieAndersonUku1/blogger',
    image: 'static/img/png/blogger.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2019-07-16',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Authentication features",
        "backend",
        "Blogging application",
        "blogging",
        "comments",
        "Creating posts",
        "Defining categories",
        "Essential features",
        "frontend",
        "Login",
        "Modern blog platform",
        "posts",
        "Registration",
        "authentication",
        "ORM"
    ]
    
}, {
    name: 'Social Network Application',
    description: "This is a social network application. It allows the user to create a profile, login, edit their profile, adding profile images, add friends, block users, post or delete messages, change or reset passwords and much much more.",
    languages: ['Python 3.6', 'Flask', 'Flask-SQLAlchemy', 'HTML', 'CSS', 'Python', 'ORM'],
    gitLink: 'https://github.com/EgbieAndersonUku1/blogger',
    image: 'static/img/png/social-network.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2019-04-21',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Adding friends",
        "backend",
        "Blocking users",
        "communication",
        "Deleting messages",
        "frontend",
        "friends",
        "Login",
        "messages",
        "network",
        "Password management",
        "Posting messages",
        "Profile creation",
        "Profile editing",
        "Profile images",
        "registration",
        "social",
        "Social network",
        "Social network application",
        "ORM"
    ]
    
}, {
    name: 'Forum',
    description: "A user-friendly thread platform featuring authentication functionalities such as registration, login, and password management. Users can create threads and engage in discussions by posting replies, fostering interactive communication within the platform",
    languages: ['Python 3.6', 'Flask', 'Flask-SQLAlchemy', 'HTML', 'CSS', 'python', 'ORM'],
    gitLink: 'https://github.com/EgbieAndersonUku1/forum',
    image: 'static/img/png/forum.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2020-02-07',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "authentication",
        "Authentication functionalities",
        "backend",
        "Creating threads",
        "Engaging in discussions",
        "forum",
        "forums",
        "frontend",
        "Interactive communication",
        "Login",
        "Password management",
        "Posting replies",
        "replies",
        "Registration",
        "Thread platform",
        "threads",
        "UI",
        "User-friendly interface",
        "ORM"
    ]
    
}, {
    name: 'Linux Based File Encryptor',
    description: "A Linux-based command-line interface (CLI) program capable of encrypting and decrypting files. This tool enhances file security by providing encryption functionality directly from the command line, offering users a seamless solution for protecting their data",
    languages: ['Python'],
    gitLink: 'https://github.com/EgbieAndersonUku1/linux_file_encryptor',
    image: 'static/img/png/encryptor.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2014-11-08',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "cli",
        "Command line interface",
        "Data protection",
        "decryption",
        "Encryption functionality",
        "encryption",
        "Enhanced file security",
        "File decryption",
        "file",
        "File encryption",
        "linux",
        "Linux-based CLI program",
        "Seamless solution"
    ]
    
}, {
    name: 'Bill/Flatmate Calculator',
    description: "A simple application that calculates each flatmate's share of the bill based on the number of days they stayed in the house for a given month. This tool simplifies expense management by accurately dividing costs among occupants, promoting fairness and transparency in shared living arrangements and then writes them to a PDF file",
    languages: ['Python'],
    gitLink: 'https://github.com/EgbieAndersonUku1/flatMates',
    image: 'static/img/png/bills.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2014-11-08',
    indexed: "",
    tags: [
        "Accurate cost division",
        "calculation",
        "cli",
        "Daily stay calculation",
        "Expense calculation application",
        "expenses",
        "Fairness promotion",
        "Flatmate bill splitting",
        "generation",
        "pdf",
        "PDF file generation",
        "Transparency promotion"
    ]
    
}, {
    name: 'Web scrapper',
    description: "BooksToScrapePage is a Python 3+ scraper tool designed to extract data from the (http://books.toscrape.com/) website. It retrieves the menu category and details of books from the first page, including title, UPC, price, image, tax, and more. This convenient tool enables users to practice web scraping in any programming language",
    languages: ['Python', 'BeautifulSoup', 'Python 3.5'],
    gitLink: 'https://github.com/EgbieAndersonUku1/web_book_scrapper',
    image: 'static/img/png/web-scrapper.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2020-09-01',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Books",
        "Book details extraction",
        "Convenient tool",
        "Data extraction",
        "Image",
        "Menu category retrieval",
        "Page",
        "Price",
        "Practice web scraping",
        "scraper",
        "scraper tool",
        "scraping",
        "Title",
        "Tax",
        "tool",
        "UPC",
        "Web scraping",
        "books"
    ]
    
}, {
    name: 'Simple dictionary',
    description: "A simple straightforward dictionary app using where users can input any word and instantly view its meaning. This minimalistic yet functional application provides a seamless experience for exploring word definitions.",
    languages: ['Python', 'Python 3.5', 'Flask', 'HTML', 'CSS', 'Bootstrap'],
    gitLink: 'https://github.com/EgbieAndersonUku1/simple_dictionary',
    image: 'static/img/jpg/dictionary.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2020-03-30',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "simple",
        "straightforward",
        "dictionary app",
        "users",
        "input",
        "word",
        "meaning",
        "minimalistic",
        "functional application",
        "seamless experience",
        "exploring",
        "word definitions"
    ]
    
}, {
    name: 'Pwitter',
    description: "A website store that mirrors some of Twitter's features. Users can post, edit, and delete tweets, as well as follow and unfollow other users. Once signed up, they can view tweets from users they follow, creating a dynamic and interactive platform reminiscent of Twitter's functionality",
    languages: ['Python', 'Python 3.5', 'Flask', 'SQLAlchemy', 'HTML', 'CSS', 'Bootstrap', 'ORM'],
    gitLink: 'https://github.com/EgbieAndersonUku1/pwitter',
    image: 'static/img/png/twitter.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2020-03-21',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "backend",
        "clone",
        "delete",
        "followers",
        "following",
        "frontend",
        "friendly",
        "login",
        "platform",
        "posting",
        "registration",
        "tweet",
        "twitter",
        "unfollow",
        "ORM"
    ]
    },


 {
    name: 'Solve User Questions with Answers',
    description: "This project is a website enabling users to ask questions to a panel of experts post-registration. Users can direct questions to specific experts, who can then log in to view and respond. The platform includes three main account types: Admin, Expert, and Regular User, each with distinct privileges and capabilities. Admins have additional privileges, such as creating and managing user accounts, viewing user details, and deactivating/reactivating accounts. Experts can only answer questions directed at them, while Regular Users can ask questions and select experts to answer them. All account types can change their passwords for security purposes",
    languages: ['Python', 'Python 3.5', 'Flask', 'Sqlite3', 'HTML', 'CSS', 'Bootstrap'],
    gitLink: 'https://github.com/EgbieAndersonUku1/SolveUserQuestionsAnswers',
    image: 'static/img/jpg/QA.jpg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2020-01-28',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "admin",
        "Admin privileges",
        "answers",
        "backend",
        "Directed questions",
        "Expert privileges",
        "experts",
        "frontend",
        "login",
        "password",
        "Password management",
        "panel",
        "privileges",
        "QA",
        "Question and answer website",
        "questions",
        "registration",
        "Security features",
        "user",
        "User account management"
    ]
    
},



 {
    name: 'BlockChain',
    description: "A simple blockchain from scratch, complete with a sleek GUI built using Flask. This blockchain will encompass all typical blockchain functionalities, such as connecting to nodes, mining blocks, receiving rewards, and conducting transactions. Through this endeavor, I aim to demonstrate the core principles and capabilities of blockchain technology",
    languages: ['Python', 'Python 3.5', 'Flask', 'HTML', 'CSS', 'Bootstrap'],
    gitLink: 'https://github.com/EgbieAndersonUku1/BlockChain',
    image: 'static/img/jpg/blockchain.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2019-03-07',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "backend",
        "Block mining",
        "Block rewards",
        "blockchain",
        "Blockchain functionalities",
        "Blockchain technology demonstration",
        "Core principles",
        "Flask framework",
        "frontend",
        "GUI",
        "mining",
        "rewards",
        "Simple blockchain implementation",
        "Sleek GUI",
        "transaction",
        "transactions",
        "Transaction processing",
        "UI"
    ]
    
},


 {
    name: 'Candidate Skill Selector',
    description: "A minimalist web page utilizing JavaScript, HTML, and CSS, empowering users to select candidates based on their skills. This intuitive interface provides a seamless experience for evaluating and filtering candidates according to specific skill sets",
    languages: ['HTML', 'CSS', 'JS'],
    gitLink: 'https://github.com/EgbieAndersonUku1/candidate_skill_selector',
    image: 'static/img/jpg/skills.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2019-02-05',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Candidate",
        "Candidate selection",
        "Filtering candidates",
        "frontend",
        "Intuitive interface",
        "Seamless experience",
        "Skill-based evaluation",
        "skills",
        "Specific skill sets"
    ]
    
},


 {
    name: 'Amazon Buyer Automation tester',
    description: "An automation program written in Python specifically tailored for Amazon tasks. The program navigates to the Amazon website and executes various actions, including adding specific books to the basket, saving one for later, deleting another, adjusting quantities, marking orders as gifts, and removing items from the basket. This streamlined tool enhances efficiency in managing Amazon orders and preferences",
    languages: ['Python', 'Behave', 'Selenium', 'Chrome'],
    gitLink: 'https://github.com/EgbieAndersonUku1/AmazonBuyingFramework',
    image: 'static/img/png/automation.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2019-01-19',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "add",
        "Amazon",
        "Amazon tasks automation",
        "automation",
        "delete",
        "automation program",
        "quantity",
        "task",
        "tasks",
        "test",
        "tester",
        "Web navigation",
        "web based"
    ]
    
    
},

 {
    name: 'World Best App Test',
    description: "A technical test where I implemented a series of automation tests to evaluate a provided website. These tests covered various functionalities and scenarios to ensure the website's robustness and reliability. By meticulously designing and executing these tests, I demonstrated my proficiency in automated testing and thoroughness in ensuring software quality.",
    languages: ['Python', 'Behave', 'Selenium', 'Chrome', 'Gherkins'],
    gitLink: 'https://github.com/EgbieAndersonUku1/worldBestApp',
    image: 'static/img/jpg/testing.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2018-08-20',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Automated testing",
        "Automation tests",
        "backend language",
        "coverage",
        "evaluation",
        "Functionalities coverage",
        "GUI",
        "Reliability",
        "Robustness",
        "Scenario coverage",
        "Software quality assurance",
        "technical",
        "Technical test",
        "Test design",
        "Test execution",
        "UI",
        "Website"
    ]
    
},


 {
    name: 'MaCChanger',
    description: "MaCChanger is a command-line program designed to enable users to change their current MAC address to their desired MAC address. While primarily intended for command-line use, users have the flexibility to utilize the program in any manner they see fit",
    languages: ['Python'],
    gitLink: 'https://github.com/EgbieAndersonUku1/tools',
    image: 'static/img/jpg/macchanger.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2018-08-20',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Address changing tool",
        "CLI",
        "Command-line program",
        "Command-line use",
        "Custom MAC address",
        "Flexibility",
        "MAC address manipulation",
        "MaCChanger"
    ]
    
},


 {
    name: 'Price alerter',
    description: "Price Alerter is an online web-based application enabling users to track prices of items from various online stores. Users can create store profiles and specify items to monitor. The app notifies users via email of any price changes for the tracked items. Predefined stores include Ebay, Amazon, and Game, offering users flexibility in tracking their desired products",
    languages: ['Python', 'Python 3.6', 'MongoEngine', 'Mailgun API', 'Flask', 'HTML', 'CSS'],
    gitLink: 'https://github.com/EgbieAndersonUku1/price_alerter_app',
    image: 'static/img/png/price-alert.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2018-04-18',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Alert",
        "Amazon",
        "API",
        "Ebay",
        "Email notifications",
        "Flexible tracking",
        "Game",
        "item",
        "monitoring",
        "notification",
        "Online stores",
        "Price Alerter",
        "Price changes alert",
        "Price tracking",
        "Store profiles",
        "Web-based application"
    ]
    

},



 {
    name: 'The Moodle Project',
    description: "A framework built from scratch using Python Selenium, a powerful tool for automating website testing. This framework will specifically target testing functionalities of a Moodle application. Once completed, it will perform various tests, including user login, self-enrollment to courses, badge awards, and more. Rather than writing individual test scripts for each case, I'm building a framework to maintain flexibility and prevent test breakages due to UI changes. This approach allows for easier adaptation to UI modifications without rewriting test logic, reflecting my commitment to efficiency and adaptability in testing environments.",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/the_Moodle_Project',
    image: 'static/img/png/moodle.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2018-04-18',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "automation",
        "Badge awards testing",
        "breakages",
        "Course enrollment testing",
        "Flexibility maintenance",
        "Framework",
        "framework",
        "Moodle",
        "Moodle application testing",
        "Preventing test breakages",
        "Test framework development",
        "Testing strategy",
        "User login testing",
        "Website testing automation"
    ]
    

},


 {
    name: 'My Blog',
    description: "I successfully built a fully functional blog with an admin section. Users can create multiple blogs, each with its own commenting and reply section. The admin interface, designed with Bootstrap, allows for easy management of the blog. Additionally, I implemented a comprehensive testing strategy, including automatic, unit, manual, regression, exploration, black box, and white box testing, ensuring the reliability and robustness of the application.",
    languages: ['Python', 'Python 2.7', 'MongoDB', 'Flask', 'Pymongo', 'Boostrap', 'HTML', 'CSS', 'JS', 'ORM'],
    gitLink: 'https://github.com/EgbieAndersonUku1/myBlog',
    image: 'static/img/jpg/myBlog.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2018-06-18',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Admin interface",
        "Admin section",
        "Automatic testing",
        "backend",
        "Black box testing",
        "blog",
        "Bootstrap design",
        "Commenting system",
        "Exploratory testing",
        "frontend",
        "Fully functional blog",
        "Manual testing",
        "Multiple blogs creation",
        "Reliability assurance",
        "Reply section",
        "Robustness assurance",
        "Regression testing",
        "unit test",
        "Unit testing",
        "White box testing",
        "ORM",
    ]
    

},


 {
    name: 'Job Diary',
    description: "Job Diary is a web application designed to track job-related expenses and details, addressing the limitations of using Excel for this purpose. It provides a user-friendly interface to record job locations, pay, and other relevant information. Leveraging Flask implementation for enhanced security, it offers protection against attacks like Cross Site attack. Utilizing CDN Bootstrap, the application boasts a polished interface for easy navigation and accessibility.",
    languages: ['Python', 'Python 2.7', 'Flask', 'Pymongo (ORM)', 'Boostrap', 'HTML', 'CSS'],
    gitLink: 'https://github.com/EgbieAndersonUku1/job_diary/',
    image: 'static/img/png/job-diary.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2016-12-31',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Accessibility",
        "backend",
        "Cross Site attack prevention",
        "Diary",
        "Easy navigation",
        "Enhanced security",
        "Expense tracking",
        "expenses",
        "Excel alternative",
        "frontend",
        "income",
        "Job details tracking",
        "Job Diary",
        "Job locations recording",
        "job",
        "Pay recording",
        "Protection against attacks",
        "UI",
        "User-friendly interface",
        "Web application",
        "ORM"
    ]
    

},


 {
    name: 'Gmailer',
    description: "This script enables Gmail account owners to send emails from one account to another. To utilize the script, users must disable the 'less secure apps' setting in their Gmail account. With this simple tool, users can easily manage email communications between accounts",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/gmailer',
    image: 'static/img/png/gmail.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2017-05-24',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "address",
        "email",
        "email address",
        "Email forwarding",
        "gmail",
        "script",
        "sender",
        "tool"
    ]
    

},


 {
    name: 'A simple web blog',
    description: "This is a basic web blog utilizing MongoDB for data storage. It lacks robust security measures, such as user authentication and password encryption, and may not handle errors properly. Additionally, it does not verify the uniqueness of usernames and lacks features like post deletion. Despite its simplicity, it still works and behaves as a blog.",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/simpleWebBlog/',
    image: 'static/img/png/blogger.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2016-08-03',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "backend",
        "Basic web blog",
        "blog",
        "frontend",
        "post",
        "posts",
        "web blog"
    ]
    
},



 {
    name: 'Multiple File unzipper',
    description: "This script is designed to unzip multiple zip files from a specified directory. It efficiently extracts the contents of each zip file, streamlining the process of managing and accessing compressed files.",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/multipleZipFileExtractor',
    image: 'static/img/png/unzip.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2015-04-26',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Cli",
        "command line interface",
        "directory",
        "extraction",
        "file",
        "files",
        "multiple zip files",
        "Zip file extraction script",
        "zip"
    ]
    
},



 {
    name: '2048 game',
    description: "TThis project is a simple clone of the original 2048 game. Players can enjoy the addictive gameplay of merging tiles to reach the elusive 2048 tile. With intuitive controls and minimalist design, it faithfully recreates the experience of the classic puzzle game",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/2048Game',
    image: 'static/img/jpg/2048.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2016-03-31',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "2048",
        "2048 game clone",
        "classic",
        "clone",
        "game",
        "gameplay",
        "puzzle",
        "simple"
    ]
    

},


 {
    name: 'Linux IP Address changer',
    description: "A utility for changing IP address configurations between dynamic and static modes in Linux. Users can toggle between these modes through a simple interface. The tool streamlines the process of managing network configurations, providing flexibility and convenience for users adjusting their IP settings",
    languages: ['Python', 'Python 2.7'],
    gitLink: '',
    image: 'static/img/png/ip-changer.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2014-12-20',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "configuration",
        "Convenience",
        "Dynamic",
        "Flexibility",
        "IP",
        "IP address",
        "IP settings adjustment",
        "Linux",
        "management",
        "mode",
        "Network",
        "platform",
        "Simple interface",
        "static",
        "switching"
    ]
    

},



 {
    name: 'Tidier',
    description: "This program aims to organize cluttered directories by sorting files into folders based on their creation date and file extension. Users can opt for a recursive tidying option to clean up subdirectories as well",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/tidier',
    image: 'static/img/jpg/tidier.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2016-09-16',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "cleaning",
        "clutter",
        "Creation",
        "date-based sorting",
        "Directory cleanup",
        "Directory organizing program",
        "File",
        "File extension-based sorting",
        "folder",
        "folders",
        "organizing",
        "recursive",
        "Recursive tidying option",
        "sorting",
        "subdirectory",
        "Subdirectory cleaning",
        "tidy",
        "tidier"
    ]
    
}, {
    name: 'Password Generator',
    description: "This program generates random passwords with lengths ranging from 3 to 22 characters, along with a corresponding pass phrase to aid in remembering the password. The pass phrase is formed by using the first characters of each word, representing the characters of the password. This tool offers a convenient method for creating secure passwords and remembering them effectively.",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/PasswordGenerator',
    image: 'static/img/jpg/password-generator.jpeg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2015-09-13',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "Convenient tool",
        "creation",
        "generator",
        "password",
        "phrase",
        "random",
        "secure",
        "tool"
    ]
    

}, {
    name: 'Hangman',
    description: "This project is a unique twist on the classic hangman game, where players guess letters to uncover a hidden word or phrase. Unlike traditional hangman games, there is no hanging man illustration. Players focus solely on guessing the word within a certain number of attempts. This unconventional approach adds an interesting twist to the familiar gameplay experience",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/theGuessingGame',
    image: 'static/img/png/hangman.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2015-08-09',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "fun",
        "game",
        "gameplay",
        "guessing",
        "Hidden word or phrase",
        "learning",
        "Letter"
    ]
    

},

 {
    name: 'Script Writer',
    description: "This script automates the process of adding essential information to the top of a file or script. Upon execution, it inserts a title, shebang, author details, file or script information, and creation timestamp to the top of the file. This streamlined tool enhances file organization and documentation, saving time and effort for users",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/ScriptWrighter',
    image: 'static/img/png/script-writer.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2015-08-04',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "automation",
        "creation",
        "File",
        "header",
        "script",
        "text",
        "time",
        "time saving",
        "tool"
    ]
    

},
{
    name: 'Binary Converter',
    description: "This program allows users to enter text and choose between converting it to binary or decoding it into text. A menu prompts the user to select their desired conversion option, providing flexibility in manipulating text data. With this simple tool, users can easily encode and decode text according to their preferences",
    languages: ['Python', 'Python 2.7'],
    gitLink: 'https://github.com/EgbieAndersonUku1/binary_to_text_converter',
    image: 'static/img/png/binary-converter.png',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2014-04-30',
    indexed: "",
    projectStatus: "Completed",
    tags: [
        "binary",
        "conversion",
        "Decoding",
        "decoding",
        "Encoding",
        "Text conversion program",
        "tool",
        "User preferences"
    ]
    
},{
    name: 'AmazinQuiz App',
    description: "This repository houses the codebase for the Amazin’ Quizzer App, featuring a RESTful API for quiz generation, question management, and adaptive difficulty",
    languages: ['JavaScript', 'HTML', 'CSS', 'Node JS'],
    gitLink: 'https://github.com/EgbieAndersonUku1/amazinQuizApp',
    image: 'static/img/jpg/QA.jpg',
    hasWebsite: false,
    websiteUrl: '',
    dateCreated: '2024-06-13',
    indexed: "",
    projectStatus: "InProgress",
    tags: [
        "Quiz",
        "Questions",
        "Categories",
        "knowledge",
        "frontend",
        "backend",
        "Trivia",
        "Knowledge",
        "Quiz",
        "Educational",
        "Fun",
        "Brain Teasers",
        "Multiple Choice",
        "Test Your Knowledge",
        "Learning",
        "Challenge",
        "Interactive",
        "Game",
        "Trivia Questions",
        "Entertainment",
        "General Knowledge",
        "Quiz Game",
        "Educational Game",
        "Questions and Answers",
        "IQ Test",
        "Facts",
    ]
    
}

]

listOfRepositories.forEach(repository => {
   addToRepository(repository)
})


export default repositories