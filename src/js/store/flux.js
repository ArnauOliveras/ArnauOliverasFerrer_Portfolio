
import IconTheThugs from "../../img/IconTheThugs.png";
import IconArnauWeb from "../../img/ArnauWeb.png";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			videogamesProjects: [
				{
					title: "AXO",
					subtitleKey: "axoSubtitle",
					descriptionKey: "axoDescription",
					iconURL: "https://i.ytimg.com/vi/78oVEZgu8ps/maxresdefault.jpg",
					trailesURL: "https://www.youtube.com/watch?v=tUdHNCjzk1Q",
					imageURL: "",
					gameURL: "https://elialzu.itch.io/axo",
					gamePlataform: "Itch.io",
					tech: ["Windows", "Unity 3D", "C#"],
				},
				{
					title: "Rootrients",
					subtitleKey: "rootrientsSubtitle",
					descriptionKey: "rootrientsDescription",
					iconURL: "https://img.itch.zone/aW1nLzExMjI2NTY5LnBuZw==/original/N80aAF.png",
					imageURL: "https://images.prismic.io/vdjoc/65d87eec3a605798c18c2791_9ExCd_.png?auto=format%2Ccompress&rect=0%2C0%2C1914%2C1076&w=1000&h=562",
					trailesURL: "",
					gameURL: "https://marinaco.itch.io/rootrients",
					gamePlataform: "Itch.io",
					tech: ["Windows", "Mobile", "Unity 3D", "C#"],
				},
				{
					title: "The Thugs",
					subtitleKey: "thethugsSubtitle",
					descriptionKey: "thethugsDescription",
					iconURL: IconTheThugs,
					trailesURL: "",
					imageURL: "",
					gameURL: "",
					gamePlataform: "Google Play",
					tech: ["Mobile", "Unity 3D", "C#", "JSON", "Back End", "Python", "MySQL"],
				},
			],
			fullstackProjects: [
				{
					title: "myPortfolio",
					descriptionKey: "myPortfolioDescription",
					iconURL: IconArnauWeb,
					demoURL: "https://arnauoliverasferrer.dev",
					githubURL: "https://github.com/ArnauOliveras/ArnauOliverasFerrer_Portfolio",
					tech: ["HTML", "React", "CSS", "JavaScript"],
				}, {
					title: "AXO",
					descriptionKey: "axoDescription",
					iconURL: "https://i.ytimg.com/vi/78oVEZgu8ps/maxresdefault.jpg",
					demoURL: "https://elialzu.itch.io/axo",
					githubURL: "https://elialzu.itch.io/axo",
					tech: ["Windows", "Unity 3D", "C#"],
				}, {
					title: "AXO",
					descriptionKey: "axoDescription",
					iconURL: "https://i.ytimg.com/vi/78oVEZgu8ps/maxresdefault.jpg",
					demoURL: "https://elialzu.itch.io/axo",
					githubURL: "https://elialzu.itch.io/axo",
					tech: ["Windows", "Unity 3D", "C#"],
				}, {
					title: "AXO",
					descriptionKey: "axoDescription",
					iconURL: "https://i.ytimg.com/vi/78oVEZgu8ps/maxresdefault.jpg",
					demoURL: "https://elialzu.itch.io/axo",
					githubURL: "https://elialzu.itch.io/axo",
					tech: ["Windows", "Unity 3D", "C#"],
				}, {
					title: "AXO",
					descriptionKey: "axoDescription",
					iconURL: "https://i.ytimg.com/vi/78oVEZgu8ps/maxresdefault.jpg",
					demoURL: "https://elialzu.itch.io/axo",
					githubURL: "https://elialzu.itch.io/axo",
					tech: ["Windows", "Unity 3D", "C#"],
				},
			],
			skills: [
				{
					titleSectionKey: "programmingLanguages",
					tech: [
						{ name: "C#", lv: "5", starting: false, icon: 'https://www.netgen.co.za/wp-content/uploads/2022/03/C-image-for-Netgen-1024x1024.png' },
						{ name: "C++", lv: "2", starting: false, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' },
						{ name: "HTML", lv: "4", starting: true, icon: 'https://cdn-icons-png.freepik.com/512/1051/1051277.png' },
						{ name: "CSS", lv: "4", starting: true, icon: 'https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg' },
						{ name: "JavaScript", lv: "4", starting: true, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png' },
						{ name: "Python", lv: "2", starting: true, icon: 'https://quantumzeitgeist.com/wp-content/uploads/pythoned.png' },
						{ name: "MySQL", lv: "2", starting: true, icon: 'https://raw.githubusercontent.com/pulumiverse/pulumi-mssql/main/docs/mssql.png' },
						{ name: "JSON", lv: "5", starting: false, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/640px-JSON_vector_logo.svg.png' }
					]
				},
				{
					titleSectionKey: "frameworksLibraries",
					tech: [
						{ name: "React", lv: "4", starting: true, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' },
						{ name: "API", lv: "2", starting: true, icon: 'https://cdn-icons-png.flaticon.com/512/10169/10169724.png' }
					]
				},
				{
					titleSectionKey: "gameDevelopment",
					tech: [
						{ name: "Unity", lv: "5", starting: false, icon: '<i class="fa-brands fa-unity"></i>' },
						{ name: "Unreal", lv: "1", starting: false, icon: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-epic/events/UESFLogo4_smallShadow_RirViCz.png' },
						{ name: "Autodesk 3D MAX", lv: "3", starting: false, icon: 'https://img.icons8.com/color/512/3ds-max.png' }
					]
				},
				{
					titleSectionKey: "developmentTools",
					tech: [
						{ name: "Visual Studio", lv: "5", starting: false, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png' },
						{ name: "VS Code", lv: "5", starting: false, icon: 'https://tidalcycles.org/assets/images/vscodeicon-42dc264fde2adb74cc197fe6d02b183c.png' },
						{ name: "Git", lv: "4", starting: true, icon: '<i class="fa-brands fa-git-alt"></i>' },
						{ name: "GitHub", lv: "4", starting: true, icon: '<i class="fa-brands fa-github"></i>' },
						{ name: "SourceTree", lv: "3", starting: false, icon: 'https://blog.kakaocdn.net/dn/bivk1H/btsGwKWbd4p/OkfAQSENjslL295SMDSzkK/img.png' },
						{ name: "Codespace", lv: "5", starting: false, icon: 'https://chris-ayers.com/assets/images/github-codespaces-logo.png' }
					]
				},
				{
					titleSectionKey: "projectManagement",
					tech: [
						{ name: "Jira", lv: "3", starting: false, icon: 'https://dragonboat.io/wp-content/uploads/2021/12/jira.png' },
						{ name: "Trello", lv: "5", starting: false, icon: 'https://cdn-icons-png.flaticon.com/256/2111/2111656.png' },
						{ name: "Miro", lv: "3", starting: false, icon: 'https://www.cdnlogo.com/logos/m/32/miro.svg' }
					]
				},
				{
					titleSectionKey: "design",
					tech: [
						{ name: "Photoshop", lv: "4", starting: false, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/800px-Adobe_Photoshop_CC_icon.svg.png' },
						{ name: "Illustrator", lv: "3", starting: false, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/800px-Adobe_Illustrator_CC_icon.svg.png' },
						{ name: "Canva", lv: "5", starting: false, icon: 'https://www.applivery.com/wp-content/uploads/2024/07/Canva.png' }
					]
				}
			],


		},
		actions: {


		}
	};
};

export default getState;
