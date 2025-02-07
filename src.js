
var no_box = document 
        .querySelector('.no-box'); 
          
    var i = 1; 
    var heading = document.querySelector('.heading'); 
    
    function prev() { 
      
        // Start position  
        if (i == 1) { 
      
            // Add disabled attribute on 
            // prev button 
            document.getElementsByClassName( 
                    'prev').disabled = true; 
      
            // Remove disabled attribute  
            // from next button  
            document.getElementsByClassName( 
                    'next').disabled = false; 
        } else { 
            i--; 
            reset_animation()
            return setNo(); 
        } 
    } 
      
    function next() { 
      
        // End position 
        if (i == 5) { 
      
            // Add disabled attribute on  
            // next button 
            document.getElementsByClassName( 
                    'next').disabled = true; 
      
            // Remove disabled attribute 
            // from prev button 
            document.getElementsByClassName( 
                    'prev').disabled = false; 
        } else { 
            i++; 
            reset_animation()
            return setNo(); 
        } 
    } 
      
    function setNo() { 
        if ( i === 1) {
            document.body.style.backgroundImage = "url('Images/innerworld.png'), url('Images/recursive_tree.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, no-repeat";
            document.body.style.backgroundPosition = "60% 10%, center";
            document.body.style.backgroundSize = "900px 700px, 100% 200%";

            heading.innerHTML = "Greetings!";
            return no_box.innerHTML = "I am Hoang. Welcome to my world!\n"; 
        }
        else if (i === 2) {
            document.body.style.backgroundImage = "url('Images/innerworld.png'), url('Images/recursive1.jpg')";
            document.body.style.backgroundRepeat = "no-repeat, repeat";
            document.body.style.backgroundPosition = "60% 10%";
            document.body.style.backgroundSize = "900px 700px, auto";
            
            heading.innerHTML = "Interest & Hobbies"; 
             
            return no_box.innerHTML = "My hobbies include playing chess, solving challenging \n mathematical problems (I am" +
            "slightly maschochist, as the dissected face suggest LOL), and playing video games \n\n\n"; 
        }
        // Change innerhtml 
       
    } 


    $('button').click(function(){
        // restart animation
        var me = no_box;
        me.style.Animation = 'none';
        setTimeout(function() {
            me.style.Animation = '';
        }, 10);
    });

    function reset_animation() {
        no_box.style.animation = 'none';
        no_box.offsetHeight; /* trigger reflow */
        no_box.style.animation = null; 
    }