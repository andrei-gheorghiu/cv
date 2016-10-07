"use strict";
var Article = (function () {
    function Article(a) {
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
    return Article;
}());
exports.Article = Article;
var Tooltip = (function () {
    function Tooltip(c, app) {
        this.text = c.text;
        this.label = c.label;
        this.config = c.config ? c.config : 'multiline shadow';
    }
    return Tooltip;
}());
exports.Tooltip = Tooltip;
//# sourceMappingURL=app.types.js.map