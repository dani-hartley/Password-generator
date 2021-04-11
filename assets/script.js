// Password Generator Functions

//1. Present prompts for password criteria
//    *Length: Length must be 8-128 characters
//    *Character Type: Must include at least 1 character
//        *lowercase, 
//        *uppercase, 
//        *numeric, 
//        *and/or special characters
//2. Generate password that mights the critera
//        * Display in alert on written in page


//Password Variables - Arrays
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', ',', '.', '<', '>', '?', '/'];