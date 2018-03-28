
window.addEventListener('load', function() {
  $('select').formSelect();

  const numberSprint = 'sprint_1';
  const dataTraining = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      const uiduser = user.uid;

      firebase.database().ref('/TrainingManager/' + uiduser).on('value', snap => {
        const sede = snap.val().sede;
        firebase.database().ref('/users/' + uiduser).on('value', snap => {
          const nameTraining = snap.val().name;
          $('#data').append(`<div>${sede}-${nameTraining}</div>`);
        });
      });
    });
  };
  const fechaActual = () => {
    var f = new Date();
    $('#date').append(`${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}</div>`);
  };
  const getSprintActual = () => {
    firebase.database().ref('sprint').on('child_added', snapshot=> {
      const estado = snapshot.val().estado;
      if (estado == 1) {
        $('#NumberSprint').append(`Sprint:${snapshot.val().number}`);
      }
    });
  };
 
  const getSquads = () => {
    $('#sprint1').append(`<div>     

    <h4>Sprint1</h4></div>`);
    firebase.database().ref('/Squads/' + numberSprint).on('child_added', snapshot=> {
    
      const idJedi = snapshot.val().jedi;
      firebase.database().ref('/Jedi/' + idJedi).on('value', snap => {
      
        const jedi = snap.val().name;     
        $('#sprint1').append(`<div>
      <p>Squad: 
      ${snapshot.val().name}</p>
      <p>Jedi:${jedi}
       </p>
       <div id='jedi${snapshot.val().id}'>
       </div>
       <br/>
      </div>
      `);

      if (idJedi=="Jedi000"){
      getStudentsforSprint(0);
      getStudentsforSprint(1);
      getStudentsforSprint(2);
      getStudentsforSprint(3);
      getStudentsforSprint(4);

      }
    });

  });

};
  const getStudentsforSprint = (numbersquad)=>{
    firebase.database().ref('/Alumnas/').on('child_added', snapshot=> {

      const nsquad = snapshot.val().squads.sprint_2;
      
      if (nsquad == numbersquad) {
        $(`#jedi${numbersquad}`).append(`<div>
        ${snapshot.val().name.first} ${snapshot.val().name.last}
       
        </div>
        `);
        
      }
  });
}

  // Llamado de funciones
  dataTraining();
  fechaActual();
  getSprintActual();
  getSquads();
  $('#signOutBtna').click(function() {
    firebase.auth().signOut().then(function() {
      window.location.href = 'login.html';
    }).catch(function(error) {
      alert(error.message);
    });
  });
});


