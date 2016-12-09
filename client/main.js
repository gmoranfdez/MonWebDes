import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/series');
Router.route('/blog');
Router.route('/estadosgenerales');
Router.route('/info');
Router.route('/contacto');
Router.route('/', {
    name: 'home',
    template: 'home'
});
