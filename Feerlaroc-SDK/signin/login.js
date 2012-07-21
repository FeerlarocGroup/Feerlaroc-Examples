 function exec(){
        //read the text boxes
        var m_username = $('#username').val();
        var m_password = $('#password').val();
        //syncronise with the server and check whether it is running
        if(feerlaroc.sync() == "running"){
                //if it is running signin
                feerlaroc.login("","","",m_username,m_password);
                alert(feerlaroc.AOUTH_STATE);
        }else{
                alert("The server is down");
        }
}
