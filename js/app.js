$(window).load(function() {
    // setInterval(function() {
    //     console.log('mojamoja');
    // }, 1000);
});

var App = {
    // NameSpaces
    Models: {},
    Collections: {},
    Views: {},

    run: function() {
        this.debugPanelView = new App.Views.DebugPanelView();
        this.mainView = new App.Views.MainView();
    }
}

//-------------------
// Models
//-------------------
App.Models.Worker = Backbone.Model.extend({
    urlRoot: 'workers.php'
});

//------------------------
// Collections
//------------------------
App.Collections.Workers = Backbone.Collection.extend({
    url: 'workers.php',
    model: App.Models.Worker
});

//-------------------
// Views
//-------------------
App.Views.DebugPanelView = Backbone.View.extend({
    el: '#debug-panel',

    events: {
        'click .btn-show-next-worker': 'showNextWorker'
    },

    showNextWorker: function() {
        console.info('showNextWorker');
        App.mainView.fetchWorker();
    }
});

App.Views.MainView = Backbone.View.extend({
    el: '#container',

    _previousContentHtml: '',

    initialize: function(options) {
        _.bindAll(this, 'fetchWorker')

        this.$name = this.$('worker-name');
        this.$description = this.$('worker-description');
        this.$photo = this.$('.worker-photo');
        this.template = _.template($('#template-details').html());
        this.workers = new App.Collections.Workers();

        var self = this;

        this.listenTo(this.workers, 'all', function(type, model, collection, response) {
            console.info('mainView.workers ' + type);
        });

        this.listenTo(this.workers, 'add', function(model, collection, options) {
            console.info('mainView.workers added');
            console.log(model.attributes);
            console.log(model.toJSON());
            this.render(model.attributes)
            console.log(collection);
            console.log(options);
        });
    },

    fetchWorker: function() {
        console.log('fetchWorker');
        this.workers.fetch();
    },

    // ページ送りエフェクトのための処理
    // 1. 現在の HTML を新たな DOM にコピーする。
    // 1. 取得した JSON をテンプレートを代入する。
    // 1. 
    // 1. 古い DOM を廃棄する。
    render: function(attributes) {
        this._previousContentHtml = this.$el.html();
        console.log(this._previousContentHtml);

        this.$el.html(this.template(attributes));
        return this;
    }
});

$(function() {
    console.info('App.run()');
    App.run();
});