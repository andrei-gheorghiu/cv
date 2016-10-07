"use strict";
var Section = (function () {
    function Section(s) {
        this.init(s);
    }
    Section.prototype.init = function (a) {
        a.ofComp = a.company && a.company.name ? ' @ ' + a.company.name : '';
    };
    return Section;
}());
exports.Section = Section;
//# sourceMappingURL=section.js.map