CKEDITOR.plugins.add( 'div_generator', {
    icons: 'DivGenerator',
    init: function( editor ) {
        editor.addCommand( 'div_generator', new CKEDITOR.dialogCommand( 'divgeneratorDialog' ) );
        editor.ui.addButton( 'DivGenerator', {
            label: 'Generate a div with elements',
            command: 'div_generator',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'divgeneratorDialog', this.path + 'dialogs/divgeneratorDialog.js' );
    }
});
