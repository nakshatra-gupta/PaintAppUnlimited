if (screen.width > 992)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var mouseEvent = "Empty";
    var last_position_of_x ;
    var last_position_of_y ;
    var color = "Black";
    var width = 5;
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        mouseEvent = "mousedown";
    }
    
    canvas.addEventListener("mouseup", my_mouseup);
    
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }
    
    canvas.addEventListener("mouseleave", my_mouseleave);
    
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }
    canvas.addEventListener("mousemove", my_mousemove);
    
    function my_mousemove(e)
    {
         current_position_mouse_x = e.clientX-canvas.offsetLeft;
         current_position_mouse_y = e.clientY-canvas.offsetTop;
    
        if (mouseEvent == "mousedown")
        {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            
    
            ctx.moveTo(last_position_of_x, last_position_of_y);
    
    
            ctx.lineTo(current_position_mouse_x, current_position_mouse_y);
            ctx.stroke();
        }
        last_position_of_x = current_position_mouse_x;
        last_position_of_y = current_position_mouse_y;
    }
    function ClearArea()
    {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}

if (screen.width < 992)
{
    var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    new_width = screen.width - 70;
    new_height = screen.height - 300;
   
     if (screen.width < 992)
     {
         document.getElementById("myCanvas").width = new_width;
         document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
     }
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;


        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_position_of_x, last_position_of_y);

        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

function ClearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
} 
}