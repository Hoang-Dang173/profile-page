
//All codes below are Jquery syntaxed. 

var counter = 1;
var face_link; 
//if button next is clicked,
$('body').on('click', '.next', function() { 
    $('.container').hide();
    //increase counter per click
    counter++;
    if (counter <= 9) {
        // show corresponding pages based on counter
        $('#content-'+counter+'').show();
    }
    
    if(counter > 1) {
        // show button prev from page 1 onwards
        $('.prev').show();
    };
    // set styles for each page 
    setStyle(counter); 
    if(counter == 10) {
        // 'next' button is hidden in last page and show end div. 
        $('.next').hide(); 
        $('#end').show(); 
    };
    
});

// prev button effect: symmetrical to when the next button is clicked. 
$('body').on('click', '.prev', function() { 
    counter--;
    $('.container').hide();
    var id = counter;    
    $('#content-'+id).show();
    
    setStyle(counter); 

    if(counter <= 9) {
        $('.next').show();
    };

    if(counter ==  1){
        $('.prev').hide();
    }
});

// Set style for each click - mainly background details
// Alternatively another function could be used to avoid repetitions but this way makes the designing process more flexible. 
function setStyle (counter) {
    if (counter == 1) {
        document.body.style.backgroundImage = "url('Images/face_background/greeting_face.png'), url('Images/Background/star_pattern.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = "370px 0px, center";
        document.body.style.backgroundSize = "900px 700px, auto";
        document.body.style.backgroundAttachment = "fixed";

    }
    else if (counter == 2) {
        document.body.style.backgroundImage = "url('Images/face_background/about.png'), url('Images/Background/star_pattern.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = "370px 0px, center";
        document.body.style.backgroundSize = "900px 700px, auto";
        document.body.style.backgroundAttachment = "fixed";
    }
    else if (counter == 3 || counter == 4) {
        document.body.style.backgroundImage = "url('Images/face_background/about.png'), url('Images/Background/hobbies.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = "370px 0px, fixed";
        document.body.style.backgroundSize = "900px 700px";
        document.body.style.backgroundAttachment = "fixed";
    }
    else if ( counter == 5) {
        document.body.style.backgroundImage = "url('Images/face_background/h_i_face.png'), url('Images/Background/hobbies.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = " 370px 0px, fixed";
        document.body.style.backgroundSize = "900px 700px";
        document.body.style.backgroundAttachment = "fixed";
    }
    else if (counter == 6) {
        document.body.style.backgroundImage = "url('Images/face_background/h_i_face.png'), url('Images/Background/math_back.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = " 370px 0px";
        document.body.style.backgroundSize = "900px 700px, cover";
        document.body.style.backgroundAttachment = "fixed";
    }
    else if (counter == 7) {
        document.body.style.backgroundImage = "url('Images/face_background/project_face.png'), url('Images/Background/math_back.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = " 370px 0px";
        document.body.style.backgroundSize = "900px 700px, cover";
        document.body.style.backgroundAttachment = "fixed";
    }
    else if (counter == 8) {
        document.body.style.backgroundImage = "url('Images/face_background/project_cry.png'), url('Images/Background/recursive1.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = " 370px 0px";
        document.body.style.backgroundSize = "900px 700px, auto";
        document.body.style.backgroundAttachment = "fixed";
    }
    else if (counter == 9) {
        document.body.style.backgroundImage = "url('Images/face_background/links_face.png'), url('Images/Background/recursive1.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = " 370px 0px";
        document.body.style.backgroundSize = "900px 700px, auto";
        document.body.style.backgroundAttachment = "fixed";
    }
    else {
        document.body.style.backgroundImage = "url('Images/face_background/bye_face.png'), url('Images/Background/recursive1.jpg')";
        document.body.style.backgroundRepeat = "no-repeat, repeat";
        document.body.style.backgroundPosition = " 370px 0px";
        document.body.style.backgroundSize = "900px 700px, auto";
        document.body.style.backgroundAttachment = "fixed";
    }
}

