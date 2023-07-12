// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.
const sources = {
	coursera: {
		id: 'coursera',
		name: 'Coursera.org',
		url: 'https://www.coursera.org/',
	}
} 

const categories = [
	"Sql",
	"Python",
	"Tableau",
	"Sheets",
	"Others"
]

const projects = [
	{
		id: 1,
		dir: "portfolio",
		project: 'soliver-portfolio-using-vue-vite-tailwind',
		title: 'Soliver portfolio using Vue+Vite and TailwinCSS hosted in Github pages',
		category: 'others',
		img: new URL('../assets/images/web-project-2.jpg', import.meta.url).href ,
		type: 'soliver mazo',
		date: 'July 2023',
		details: {
			client: false,
			guided: {
				heading: 'About Project',
				details: {
					provider: sources['coursera'],
					course :{
						name: `Exploratory Data Analysis With Python and Pandas`,
						url: 'https://www.coursera.org/projects/exploratory-data-analysis-python-pandas'
					}
				}
			},
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: `To create a portfolio for showcasing your my skills. With interactive project displays, skill highlighting, and optimized performance, impress potential employers and clients.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['Vue3', 'Vite', 'TailwindCSS', 'GitHub Pages']
			}
		},
		src: {
			coverImg: false,
			images: [],
			md: 'README'
		},
		link: {
			name: 'Github',
			icon: 'github',
			iconSet: 'feathericons',
			url: 'https://github.com/solivervmazo/soliver'
		}
	},
	{
		id: 2,
		dir: "1",
		project: 'exploratory-data-analysis-python-pandas',
		title: 'Exploratory Data Analysis With Python and Pandas',
		category: 'Data Analysis',
		img: new URL('../assets/images/web-project-2.jpg', import.meta.url).href ,
		type: 'guided project',
		date: 'July 2023',
		details: {
			client: false,
			guided: {
				heading: 'About Project',
				details: {
					provider: sources['coursera'],
					course :{
						name: `Exploratory Data Analysis With Python and Pandas`,
						url: 'https://www.coursera.org/projects/exploratory-data-analysis-python-pandas'
					}
				}
			},
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: `Apply practical Exploratory Data Analysis (EDA) techniques on any tabular dataset using Python packages such as Pandas and Numpy.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['Python', 'Data Analysis', 'Pandas', 'EDA']
			}
		},
		src: {
			coverImg: false,
			images: ['1.png','2.png','3.png'],
			md: 'Hello'
		},
		link: {
			name: 'Kaggle',
			icon: 'kaggle',
			iconSet: 'fontawesome',
			url: 'https://www.kaggle.com/solivermazo'
		}
	},
	// {
	// 	id: 2,
	// 	title: 'Phoenix Digital Agency',
	// 	category: 'Mobile Application',
	// 	img: new URL('../assets/images/mobile-project-2.jpg', import.meta.url).href,
	// 	type: 'guided project',
	// 	date: 'July 2023',
	// 	details: false
	// },
	// {
	// 	id: 3,
	// 	title: 'Project Management UI',
	// 	category: 'UI/UX Design',
	// 	img: new URL('../assets/images/ui-project-1.jpg', import.meta.url).href,
	// 	type: 'guided project',
	// 	date: 'July 2023',
	// 	details: false
	// },
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: new URL('../assets/images/ui-project-2.jpg', import.meta.url).href,
	// 	type: 'guided project',
	// 	date: 'July 2023',
	// 	details: false
	// },
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: new URL('../assets/images/mobile-project-1.jpg', import.meta.url).href,
	// 	type: 'guided project',
	// 	date: 'July 2023',
	// 	details: false
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: new URL('../assets/images/web-project-1.jpg', import.meta.url).href,
	// 	type: 'guided project',
	// 	date: 'July 2023',
	// 	details: false
	// },
];

export default projects;
export { projects , categories };
