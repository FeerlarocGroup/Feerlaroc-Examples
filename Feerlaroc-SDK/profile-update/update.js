function exec(){
        //check whether the server is running
        if(feerlaroc.SERVER_STATE == "running"){
                //if it is running check whether the user is signed in or signup
                if((feerlaroc.AOUTH_STATE == "signedin")||(feerlaroc.AOUTH_STATE == "signedup")){
                        //read the text boxes
                        var m_name = $('#name').val();
                        var m_surname = $('#surname').val();
                        var m_number = $('#cellNo').val();
                        var m_username = $('#username').val();
                        var m_password = $('#password').val();
                        //update the profile information
                        feerlaroc.profile.update(m_name,m_surname,m_number,m_username,m_password);
                        alert(feerlaroc.AOUTH_STATE);
                }
        }else{
                        alert("The server is down");
        }
}
