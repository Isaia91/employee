var identifiant = null; // variable global recevant la valeur de l'id pour pouvoir l'utiliser dans des fonctions

/* Fonction pour mettre a jour un item

function edititem() {
  console.log(" welcom  in function editiem for the id :" + id);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
    } else {
      //document.getElementById("adress-output").innerHTML="error";
      //console.log("dans le else de la fonction alter");
    }
  };
  xhttp.open(
    "UPDATE",
    "https://6057e432c3f49200173ad08d.mockapi.io/employees/" + id,
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send(
    "name=" +
      document.getElementById("alteritemname").value +
      "&" +
      "last_name=" +
      document.getElementById("alteritemlast_name").value +
      "&" +
      "job_title=" +
      document.getElementById("alteritemjob_title").value +
      "&" +
      "email=" +
      document.getElementById("alteritememail").value
  );
}*/

function deleteitem(id) {
  console.log("welcome in function deleteitem for the id :" + id);
  var result = confirm("Vous allez supprimer l'élément");
  if (result == true) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var x = this.responseText;
        var xparsed = JSON.parse(x);
        //console.log(xparsed);
      } else {
      }
    };
    xhttp.open(
      "DELETE",
      "https://6057e432c3f49200173ad08d.mockapi.io/employees/" + id,
      true
    );
    xhttp.send(JSON.stringify({ id: id }));
    console.log("success for the function delete item," + id + " is deleted");
    //console.log(id);
  } else {
  }
}

function fill(id) {
  console.log(
    "welcome in fill function to fill a form with details from " + id
  );
  console.log(
    "send at :https://6057e432c3f49200173ad08d.mockapi.io/employees/" + id
  );
  identifiant = id; // Recoit la valeur de id
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      //console.log(xparsed.id);
      const info = document.getElementById("jsp");
      document.getElementById("alteritemlast_lastname").value =
        xparsed.last_name;
      document.getElementById("alteritemfirst_name").value = xparsed.name;
      document.getElementById("alteritemjob_title").value = xparsed.job_title;
      document.getElementById("alteritememail").value = xparsed.email;
    } else {
    }
  };
  xhttp.open(
    "GET",
    "https://6057e432c3f49200173ad08d.mockapi.io/employees/" + id,
    true
  );
  xhttp.send();
  console.log("fill function success for the id : " + id);
}

function bonjour(identifiant) {
  console.log("welcome in alter function to update, the item," + identifiant);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
    } else {
    }
  };
  xhttp.open(
    "PUT",
    "https://6057e432c3f49200173ad08d.mockapi.io/employees/" + identifiant,
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send(
    "name=" +
      document.getElementById("alteritemfirst_name").value +
      "&" +
      "last_name=" +
      document.getElementById("alteritemlast_lastname").value +
      "&" +
      "job_title=" +
      document.getElementById("alteritemjob_title").value +
      "&" +
      "email=" +
      document.getElementById("alteritememail").value
  );
}

/*Remplir le tableau avec les données*/
function lance() {
  console.log(
    "welcome in lance function to get data from api and fill a html table"
  );
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      const info = document.getElementById("j1");
      //*for (let i = 0; i < xparsed.length; i++) {
      // var newlist= xparsed[i]
      //console.log("typeof info", typeof info);
      xparsed.forEach((element) => {
        info.innerHTML +=
          "<tr>" +
          //info.innerHTML +=
          "<td>" +
          element.id +
          "</td>" +
          "<td>" +
          element.last_name +
          "</td>" +
          "<td>" +
          element.name +
          "</td>" +
          "<td>" +
          element.job_title +
          "</td>" +
          "<td>" +
          element.email +
          "</td>" +
          '<td><button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#test" onclick="fill(' +
          element.id +
          ');"><i class="fas fa-pencil"></i></button></td>' + //recupere l'id par ligne avec le element.id que l'on passe en parametre de fonctions pour les modif
          '<td><button type="button"  class="btn btn-danger" onclick="getid(' +
          element.id +
          ");deleteitem(" +
          element.id +
          ')" data-toggle="modal" data-target="#myModaltodelete" title="Delete"><i class="fas fa-trash fa-inverse"></i></button></td>'; //recupere l'id par ligne avec le element.id que l'on passe en parametre de fonctions pour les suppressions
        info.innerHTML += "</tr>";
        //});
      });
    } else {
      //document.getElementById("adress-output").innerHTML="error";
      //console.log("dans le else de la fonction lance");
    }
  };
  xhttp.open(
    "GET",
    "https://6057e432c3f49200173ad08d.mockapi.io/employees",
    true
  );
  xhttp.send();
}

