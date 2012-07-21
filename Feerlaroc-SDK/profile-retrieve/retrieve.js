function exec(){
        //check whether the server is running
        if(feerlaroc.SERVER_STATE == "running"){
                //if it is running check whether the user is signed in or signup
                if((feerlaroc.AOUTH_STATE == "signedin")||(feerlaroc.AOUTH_STATE == "signedup")){
                        //retrieve the profile information
                        feerlaroc.profile.retrieve();
                        //show the retrieve information on the textboxes
                        $("#name").val(feerlaroc.LOCALATTRIBUTES.name);
                        $("#surname").val(feerlaroc.LOCALATTRIBUTES.surname);
                        $("#cellNo").val(feerlaroc.LOCALATTRIBUTES.mobile_number);
                        $("#username").val(feerlaroc.LOCALATTRIBUTES.username);
                        alert(feerlaroc.AOUTH_STATE);
                }
        }else{
                        alert("The server is down");
        }
}
