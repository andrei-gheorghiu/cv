"use strict";
var Article = (function () {
    function Article(a) {
        var _this = this;
        /*for (let prop of ['header','body','icons','nav','sections','activeSection'])
            if ('undefined' == typeof a[prop]) a.prop = false;*/
        (function () { return _this.init(a); });
    }
    Article.prototype.init = function (a) {
        if (a.sections) {
            var _loop_1 = function(s) {
                (function () { return s.init(s); });
            };
            for (var _i = 0, _a = a.sections; _i < _a.length; _i++) {
                var s = _a[_i];
                _loop_1(s);
            }
            a.activeSection || (a.activeSection = a.sections[0]);
        }
    };
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map