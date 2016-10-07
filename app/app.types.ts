export class Tooltip {
    text:string;
    label:string;
    conf?:string;

    constructor(t) {
        this.text = t.text;
        this.label = t.label;
        t.conf && (this.conf = t.conf);
    }
}

export class LanguageSkill {
    name: string;
    writing: Tooltip;
    assessment: string;
    understanding: {
        listening: Tooltip;
        reading: Tooltip;
    };
    spoken: {
        interaction: Tooltip;
        production: Tooltip;
    };
}

export class Article {
    id:string;
    classes:string[];
    image:string;
    body?:string;
    actions?:string;
    icons?:string;
    nav?:string;
    sections?:ArticleSection[];
    activeSection?:ArticleSection;
    header?:({
        title?: string;
        subtitle?: string
    });
    constructor(a) {
        this.id = a.id;
        this.classes = a.classes;
        this.image = a.image;
        a.body && (this.body = a.body);
        a.actions && (this.actions = a.actions);
        a.icons && (this.icons = a.icons);
        a.nav && (this.nav = a.nav);
        a.sections && (this.sections = a.sections);
        a.activeSection && (this.activeSection = a.activeSection);
        a.header && (this.header = a.header);
    }
}

export class ArticleSection {
    label:string;
    title?:string;
    business?:string;
    activity?:string[];
    technology?:string[];
    languages?:string[];
    place?:string;
    firstSubtitle?:string;
    secondSubtitle?:string;
    communicationSkills?:string[];
    organizationalSkills?:string[];
    programmingSkills?:string[];
    otherSkills?:string[];
    languageSkills?:({
        motherTongue:string;
        link:({
            title:string
            url:string
        });
        languages:LanguageSkill[];
    });
    company?:({
        name?:string
        title?:string
        address:string
    });
    digitalSkills?:{
        skills?:({
            name:string
            tooltip: Tooltip
        })[]
        extras?:string[]
        link: {
            title:string
            url:string
        }
    };

    constructor(s) {
        this.label = s.label;
        s.title&&(this.title=s.title);
        s.business&&(this.business=s.business);
        s.activity&&(this.activity=s.activity);
        s.activity&&(this.activity=s.activity);
        s.technology&&(this.technology=s.technology);
        s.languages&&(this.languages=s.languages);
        s.place&&(this.place=s.place);
        s.firstSubtitle&&(this.firstSubtitle=s.firstSubtitle);
        s.secondSubtitle&&(this.secondSubtitle=s.secondSubtitle);
        s.communicationSkills&&(this.communicationSkills=s.communicationSkills);
        s.organizationalSkills&&(this.organizationalSkills=s.organizationalSkills);
        s.programmingSkills&&(this.programmingSkills=s.programmingSkills);
        s.otherSkills&&(this.otherSkills=s.otherSkills);
        s.languageSkills&&(this.languageSkills=s.languageSkills);
        s.company&&(this.company=s.company);
        s.digitalSkills&&(this.digitalSkills=s.digitalSkills);
    }
}