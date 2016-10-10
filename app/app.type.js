"use strict";
var Tooltip = (function () {
    function Tooltip(t) {
        this.text = t.text;
        this.label = t.label;
        t.conf && (this.conf = t.conf);
    }
    return Tooltip;
}());
exports.Tooltip = Tooltip;
var LanguageSkill = (function () {
    function LanguageSkill() {
    }
    return LanguageSkill;
}());
exports.LanguageSkill = LanguageSkill;
var Article = (function () {
    function Article(a) {
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
    return Article;
}());
exports.Article = Article;
var ArticleSection = (function () {
    function ArticleSection(s) {
        this.label = s.label;
        s.title && (this.title = s.title);
        s.business && (this.business = s.business);
        s.activity && (this.activity = s.activity);
        s.activity && (this.activity = s.activity);
        s.technology && (this.technology = s.technology);
        s.languages && (this.languages = s.languages);
        s.place && (this.place = s.place);
        s.firstSubtitle && (this.firstSubtitle = s.firstSubtitle);
        s.secondSubtitle && (this.secondSubtitle = s.secondSubtitle);
        s.communicationSkills && (this.communicationSkills = s.communicationSkills);
        s.organizationalSkills && (this.organizationalSkills = s.organizationalSkills);
        s.programmingSkills && (this.programmingSkills = s.programmingSkills);
        s.otherSkills && (this.otherSkills = s.otherSkills);
        s.languageSkills && (this.languageSkills = s.languageSkills);
        s.company && (this.company = s.company);
        s.digitalSkills && (this.digitalSkills = s.digitalSkills);
    }
    return ArticleSection;
}());
exports.ArticleSection = ArticleSection;
//# sourceMappingURL=app.type.js.map