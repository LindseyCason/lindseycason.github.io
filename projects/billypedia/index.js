/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
//  $('div').css('color', 'black');
//  $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
//  $('.heading-quotes').css('color', 'white').css('padding-left', '10px');        
//  $('.quote').css('color', 'white').css('font-style', 'italic');
//  $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
//  $('#quotes:last-child').css('padding-bottom', '4px');
//  $('#section-quotes').prependTo('#sections');
//  $('#image-billy').attr('src', 'images/billy/billy-1.jpg');        
//  $('#section-bio p:last-child').remove();
//  let $section = $('<section>').attr('id', 'section-rider');
//  $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));

    $('#section-bio')
        .css('background-color', 'grey')
        .css('border-radius', '10px')
        .css('color', 'white')
        .css('padding-left', '20px')
        .css('padding-right', '20px')
        .css('padding-top', '10px')
        .css('padding-bottom','10px');
            
    $('#section-quotes')
        .css('background-color', 'grey')
        .css('border-radius', '10px');
    
    $('.heading-quotes')
        .css('color', 'white')
        .css('padding-left', '20px')
        .css('padding-top', '20px');
        
    
    
    $('.quote')
        .css('color', 'white')
        .css('font-style', 'bold')
        .css('padding-left', '10px')
        .css('padding-right','10px')
        .css('padding-bottom', '10px');
        //.css('padding-top', '10px');

        
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording, i, c) {
            var $li = $('<li>');
            $li.addClass('top-rated');
            $li.attr("id", i);
            var title = recording.title;
            $li.text(title);
            $li.appendTo($('#list-top-rated'));
        });
///////////////////////////////////



        $('<section>')
            .attr("id", "section-recordings")
            .appendTo($('#list-top-rated').parent())
            .css('background-color', '#669999')
            .css('padding-top', "10px")
            .css('padding-bottom', '10px')
            .css('padding-right', '10px')
            .css('font-size', '14px')
            .css('color', 'white')
            .css('border-radius', "10px");
        
        $('<ul>')
        .attr("id", "list-recordings")
        .appendTo($('#section-recordings'));
        
        // $("list-recordings")
        //     .css('color', 'blue')
        //     .css('font-style', "bold");
            
        // $ulListRec.append($secRec);
        // var $liClassRec = $(<li class = "recording">)
        //     .css('color', 'blue')
        //     .css('font-style', "bold");
        
        
        var topRec = data.discography.recordings;
        _.forEach(topRec, function(e, i, c){
            $('<li>')
                .addClass('recording')
                .attr("id", "record" + i)
                .css("padding-bottom", "10px")
                .appendTo($('#list-recordings'));
                
                    _.forEach(topRec[i], function(element, index, collection){
                        if (index !== "art") {
                            $('<div>')
                                .addClass(index)
                                .text(`${index[0].toUpperCase() + index.slice(1,index.length)}: ${element}`)
                                .appendTo($("#record" + i));
                            
                        }
                    }
                    );
        });
        ////////////////////////////////////////////
        
        
            

        $('<div>')
            .attr("id", "image-container-recording")
            .addClass("image-container-tr")
            .appendTo($("#header-top-rated"));
            
        $('<img>')
            .attr("id", "recording-image")
            .attr("src", topRated[0].art)
            .addClass("image")
            .appendTo($(".image-container-tr"))
            .css("padding-top", "10px")
            //.css("border-radius", "5px");
            //////////////////////////////////////////////////
        $('<div>')
            .attr("id", "image-container-records")
            .addClass("image-container-rec")
            .appendTo($("#header-top-rated"));
            
        $('<img>')
            .attr("id", "record-image")
            .attr("src", topRec[0].art)
            .addClass("image")
            .prependTo($('#list-recordings'))
            .css('padding-bottom', "10px");
            
            
            /////////////////////////////////////////////////////
            const images = data.images.billy
            var count = 0;
            var $bigImage = $('#image-billy')
            
            
            $bigImage.on('click', function(event) {
                count ++;
                if (count === images.length) {
                    count =0;
                }
                $bigImage.attr('src', images[count]);
            });
        /////////////////////////////////////////////////////
        
        //const $trImages = data.discography.topRated;
            //var count = 0;
            
            var $trImage = $('#recording-image');
            
            
            $('.top-rated').on('click', function(event) {
                var currentEvent = $(event.currentTarget);
                $('#recording-image')
                    .attr('src', topRated[currentEvent.attr('id')].art);
                    
            });
            
            ///////////////////////////////////////////////////
        
        var $rImage = $('#record-image');
            
            $('.recording').on('click', function(event) {
                var currentEvent = $(event.currentTarget);
                var index = currentEvent.attr('id');
                index.substring(index.length-1);
                $rImage
                    .attr('src', topRec[index.substring(index.length-1)].art);
                    
            });
        
        
        
        
        
        
        
        
        // .attr("id", "recording-image")
        //     .attr("src", topRated[0].art)
        
        
        
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


