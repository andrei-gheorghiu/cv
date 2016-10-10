///<reference path="../typings/index.d.ts"/>
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './app.type';

@Component({
    selector: '[curriculumVitae]',
    providers: [ArticleService],
    templateUrl: './app/curriculum-vitae.html',
})

export class AppComponent implements OnInit, AfterViewChecked {
    abstract;

    footer = '<div class="copyright">&copy; Andrei Gheorghiu</div>';
    articles:Article[];
    tooltipConfig:string;

    constructor(private articleService:ArticleService) {
        this.tooltipConfig = 'hint--large hint--rounded hint--top-left';
    }

    getArticles():void {
        this.articleService.getArticles().then((articles) => {
            for (let a of articles) {
                if (a.sections) {
                    for (let s of a.sections) this.initSection(s);
                    this.activateSection(a.sections[0], a);
                }
            }
            this.articles = articles
        })
    }

    ngOnInit():void {
        this.getArticles();
    }

    ngAfterViewChecked():void {
        window['cvInit']();
    }

    activateSection(section, article):void {
        for (let s of article.sections) {
            s.active = false;
        }
        setTimeout(()=> {
            section.active = true;
            article.activeSection = section;
        }, 350)

    }

    initSection(section):void {
        section.place = section.company && section.company.name ? " @ " + section.company.name : "";
        section.firstSubtitle = (section.title ? section.title : '') + (section.place ? ' ' + section.place : '');
        section.company && (section.secondSubtitle = (section.company.title ? section.company.title + " | " : "") + section.company.address);
    }

}



