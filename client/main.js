import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './layouts/blog/blog_layout.html';
import './layouts/contacto/contacto_layout.html';
import './layouts/estadosgenerales/estadosgenerales_layout.html';
import './layouts/home/home_layout.html';
import './layouts/info/info_layout.html';
//import './layouts/main/main_layout.html';
//import './layouts/main/navigation_layout.hmtl';
import './layouts/series/series_layout.html';


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
