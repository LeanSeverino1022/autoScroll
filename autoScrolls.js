/* yi */
//this handles auto scrolling
//to be currently used for autoscrolling the boards container and the column items/cards

var autoScroll = (function(){

    var scrolling = false;

    function start(direction, obj) {        
        scrolling = true;

        switch (direction) {
            case 'left':
            case 'right':
                startHorizontalScroll(obj, 100, direction);
                break;
            case 'top':
            case 'bottom':
                startVerticalScroll(obj, 100, direction);
                break;
            default:
                console.error('invalid direction')
                break;
        }
    }

    // clearQueue indicates whether to remove queued animation. see jquery stop(). set to true by default 
    function stop(obj, clearQueue = true) {
        
        obj.stop(clearQueue);  

        scrolling = false;
    }

    function startHorizontalScroll(obj, spd, direction) {

        //todo maybe? determine if element scrolled to the end.. tbd: do I need to?
        //todo maybe? gradual change of speed? like trello
    
        var value;
        if (direction === 'left') {
            value = '-=' + spd + 'px';
        }
        else if (direction === 'right') {
            value = '+=' + spd + 'px'; /* forward */
        }       

        //  call startScrolling recursively.
        obj.animate({
            "scrollLeft": value
        }, 'fast', function () {
            startHorizontalScroll(obj, spd, direction);
        });

    }

    function startVerticalScroll(obj, spd, direction) {
    
        var value;

        if (direction === 'top') {
            value = '-=' + spd + 'px';
        }
        else if (direction === 'bottom') {
            value = '+=' + spd + 'px'; /* forward */
        }       

        //  call startScrolling recursively.
        obj.animate({
            "scrollTop": value
        }, 'fast', function () {
            startVerticalScroll(obj, spd, direction);
        });

    }


    // public
    return {
        start: start,
        stop:stop
    }


})();





// });