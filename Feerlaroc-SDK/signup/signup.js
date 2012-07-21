function exec(){
        //read the text boxes
        var m_name = $('#name').val();
        var m_surname = $('#surname').val();
        var m_number = $('#cellNo').val();
        var m_username = $('#username').val();
        var m_password = $('#password').val();
        //syncronise with the server and check whether it is running
        if(feerlaroc.SERVER_STATE == "running"){
        //if it is running signin
                feerlaroc.signup(m_name,m_surname,m_number,m_username,m_password);
                alert(feerlaroc.AOUTH_STATE);
        }else{
                alert("The server is down");
        }
}
