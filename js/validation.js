function fun() {
    //check username is empty***************************
    
    let msgs = document.getElementById("msg");

        // **************************************username validation
        let user = document.getElementById("text").value;
		if(user=="")
			{
				msgs.innerHTML = "plz enter username...";
                // alert("sdbasj")
				return false;
		}
			
		//check the length is between 5-10
		if(user.length<3||user.length>10)
            {
            msgs.innerHTML = " Plz enter username length 3-10 char...";
				return false;
        }
    
        // **************************Phone no validation
        let phone = document.getElementById("phone").value;
		//check field is empty
        if (phone == "") {
            msgs.innerHTML = "Enter phone number";
                return false;
        }

        //check enter data is only number
        if (!(phone > 0) && !(phone < 9)) {
            msgs.innerHTML = "enter numbers only";
            return false;
        }

        //check length of number
        if ((phone.length != 10)) {
            msgs.innerHTML = "enter 10 digit phone number"; 
                return false;
        }
        
    
    
    
        // ******************************Email validation
        let email = document.getElementById("email").value;
    if (email != "") {

        //email must include @
        let flag = 0;
        for (let i = 0; i < email.length; i++) {
            if (email.charCodeAt(i) == 64) {
                flag = 1;
            }
        }
        if (flag == 0) {
            msgs.innerHTML = "email must include @"; 
            return false;
        }
			
        //email doen't start with @
        if (email.charCodeAt(0) == 64) {
            msgs.innerHTML = "email doesn't start with @"; 
            return false;
        }

        //email must include (.) at 3rd last position
        if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
            msgs.innerHTML = "Plz enter valid email id"; 
            return false;
        }
    }
    
    
        // ***************************Location validation
        let loc = document.getElementById("loc").value;
        if(loc=="")
			{
				msgs.innerHTML = "plz enter Location...";
				return false;
		}
			
		//check the length is between 5-10
		if(loc.length<3)
            {
            msgs.innerHTML = "location length must greater than 3";
				return false;
    }
    msgs.innerHTML =""
}