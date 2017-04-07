var m = 0; 
var deci_pressed = false;
function clr_disp()
{
   document.getElementById("disp").value = '';
   deci_pressed = false;
}
function fn_display(n)
{
   document.getElementById("disp").value = n;
}
function disp_val(n)
{
	//Check if . is pressed second time	
	if (n== "." && deci_pressed == true)
	{	
	   alert("Second .");
	   //Don't add the . to the number
	}
	else
	{
	   //window.alert("ok");
	   if (document.getElementById("disp").value.length == 0 && n == ".")
	   {
		    document.getElementById("disp").value = "0.";
			deci_pressed = true;
	   }   
	   else
	   {
	        document.getElementById("disp").value += n;
       }
	}
}
function eval_num()
{
	try
	{
		fn_display(eval(document.getElementById("disp").value));
	}
	catch(e)
	{
	    fn_display('Error');
	}
}
function deci_chk()
{}
function mem_plus()
{
	if (document.getElementById("disp").value != '')
	{	
		m +=  '+' + document.getElementById("disp").value;  // Concatenate + symbol and the value on the display to m
		m = eval(m);
		//alert(m);
    }
}

function mem_rcall()
{
	//alert(m);
    fn_display(m);
}   
function mem_minus()
{
	if (document.getElementById("disp").value != '')
	{	
		m +=  '-' + document.getElementById("disp").value;  // Concatenate - symbol and the value on the display to m
		m = eval(m);
		//alert(m);
    }
}
