

    var counter = 1;
    var face_link; 
    $('body').on('click', '.next', function() { 
        $('.container').hide();
    
        counter++;
        $('#content-'+counter+'').show();
        
        if(counter > 1) {
            $('.prev').show();
        };
        setStyle(counter); 
        if(counter > 9) {
            counter--; 
        };
        
    });
    
    $('body').on('click', '.prev', function() { 
        //alert(counter);
        counter--;
        $('.container').hide();
        var id = counter;    
        $('#content-'+id).show();
        
        setStyle(counter); 

        if(counter ==  1){
            $('.prev').hide();
        }
    });
    
    $('body').on('click', '.edit-previous', function() { 
        $('.end').hide();
        $('.content-holder').show();
        $('#content-3').show();
    });




    function setStyle (counter) {
        if (counter == 1) {
            document.body.style.backgroundImage = "url('Images/greeting_face.png'), url('Images/star_pattern.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = "370px 0px, center";
            document.body.style.backgroundSize = "900px 700px, auto";
            document.body.style.backgroundAttachment = "fixed";

        }
        else if (counter == 2) {
            document.body.style.backgroundImage = "url('Images/about.png'), url('Images/star_pattern.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = "370px 0px, center";
            document.body.style.backgroundSize = "900px 700px, auto";
            document.body.style.backgroundAttachment = "fixed";
        }
        else if (counter == 3 || counter == 4) {
            document.body.style.backgroundImage = "url('Images/about.png'), url('Images/hobbies.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = "370px 0px, fixed";
            document.body.style.backgroundSize = "900px 700px";
            document.body.style.backgroundAttachment = "fixed";
        }
        else if ( counter == 5) {
            document.body.style.backgroundImage = "url('Images/h_i_face.png'), url('Images/hobbies.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = " 370px 0px, fixed";
            document.body.style.backgroundSize = "900px 700px";
            document.body.style.backgroundAttachment = "fixed";
        }
        else if (counter == 6) {
            document.body.style.backgroundImage = "url('Images/h_i_face.png'), url('Images/math_back.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = " 370px 0px";
            document.body.style.backgroundSize = "900px 700px, cover";
            document.body.style.backgroundAttachment = "fixed";
        }
        else if (counter == 7) {
            document.body.style.backgroundImage = "url('Images/project_face.png'), url('Images/math_back.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = " 370px 0px";
            document.body.style.backgroundSize = "900px 700px, cover";
            document.body.style.backgroundAttachment = "fixed";
        }
        else if (counter == 8) {
            document.body.style.backgroundImage = "url('Images/project_face.png'), url('Images/recursive1.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = " 370px 0px";
            document.body.style.backgroundSize = "900px 700px, auto";
            document.body.style.backgroundAttachment = "fixed";
        }
        else {
            document.body.style.backgroundImage = "url('Images/links_face.png'), url('Images/recursive1.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = " 370px 0px";
            document.body.style.backgroundSize = "900px 700px, auto";
            document.body.style.backgroundAttachment = "fixed";
        }

       

    }

