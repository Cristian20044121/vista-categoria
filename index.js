var categoria=[];
  var myIndex;
  function addCategoria(){
    // veirificacion de campos input 
      let nombreCategoria1= document.getElementById("categoria-name").value;
        let descripcionCategoria = document.getElementById("descripcion-categoria").value;
          if (nombreCategoria1 === "" || descripcionCategoria === "") {
              const alert = document.getElementById('div');
                alert.className = 'alert alert-danger'
                  alert.role = 'alert'
                      alert.innerHTML = 'error campos de entrada vacíos'
                        setTimeout(() => {
                          alert.style.display = "none"
                        }, 5000);
                          if (alert.style.display === 'none') {
                              alert.style.display = 'block'
                          }
                          return;
          }
      // verifica si la categoria nueva ya esta en la tabla
      let nombreCategoria = document.getElementById("categoria-name").value;
        let categoriaExistente = categoria.find(categoria => categoria.name === nombreCategoria);
          if (categoriaExistente)  {
            const alert=  document.getElementById('div');
              alert.className = 'alert alert-danger'
                alert.role= 'alert'
                  alert.innerHTML = 'error la categoria ya existe'
                    setTimeout(()=>{
                      alert.style.display = "none"
                    },5000);
                      if(alert.style.display === 'none'){
                        alert.style.display = 'block'
                      }
          return;
          }
      let newCategoria={
        id:Math.floor(Math.random() * (10000 - 1000 + 1) + 1000),
          name:document.getElementById("categoria-name").value,
            email:document.getElementById("descripcion-categoria").value
      }
      categoria.push(newCategoria)

    // alerta de categoria registrada 
    const alerta = document.getElementById('div2')
      alerta.className = "alert alert-success"
        alerta.role = alert;
          alerta.innerHTML = 'Categoria registrada correctamente'
            setTimeout(()=>{
              alerta.style.display = "none"
            },5000)
              if(alerta.style.display === 'none'){
                  alerta.style.display = 'block'
              }
      // function displayCategoria 
      displayCategoria()
  }

  // funcion crear elementos 
  function displayCategoria(){
    document.getElementById("form-list-category-body").innerHTML=""
      for (i=0;i<categoria.length;i++){
        let myTr=document.createElement("tr")
          for(a in categoria[i]){
            let mytd=document.createElement("td")
              mytd.innerHTML=categoria[i][a]
                mytd.className= 'info'
                  myTr.appendChild(mytd)
          } 
          let actionTd=document.createElement("td")
            let editBtn=document.createElement("button")
              editBtn.innerHTML="Edit"
                editBtn.className = "btn btn-primary"
                  editBtn.setAttribute("onclick" , "editCategoria("+i+")")
                    let deletebtn=document.createElement("button")
                      deletebtn.innerHTML="Delete"
                        deletebtn.className = "btn btn-danger"
                          deletebtn.setAttribute("onclick" , "deleteCategoria("+i+")")
                        actionTd.appendChild(editBtn)
                      actionTd.appendChild(deletebtn)
                  myTr.appendChild(actionTd)
                document.getElementById("form-list-category-body").appendChild(myTr)
        }
      document.getElementById('categoria-id').value = ""
      document.getElementById("categoria-name").value="";
      document.getElementById("descripcion-categoria").value=""
      document.getElementById('buscar').value = "";
  }

  //Editar categoria
  function editCategoria(i){
    myIndex=i;
      let updatebtn=document.createElement("button")
        updatebtn.innerHTML="Update";
          updatebtn.setAttribute("onclick","updCategoria()")
            document.getElementById("saveupdate").innerHTML=""
              document.getElementById("saveupdate").appendChild(updatebtn);
                document.getElementById("categoria-id").value=categoria[i].id;
              document.getElementById("categoria-name").value=categoria[i].name;
            document.getElementById("descripcion-categoria").value=categoria[i].email;
          document.getElementById('buscar').value = "";
  }

  //actualizar categoria
  function updCategoria(){

    // verificacion de inputs
    let nombreCategoria1= document.getElementById("categoria-name").value;
      let descripcionCategoria = document.getElementById("descripcion-categoria").value;
        if (nombreCategoria1 === "" || descripcionCategoria === "") {
            const alert = document.getElementById('div');
              alert.className = 'alert alert-danger'
                alert.role = 'alert'
                  alert.innerHTML = 'error campos de entrada vacíos'
                  setTimeout(() => {
                      alert.style.display = "none"
                  }, 5000);
                if (alert.style.display === 'none') {
                      alert.style.display = 'block'
                }
        return;
        }

    // verifica si la categoria nueva ya esta en la tabla
    let nombreCategoria = document.getElementById("categoria-name").value;
      let categoriaExistente = categoria.find(categoria => categoria.name === nombreCategoria);
        if (categoriaExistente)  {
            const alert=  document.getElementById('div');
              alert.className = 'alert alert-danger'
                alert.role= 'alert'
                  alert.innerHTML = 'error la categoria ya existe'
                setTimeout(()=>{
                  alert.style.display = "none"
                },5000);
              if(alert.style.display === 'none'){
                alert.style.display = 'block'
              }
        return;
        }
      // alerta de editado correctamente 
      const alerta = document.getElementById('div2')
        alerta.className = "alert alert-success"
          alerta.role = alert;
            alerta.innerHTML = 'Categoria editada correctamente'
            setTimeout(()=>{
              alerta.style.display = "none"
            },5000)
          if(alerta.style.display === 'none'){
            alerta.style.display = 'block'
          }
      var updatedCategory={
        id:document.getElementById('categoria-id').value,
          name:document.getElementById("categoria-name").value,
            email:document.getElementById("descripcion-categoria").value
      }
      categoria[myIndex]=updatedCategory;
        var crbtn=document.createElement("button")
          crbtn.innerHTML="Save";
            crbtn.setAttribute("onclick","addCategoria()");
          document.getElementById("saveupdate").innerHTML="";
        document.getElementById("saveupdate").appendChild(crbtn);
      displayCategoria()
  }

  //eliminar categoria
  function deleteCategoria(i){
    categoria.splice(i,1)
      document.getElementById('buscar').value = "";
        displayCategoria()
  }

  // evento formulario 
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
  });

  // evento input de buscar categoria 
  document.getElementById('buscar').addEventListener('keyup', ()=>{
    let rows = document.querySelectorAll("table tbody tr");
      for (let i = 0; i < rows.length; i++) {
        let input = document.getElementById("buscar").value.toLowerCase();
          let nameCell = rows[i].querySelector("td:nth-child(2)");
            if (nameCell.textContent.toLowerCase().includes(input)) {
                rows[i].style.display = "";
              }else if(input=== ''){
                rows[i].style.display = "block";
              }
            else {
              rows[i].style.display = "none";
            }
      }
  })



