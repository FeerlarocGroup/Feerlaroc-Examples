function exec(){
         //check whether the server is running
        if(feerlaroc.SERVER_STATE == "running"){
                //if it is running check whether the user is signed in or signup
                if((feerlaroc.AOUTH_STATE == "signedin")||(feerlaroc.AOUTH_STATE == "signedup")){
                        //read the text boxes
                        var m_number = $('#cellNo').val();
                        var m_amount = $('#amount').val();
                        //sell airtime
                         feerlaroc.trade(m_number,m_amount);
                        alert(feerlaroc.AOUTH_STATE);
                }
        }else{
                        alert("The server is down");
        }
}
