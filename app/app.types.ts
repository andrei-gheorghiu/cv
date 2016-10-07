import {AppComponent} from './app.component';
export interface ArticleOptions {
    id:string;
    classes:string[];
    image:string;
    header?:{
        title?:(any);
        subtitle?:(any);
    };
    body?:string;
    actions?:string;
    icons?:string;
    nav?:string;
    sections?:Section[];
    activeSection?:Section;
}

export class Article implements ArticleOptions {
    id:string;
    classes:string[];
    image:string;
    body:(any);
    actions:(any);
    icons:(any);
    nav:(any);
    sections:(any);
    header:({
        title?: (any),
        subtitle?: (any),
    });
    activeSection:(any);

    constructor(a:ArticleOptions) {
        this.id = a.id;
        this.classes = a.classes;
        this.image = a.image;
        a.header && (this.header = a.header);
        a.body && (this.body = a.body);
        a.actions && (this.actions = a.actions);
        a.icons && (this.icons = a.icons);
        a.nav && (this.nav = a.nav);
        a.sections && (this.sections = a.sections);
    }
}

export interface TooltipConfig {
    text:string;
    label:string;
    config?:string;
}
export class Tooltip implements TooltipConfig {
    text:string;
    label:string;
    config:(any);

    constructor(c:TooltipConfig, app:AppComponent) {
        this.text = c.text;
        this.label = c.label;
        this.config = c.config ? c.config : 'multiline shadow';
    }
}
export interface LanguageSkill {
    name: string;
    understanding: {
        listening: Tooltip,
        reading: Tooltip
    };
    spoken: {
        interaction: Tooltip,
        production: Tooltip
    };
    writing: Tooltip;
    assessment: string;
}

export interface Section {
    label:string;
    title?:string;
    business?:string;
    activity?:string[];
    company?:{
        name?:any;
        title?:any;
        address:string
    };
    technology?:string[];
    languages?:string[];
    place?:string;
    firstSubtitle?:string;
    secondSubtitle?:string;

    languageSkills?:{
        link:{
            title:string,
            url:string
        },
        motherTongue:string,
        languages:LanguageSkill[]
    };
    communicationSkills?:string[];
    organizationalSkills?:string[];
    programmingSkills?:string[];
    digitalSkills?:{
        skills:{
            name:string,
            tooltip:Tooltip
        }[],
        extra:string[],
        link:{
            title:string,
            url:string
        },
    };
    otherSkills?:string[];
}