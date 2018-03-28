window.addEventListener('load', function() {

  firebase.auth().onAuthStateChanged(function (user) {
    var uiduser = user.uid;
    firebase.database().ref('/TrainingManager/' + uiduser).on('value', snap => {
      console.log(snap.val().sede);
    })
    console.log(uiduser);
      if(user.uid)
      var dbRefObject = firebase.database().ref();
      organizar();
  
      function organizar() {
        // sincronizar cambios
        dbRefObject.on('value', function (snap) {
          console.log(snap.val());
        })
      }
    
  })
  
  $('#signOutBtna').click(function () {
    firebase.auth().signOut().then(function () {
      window.location.href = 'login.html';  

    }).catch(function (error) {
      alert(error.message);
    });
  })

    firebase.database().ref('Alumnas').on('value', function(snapshot) {
        var html = '';
      snapshot.forEach(function(e) {
        var element = e.val();
        var name = element.index;
        var email = element.english;
        html += '<li>' +
        ' ' + name + ' </li>';
      });
      $('#data').append(html);
    
    });

})




    