// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.
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
		title: 'Google Health Platform2',
		category: 'Web Application',
		img: new URL('../assets/images/web-project-2.jpg', import.meta.url).href ,
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Mobile Application',
		img: new URL('../assets/images/mobile-project-2.jpg', import.meta.url).href,
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: new URL('../assets/images/ui-project-1.jpg', import.meta.url).href,
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: new URL('../assets/images/ui-project-2.jpg', import.meta.url).href,
	},
	{
		id: 5,
		title: 'React Social App',
		category: 'Mobile Application',
		img: new URL('../assets/images/mobile-project-1.jpg', import.meta.url).href,
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: new URL('../assets/images/web-project-1.jpg', import.meta.url).href,
	},
];

export default projects;
export { projects , categories };
