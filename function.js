<script>
      
    function check(){
    if(document.getElementById('selectbox1').value!='')
      document.getElementById('FtSUBSelection').disabled=false;
    else
      document.getElementById('FtSUBSelection').disabled=true;
     }
  
     $(document).ready(function() {
    $('#selectbox1').on('change', function() {
      if (this.value == '0') {
        $("#FtSUBSelection1").show();
        $("#FtSUBSelection").hide();
        $("#FtSUBSelection2").hide();
        $("#FtSUBSelection3").hide();
        $("#FtSUBSelection4").hide();
        $("#FtSUBSelection5").hide();
      } 
      else if(this.value == '1')
      {
        $("#FtSUBSelection").show();
        $("#FtSUBSelection1").hide();
        $("#FtSUBSelection2").hide();
        $("#FtSUBSelection3").hide();
        $("#FtSUBSelection4").hide();
        $("#FtSUBSelection5").hide();
        
  
      }
      else if(this.value == '2')
      {
        $("#FtSUBSelection").hide();
        $("#FtSUBSelection1").hide();
        $("#FtSUBSelection2").show();
        $("#FtSUBSelection3").hide();
        $("#FtSUBSelection4").hide();
        $("#FtSUBSelection5").hide();
      }
      else if(this.value == '3')
      {
        $("#FtSUBSelection").hide();
        $("#FtSUBSelection1").hide();
        $("#FtSUBSelection2").hide();
        $("#FtSUBSelection3").show();
        $("#FtSUBSelection4").hide();
        $("#FtSUBSelection5").hide();
      }
      else if(this.value == '4')
      {
        $("#FtSUBSelection").hide();
        $("#FtSUBSelection1").hide();
        $("#FtSUBSelection2").hide();
        $("#FtSUBSelection3").hide();
        $("#FtSUBSelection4").hide();
        $("#FtSUBSelection5").hide();
        
      }
      else if(this.value == '5')
      {
        $("#FtSUBSelection").hide();
        $("#FtSUBSelection1").hide();
        $("#FtSUBSelection2").hide();
        $("#FtSUBSelection3").hide();
        $("#FtSUBSelection4").hide();
        $("#FtSUBSelection5").show();
        
      }
      
     
    });
  });
  
      </script>