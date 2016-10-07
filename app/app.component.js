"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_service_1 = require('./article.service');
var AppComponent = (function () {
    function AppComponent(articleService) {
        this.articleService = articleService;
        this.footer = '<p class="copyright">&copy; Andrei Gheorghiu</p>';
        this.tooltipHandle = '<i class="fa fa-2x fa-question-circle" aria-hidden="true"></i>';
        this.tooltipConfig = 'hint--large hint--rounded hint--top-left';
    }
    AppComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles().then(function (articles) {
            for (var _i = 0, articles_1 = articles; _i < articles_1.length; _i++) {
                var a = articles_1[_i];
                if (a.sections) {
                    for (var _a = 0, _b = a.sections; _a < _b.length; _a++) {
                        var s = _b[_a];
                        _this.initSection(s);
                    }
                    _this.activateSection(a.sections[0], a);
                }
            }
            _this.articles = articles;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        window['cvInit']();
    };
    AppComponent.prototype.activateSection = function (section, article) {
        for (var _i = 0, _a = article.sections; _i < _a.length; _i++) {
            var s = _a[_i];
            s.active = false;
        }
        setTimeout(function () {
            section.active = true;
            article.activeSection = section;
        }, 350);
    };
    AppComponent.prototype.initSection = function (section) {
        section.place = section.company && section.company.name ? " @ " + section.company.name : "";
        section.firstSubtitle = (section.title ? section.title : '') + (section.place ? ' ' + section.place : '');
        section.company && (section.secondSubtitle = (section.company.title ? section.company.title + " | " : "") + section.company.address);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: '[curriculumVitae]',
            providers: [article_service_1.ArticleService],
            templateUrl: './app/curriculum-vitae.html',
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map