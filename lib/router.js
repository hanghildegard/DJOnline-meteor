/**
 * Created by hangdominh on 21/04/15.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'startPage'});

Router.route('/genre', {name: 'genreMap'});

Router.route('/playlist', {name: 'playList'});