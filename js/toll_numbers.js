$(document).ready(function(){
    var firebaseConfig= (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/fb_config.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();
      firebase.initializeApp(firebaseConfig); 
      console.log("init");  
    
      firebase.auth().onAuthStateChanged (firebaseUser => {
        if (firebaseUser){
            console.log(firebaseUser.email);
        }
        else{
            console.log('not logged in');
            window.location = "signinwithphno.html";
        }
    });
    var listgrp = document.getElementById("lstgrp");
    var testlabs = (function() {
      var json = null;
      $.ajax({
        'async': false,
        'global': false,
        'url': "json/toll_numbers.json",
        'dataType': "json",
        'success': function(data) {
          json = data;
        }
      }); 
      return json;
    })();
  
  tollnums =  testlabs.data;
  tollnums.forEach(element => { 
  listgrp.innerHTML+=
  `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
  <div class="d-flex w-100 justify-content-between">
    <h5><b>${element.name}</b></h5>
  </div>
  <br>
  <p class="mb-1"><i class="fa fa-phone-alt" style="margin-right: 5px;"> </i> <span class="text-muted">Phone Number : </span>  ${element.phone_number}</p>
  </div>`;
  });   
  });