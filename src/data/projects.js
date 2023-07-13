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
		img: 'cover.png' ,
		type: 'soliver mazo',
		date: 'July 2023',
		details: {
			client: false,
			guided: false,
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
			coverImg: 'cover.png',
			images: ['about.png', /*'about-dark.png',*/ 'project1.png', 'project2.png'],
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
		img: 'cover.png' ,
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
					},
					certificate: {
						name: '98S98F7JS7CT',
						url: 'https://www.coursera.org/account/accomplishments/certificate/98S98F7JS7CT'
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
			coverImg: 'cover.png',
			images: ['output_15_1.png','output_14_1.png','output_32_2.png'],
			md: 'notebook'
		},
		link: {
			name: 'Kaggle',
			icon: 'kaggle',
			iconSet: 'fontawesome',
			url: 'https://www.kaggle.com/solivermazo'
		}
	},
	{
		id: 3,
		dir: "coursera_py2",
		project: 'python-for-data-analysis-pandas-numpy',
		title: 'Python for Data Analysis: Pandas & NumPy',
		category: 'Data Analysis',
		img: 'cover.png' ,
		type: 'guided project',
		date: 'July 2023',
		details: {
			client: false,
			guided: {
				heading: 'About Project',
				details: {
					provider: sources['coursera'],
					course :{
						name: `Python for Data Analysis: Pandas & NumPy`,
						url: 'https://www.coursera.org/projects/python-for-data-analysis-numpy'
					},
					certificate: {
						name: '527RS23WZTLH',
						url: 'https://www.coursera.org/account/accomplishments/certificate/527RS23WZTLH'
					}
				}
			},
			objective: {
				key: 'objective',
				heading: 'Objective',
				text: ` Understand the fundamentals of data analysis in Python and we will leverage the power of two important python libraries known as Numpy and pandas. NumPy and Pandas are two of the most widely used python libraries in data science. They offer high-performance, easy to use structures and data analysis tools.`,
			},
			tags: {
				key: 'tags',
				heading: 'Tools & Technologies',
				tags: ['Python', 'Data Analysis', 'Pandas', 'NumPy', 'Data Science']
			}
		},
		src: {
			coverImg: 'cover.png',
			images: [],
			md: 'notebook'
		},
		link: false
	},
];

export default projects;
export { projects , categories };
