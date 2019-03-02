import HelloWorldApp from './main-view-model';
import { Page } from 'ui/page';
import { EventData } from 'data/observable';

var model = new HelloWorldApp();

function pageLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = model;
}

function onNavigatingTo(args: EventData) {
    var page = <Page>args.object;

    page.bindingContext = model;
}

exports.onNavigatingTo = onNavigatingTo;