/*Funtion permettant d'ajouter un item a la liste*/
function additem() {
  console.log("welcome to additem function, to add item with post methdod");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      //console.log(xparsed);
    } else {
      //document.getElementById("adress-output").innerHTML="error";
      //console.log("dans le else de la fonction alter");
    }
  };
  xhttp.open(
    "POST",
    "https://6057e432c3f49200173ad08d.mockapi.io/employees",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  //poster les valeurs des champs du formulaire de la modale
  xhttp.send(
    "name=" +
      document.getElementById("newitemlast_name").value +
      "&" +
      "last_name=" +
      document.getElementById("newitemname").value +
      "&" +
      "job_title=" +
      document.getElementById("newitemjob_title").value +
      "&" +
      "email=" +
      document.getElementById("newitememail").value
  );
  //console.log("apres le send de obj");
    console.log(
    "You posted : name = " +
      document.getElementById("newitemlast_name").value +
      " & " +
      "last_name = " +
      document.getElementById("newitemname").value +
      " & " +
      "job_title = " +
      document.getElementById("newitemjob_title").value +
      " & " +
      "email = " +
      document.getElementById("newitememail").value
  );
}

/*Function pour récupérer un item de la liste*/
function getid(id) {
  console.log("welcome to getid function, to get data from id like, " + id);
  /** pour parcourir le tableau
            var rows = document.getElementById("j1").rows;
            for (i = 0; i < rows.length; i++) {
                rows[i].onclick = (function () {
                  return function () {
                    var id = this.cells[0].innerHTML;
                    var nom = this.cells[1].innerHTML;
                    var ijob = this.cells[2].innterHTML;
                    return id
                  alert("id:" + id +"\n"+ "name:"+nom+ "\n"+ "job title: "+ ijob);
                  console.log(id )
                  };
                  
                })(rows[i]);
            }
            console.log(id)*/

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = this.responseText;
      var xparsed = JSON.parse(x);
      //console.log(xparsed)

      //*for (let i = 0; i < xparsed.length; i++) {
      // var newlist= xparsed[i]
      //console.log("le retour du get pour un id est:"+ xparsed);
    } else {
      //document.getElementById("adress-output").innerHTML="error";
      //console.log("dans le else de la fonction lance");
    }
  };
  xhttp.open(
    "GET",
    "https://6057e432c3f49200173ad08d.mockapi.io/employees/" + id,
    true
  );
  xhttp.send();
  return id;
}

/*
        function showdeletemodal(id){
          console.log("l'id de ce showdeletemodal est :" + id)
            /** pour parcourir le tableau
            var rows = document.getElementById("j1").rows;
            for (i = 0; i < rows.length; i++) {
                rows[i].onclick = (function () {
                  return function () {
                    var id = this.cells[0].innerHTML;
                    var nom = this.cells[1].innerHTML;
                    var ijob = this.cells[2].innterHTML;
                    return id
                  alert("id:" + id +"\n"+ "name:"+nom+ "\n"+ "job title: "+ ijob);
                  console.log(id )
                  };
                  
                })(rows[i]);
            }
            console.log(id)

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              var x = this.responseText;
              var xparsed = JSON.parse(x);
              console.log(xparsed)
            } else {}
          };
          xhttp.open(
            "GET",
            "https://6057e432c3f49200173ad08d.mockapi.io/employees/"+id,
            true
          );
          xhttp.send();
          
        }
          
          function Supprimeritem(id){
            
            
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              var x = this.responseText;
              var xparsed = JSON.parse(x);
              console.log(xparsed)
              
              //*for (let i = 0; i < xparsed.length; i++) {
              // var newlist= xparsed[i]
              //console.log("le retour du get pour un id est:"+ xparsed);
            } else {
              //document.getElementById("adress-output").innerHTML="error";
              //console.log("dans le else de la fonction lance");
            }
          };
          xhttp.open(
            "DELETE",
            "https://6057e432c3f49200173ad08d.mockapi.io/employees/"+id,
            true
          );
          xhttp.send(JSON.stringify({id: id,}));
            console.log('tu as bien supprimer l item')
            console.log(id)
          }
          */
