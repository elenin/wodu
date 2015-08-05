Ext.define('Wodu.view.BooksReading', {
    extend: 'Ext.navigation.View',
    xtype: 'booksreading',

    requires: [
        'Ext.TitleBar',         
        'Ext.XTemplate',
        'Ext.dataview.List'
    ],

    config: {       
        items: [{
              xtype: 'list',
              store: 'BooksReadingStore',
              itemHeight: 140,
              variableHeights: false,

              itemTpl: [
                '<div>',
                '<div class="pic"><img width="90" src="{image}" style="float:left;margin-right:10px;"></div>',
                '<div class="info"><h3>{title}</h3><span>{id}</span></div>',
                '</div>'
                ].join('')                
        }]      
    }
});