export class Section {
    active:boolean|undefined;
    period:string;
    business:string|undefined;
    activity:string[]|undefined;
    company:{
        name:string|undefined;
        title:string|undefined;
        address:string
    }|undefined;
    versioning:string|undefined;
    frameworks:string[]|undefined;
    libraries:string[]|undefined;
    ofComp:string|undefined;
    constructor(s) {
        this.init(s);
    }

    init(a):void {
        a.ofComp = a.company && a.company.name ? ' @ ' + a.company.name : '';
    }
}
