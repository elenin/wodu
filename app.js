/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'Wodu',

    requires: [
        'Ext.MessageBox',
        'Wodu.util.Util'
    ],

    views: [
        'Login', 'Main', 'BooksReadingNaviView', 'BooksWishNaviView', 'BooksReadNaviView', 'SearchBooksNaviView'
    ],

    controllers: [
        'Login', 'Main', 'BooksReading', 'BooksWish', 'BooksRead', 'BookDetails', 'SearchBooks'
    ],    

    stores: [
        'BooksReadingStore', 'BooksWishStore', 'BooksReadStore', 'SearchBooksStore'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var login = Ext.create('Wodu.view.Login');
        Wodu.util.Util.checkLogin(
          function() { // success
            var main = Ext.create('Wodu.view.Main');
            Ext.Viewport.add([login, main]);
            Ext.Viewport.animateActiveItem(main, {type: 'slide', direction: 'left'});
          },

          function() { // failure
            Ext.Viewport.add(login);
          }
        );

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
