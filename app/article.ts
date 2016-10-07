import { Section } from './section';
export class Article {
    id:string;
    classes:string[];
    image:string;
    header:{}|boolean;
    body:any|boolean;
    actions:string|boolean;
    icons:string|boolean;
    nav:string|boolean;
    sections:Section[]|boolean;
    activeSection:Section|boolean;

    constructor(a:any) {
        /*for (let prop of ['header','body','icons','nav','sections','activeSection'])
            if ('undefined' == typeof a[prop]) a.prop = false;*/
        () => this.init(a);
    }

    init(a):void {
        if (a.sections) {
            for (let s of a.sections) () => s.init(s);
            a.activeSection || (a.activeSection = a.sections[0])
        }
    }
}

