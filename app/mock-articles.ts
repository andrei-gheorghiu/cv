import {Tooltip, Article} from './app.types';

export const ARTICLES: Article[] = [
    {
        id: 'home',
        classes: ['panel', 'special'],
        header: {
            title: 'Andrei<br />Gheorghiu',
            subtitle: 'web is beautiful'
        },
        image: './app/assets/images/pic04.jpg',
        icons: '<ul class="icons">' +
        '<li><a href="http://stackoverflow.com/users/1891677/andrei-gheorghiu?tab=profile" class="icon fa-stack-overflow" title="StackOverflow Profile"><span class="label">StackOverflow Profile</span></a></li>' +
        '<li><a href="http://stackoverflow.com/cv/andrei-gheorghiu" class="icon fa-stack-overflow orange" title="StackOverflow CV"><span class="label">StackOverflow CV</span></a></li>' +
        '<li><a href="https://github.com/andrei-gheorghiu" class="icon fa-github" title="Github profile"><span class="label">GitHub</span></a></li>' +
        '<li><a href="https://www.facebook.com/a.h.gheorghiu" class="icon fa-facebook" title="Facebook profile (I check it once a month... roughly)"><span class="label">Facebook</span></a></li>' +
        '<li><a href="/#contact" class="icon fa-envelope" title="Fastest way to reach me, by far"><span class="label">Email</span></a></li>' +
        '</ul>',
        nav: '<ul class="actions vertical special spinY">' +
        '<li><a href="#work" class="button">Experience</a></li>' +
        '<li><a href="#about" class="button">About</a></li>' +
        '<li><a href="#education" class="button">Education</a></li>' +
        '</ul>',
    },
    {
        id: 'work',
        classes: ['panel', 'secondary', 'inactive', 'hasSections'],
        header: {
            title: 'Work experience',
            subtitle: 'Every day brings new choices'
        },
        image: './app/assets/images/pic03.jpg',
        actions: '<li><a href="#home" class="button small back">Back</a></li>',
        sections: [
            {
                label: '2012 - present',
                title: '(mainly) Frontend Developer',
                company: {
                    name: 'evolution.ro',
                    title: 'Evolution Labs S.R.L.',
                    address: 'Bucharest, Romania'
                },
                business: 'Web development',
                activity: [
                    'Mainly responsible with frontend development (theming, UI design & coding, responsiveness, cross-browser compatibility)',
                    'Occasional development of backend modules and backend administration interfaces for various web apps running on Yii2',
                    'Development of custom WordPress plugins:<ul>' +
                    '<li>WordPress  Bullhorn integration</li>' +
                    '<li>Apply with LinkedIn for Bullhorn integration</li>' +
                    '<li>Custom extensions for major free and premium plugins such as WooCommerce and WPJobManager (i.e. payment gateway integrations, redirect on job submission)</li>' +
                    '</ul>',
                    'Development of full websites for small /medium clients (WordPress)',
                    'Mobile apps graphical interface design (Android, IoS) - theming, UI, responsiveness',
                    'Development of pure HTML + CSS + JavaScript themes, from scratch or based on popular CSS frameworks – Bootstrap, HTML5UP, MDL',
                    'WordPress premium e-commerce theme conversion for use with web applications based on Yii2 or Smarty',
                ],
                technology: ['Yii2', 'AngularJS', 'Ionic', 'Angular 2', 'Ionic 2', 'WordPress', 'Smarty', 'Bootstrap', 'jQuery', 'Angular Material', 'Material Design Lite', 'Hammer.js', 'Git', 'SVN'],
                languages: ['CSS', 'JavaScript', 'TypeScript', 'php'],
            },
            {
                label: '2008 - 2012',
                title: 'Full stack self-employed web-developer',
                company: {
                    address: 'Bucharest, Romania'
                },
                business: 'Web development',
                activity: [
                    '<h4>2010 – 2012</h4> Volunteered as theme support for the most popular (excluding core themes) open source WordPress theme at the time: Customizr. Also contributed to theme development (initiated and developed codebase for making it multi-language compatible) – which resulted in a long lasting friendship with theme creator, Nicolas Guillaume.',
                ],
                technology: ['WordPress', 'Bootstrap', 'jQuery'],
                languages: ['CSS', 'JavaScript', 'php'],
            },
            {
                label: '2004 - 2008',
                title: 'Head Architect',
                company: {
                    name: 'Acub Proiect',
                    title: 'Acub Proiect S.R.L.',
                    address: 'Bucharest, Romania'
                },
                business: 'Architecture, Interior Design, Contract Sales',
                activity: [
                    'Design (architecture planning), General Management, Contract Sales',
                ],
            },
            {
                label: '1997 – 2004',
                title: 'City guide (collaborator)',
                company: {
                    title: 'British Council',
                    address: 'Bucharest, Romania'
                },
                activity: [
                    'City guide, translator and driver for select British Council guests. I was specifically called in for guests with artistic and/or cultural interests (writers, musicians, designers, teachers) mainly because of my extended knowledge in Bucharest’s history of architecture.',
                ],
            },
            {
                label: '1996 – 2001',
                title: 'Contract Sales and Distributor',
                company: {
                    name: 'Mag Impex',
                    title: 'Mag Impex 93 S.R.L.',
                    address: 'Bucharest, Romania'
                },
                business: 'Distribution of imported goods',
                activity: [
                    'Developed and maintained a distribution network for LEGO toys in Romania, provisioning 60+ shops in 5 (out of 45) Romanian districts',
                ],
            },
        ],
    },
    {
        id: 'about',
        classes: ['panel', 'secondary', 'inactive', 'hasSections'],
        header: {
            title: 'About me',
            subtitle: 'All generalizations are false, including this one'
        },
        image: './app/assets/images/pic02.jpg',
        actions: '<li><a href="#home" class="button small back">Back</a></li>',
        sections: [
            {
                label: ">\<\\*\>",
                title: 'Quo Vadis?',
                content: [
                    'By the end of 2008 I was a young Romanian architect trying to make a name for myself. I loved' +
                    ' being an architect: it was hard, rewarding work but I enjoyed being part of the new wave of' +
                    ' young architects trying to close the gap between Romanian and West European architecture.',
                    'Little did I know about the effects the Great Recession (started by mid 2007 in United States)' +
                    ' would have upon European and Romanian economies. It hit us so hard that the real-estate market' +
                    ' froze for 4 years, bankrupting the vast majority of the construction sector, after an unprecendented rise since 2005. This left most Romanian architects out of work until late 2012.',
                    'So, with a lot of time on my hands, I switched from designing for real space to virtual, digital' +
                    ' space.' +
                    ' The more I practiced, the more I liked it. In web you can get your dreams and ideas built in a' +
                    ' matter of days. You rarely have to wrestle tight budgets or the laws of physics. It really' +
                    ' feels like the only limit is your own imagination.',
                    'Well, I was also fortunate enough to find a small but <a href="//evolution.ro">very ambitious' +
                    ' team</a> who shared my passion for freedom designing web, who taught me most of what I needed' +
                    ' and wanted to learn.',
                    'And here I am, 8 years later, able to do both but not wanting to go back. I love my current' +
                    ' work, I enjoy the pace at which I learn new things every day and I really don\'t want to trade' +
                    ' this kind of freedom for the level of stress one gets as an architect.',
                    'This is who I am now. I just love the smell of code... ',
                    '<a href="http://stackoverflow.com/users/1891677/andrei-gheorghiu?tab=profile"> }<((((*> </a>'
                ]

            },
            {
                label: 'Technology',
                title: 'Technological skills',
                programmingSkills: [
                    'good programming',
                    'good (excellent on request) code readability',
                    'good ( excellent on request ) code documenting',
                    'excellent reading comprehension',
                    'good active listening',
                    'excellent active learning',
                    'good critical thinking',
                    'good judgment and decision making',
                    'good complex problem solving',
                    'good systems analysis and evaluation',
                    'good operations analysis', 'good quality control analysis',
                    'decent writing',
                    'good persuasion',
                    'decent management of personnel resources'
                ],
                digitalSkills: {
                    skills: [
                        {
                            name: 'Information processing',
                            tooltip: {
                                text: 'Proficient user',
                                label: 'I can use advanced search strategies (e.g. using search operators) to find reliable information on the internet. I can use web feeds (like RSS) to be updated with content I am interested in. I can assess the validity and credibility of information using a range of criteria. I am aware of new advances in information search, storage and retrieval. Ι can save information found on the internet in different formats. I can use cloud information storage services.'
                            }
                        },
                        {
                            name: 'Content creation',
                            tooltip: {
                                text: 'Proficient user',
                                label: 'I can produce or modify complex, multimedia content in different formats, using a variety of digital platforms, tools and environments. I can create a website using a programming language. I can use advanced formatting functions of different tools (e.g. mail merge, merging documents of different formats, using advanced formulas, macros). I know how to apply licences and copyrights. I can use several programming languages. I know how to design, create and modify databases with a computer tool.'
                            }
                        },
                        {
                            name: 'Communication',
                            tooltip: {
                                text: 'Independent user',
                                label: 'I can use advanced features of several communication tools (e.g. using Voice over IP and sharing files). I can use collaboration tools and contribute to e.g. shared documents/files someone else has created. I can use some features of online services (e.g. public services, e-banking, online shopping). I pass on or share knowledge with others online (e.g. through social networking tools or in online communities). I am aware of and use the rules of online communication ("netiquette").'
                            }
                        },
                        {
                            name: 'Problem solving',
                            tooltip: {
                                text: 'Proficient',
                                label: 'I can solve almost all problems that arise when using digital technology. I can choose the right tool, device, application, software or service to solve (non-technical) problems. I am aware of new technological developments. I understand how new tools work. I frequently update my digital skills.'
                            }
                        },
                        {
                            name: 'Safety',
                            tooltip: {
                                text: 'Proficient',
                                label: 'I frequently check the security configuration and systems of my devices and/or of the applications I use. I know how to react if my computer is infected by a virus. I can configure or modify the firewall and security settings of my digital devices. I know how to encrypt e-mails or files. I can apply filters to spam e-mails. To avoid health problems (physical and psychological), I make reasonable use of information and communication technology. I have an informed stance on the impact of digital technologies on everyday life, online consumption, and the environment.'
                            }
                        }
                    ],
                    extras: [
                        'good command of office suite (word processors, spread sheets, presentation software)',
                        'good command of photo editing software gained as an architect and full stack developer (including theme and layout creation for several websites)'
                    ],
                    link: {
                        title: '* Common European Framework of Reference for Digital Skills',
                        url: 'http://europass.cedefop.europa.eu/en/resources/digital-competences'
                    }
                },
                otherSkills: [
                    'proficient in 2d and 3d modelling and rendering software applications [3d StudoMax, AutoCAD, Archicad, Artlantis] (mostly applied in architecture but also in several professional logo creations)',
                    'good design (graphical creation) capability for both print and digital media (I designed and carried out  to completion several publications and/or advertising campaigns for products or projects I was involved in),',
                    'good command of graphical design software: Corel Suite, Adobe Suite (Photoshop - good, inDesign - decent, Illustrator - decent)',
                    'good logo design capability - I designed several (more than 10) successful logos for Romanian businesses',
                    'good branding and content copyrighting abilities in both Romanian and English language',
                ]
            },
            {
                label: 'Personal',
                title: 'Personal Skills',
                languageSkills: {
                    motherTongue: "Romanian",
                    link: {
                        title: '* Common European Framework of Reference for Languages',
                        url: '//europass.cedefop.europa.eu/resources/european-language-levels-cefr'
                    },
                    languages: [
                        {
                            name: 'English',
                            understanding: {
                                listening: {
                                    text: 'C2',
                                    label: 'I have no difficulty in understanding any kind of spoken language, whether live or broadcast, even when delivered at fast native speed, provided I have some time to get familiar with the accent.'
                                },
                                reading: {
                                    text: 'C2',
                                    label: 'I can read with ease virtually all forms of the written language, including abstract, structurally or linguistically complex texts such as manuals, specialised articles and literary works.'
                                }
                            },
                            spoken: {
                                interaction: {
                                    text: 'C2',
                                    label: 'I can take part effortlessly in any conversation or discussion and have a good familiarity with idiomatic expressions and colloquialisms. I can express myself fluently and convey finer shades of meaning precisely. If I do have a problem I can backtrack and restructure around the difficulty so smoothly that other people are hardly aware of it.'
                                },
                                production: {
                                    text: 'C1',
                                    label: 'I can present clear, detailed descriptions of complex subjects integrating sub-themes, developing particular points and rounding off with an appropriate conclusion.'
                                }
                            },
                            writing: {
                                text: 'C2',
                                label: 'I can write clear, smoothly-flowing text in an appropriate style. I can write complex letters, reports or articles which present a case with an effective logical structure which helps the recipient to notice and remember significant points. I can write summaries and reviews of professional or literary works.'
                            },
                            assessment: 'Self assessment'
                        },
                        {
                            name: 'French',
                            understanding: {
                                listening: {
                                    text: 'B2',
                                    label: 'I can understand extended speech and lectures and follow even complex lines of argument provided the topic is reasonably familiar. I can understand most TV news and current affairs programmes. I can understand the majority of films in standard dialect.'
                                },
                                reading: {
                                    text: 'B1',
                                    label: 'I can understand texts that consist mainly of high frequency everyday or job-related language. I can understand the description of events, feelings and wishes in personal letters.'
                                }
                            },
                            spoken: {
                                interaction: {
                                    text: 'B2',
                                    label: 'I can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible. I can take an active part in discussion in familiar contexts, accounting for and sustaining my views.'
                                },
                                production: {
                                    text: 'B1',
                                    label: 'I can connect phrases in a simple way in order to describe experiences and events, my dreams, hopes and ambitions. I can briefly give reasons and explanations for opinions and plans. I can narrate a story or relate the plot of a book or film and describe my reactions.'
                                }
                            },
                            writing: {
                                text: 'A2',
                                label: 'I can write short, simple notes and messages. I can write a very simple personal letter, for example thanking someone for something.'
                            },
                            assessment: 'Self assessment'
                        }
                    ]
                },
                communicationSkills: [
                    'excellent communication skills gained through direct contact with clients and/or being part of various teams as contract sales person, city guide, head architect and web developer'

                ],
                organizationalSkills: [
                    'good team-worker',
                    'able to perform under stressful conditions',
                    'decent management (managed a team of 6 as head architect at Acub Proiect)'
                ],
                otherSkills: [
                    'Driving licence: A, B'
                ]
            },
        ]
    },
    {
        id: 'education',
        classes: ['panel', 'secondary', 'inactive', 'hasSections'],
        header: {
            title: 'Education',
            subtitle: 'If you want to be happy, be'
        },
        image: './app/assets/images/pic01.jpg',
        actions: '<li><a href="#home" class="button small back">Back</a></li>',
        sections: [
            {
                label: '<span>1994 – 1997</span> | <span>2000 - 2004</span>',
                title: 'State University of Architecture <strong>"Ion Mincu"</strong>',
                company: {
                    address: 'Bucharest, Romania'
                }
            },
            {
                label: '1990 - 1994',
                title: '<strong>“Tudor Vladimirescu”</strong> High school',
                company: {
                    address: 'Bucharest, Romania'
                }
            }
        ]

    }
];


