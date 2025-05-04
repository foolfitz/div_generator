CKEDITOR.dialog.add( 'divgeneratorDialog', function( editor ) {
    return {
        title: 'Div Generator',
        minWidth: 400,
        minHeight: 300,
        contents: [
            {
                id: 'tab-imgbox',
                label: '圖文框輸入工具',
                elements: [
                    {
                        type: 'text',
                        id: 'imgurl',
                        label: '影像網址',
                    },
                    {
                        type: 'text',
                        id: 'imgcaption',
                        label: '圖說',
                    }
                ]
            },
            {
                id: 'tab-right120',
                label: '右欄輸入工具',
                elements: [
                    {
                        type: 'text',
                        id: 'right120title',
                        label: '標題'
                    },

                    {
                        type: 'text',
                        id: 'right120img',
                        label: '圖片'
                    },
                    {
                        type: 'text',
                        id: 'right120body',
                        label: '內文'
                    },
                    {
                        type: 'text',
                        id: 'right120_atitle',
                        label: '文章標題'
                    },
                    {
                        type: 'text',
                        id: 'right120_aurl',
                        label: '文章連結'
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            var right120 = editor.document.createElement( 'div' );
            var right120title = dialog.getValueOf( 'tab-right120', 'right120title' );
            var right120img = dialog.getValueOf( 'tab-right120', 'right120img' );
            var right120body = dialog.getValueOf( 'tab-right120', 'right120body' );
            var right120_atitle = dialog.getValueOf( 'tab-right120', 'right120_atitle' );
            var right120_aurl = dialog.getValueOf( 'tab-right120', 'right120_aurl' );
            
            if ( right120title ){
                right120.addClass('right_120');
                right120.appendHtml( '<div class="title">' + right120title + '</div>' );
                right120.appendHtml( '<img src="' + right120img + '">' );
				right120.appendHtml('<p>' + right120body + '〈<a class="use-ajax" data-dialog-options="{&quot;width&quot;:700,&quot;dialogClass&quot;:&quot;colorbox-load&quot;}" data-dialog-type="modal" href="' + right120_aurl + '">' + right120_atitle + '</a>〉</p>');
                
                editor.insertElement( right120 );

            }
        }
    };
});

