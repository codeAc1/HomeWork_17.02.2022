function start_1() {
  
    if (confirm("Secim et") == true)
     {
        document.getElementById("body").style.backgroundColor="black"
      }
       else
     {
        document.getElementById("body").style.backgroundColor="red"
    }
      
  }

  function start_2() {
    let age = prompt("User yaşını daxil etməlidir");
    
    if(isNaN(age))
    {
        alert("Ancaq rəqəm daxil edilməlidir !!!")
        start_2();


    }
    else
    {
        if (age != null) 
        {
            if(age<18)
            {
                alert(" Diqqət !!! siz bu sehifəyə daxil ola bilmərsiniz")
            }
            else{
                alert("Ugurlu giris")
            }
            
        }
        else{
            alert("bos olmaz")
        }
    }
    
  }