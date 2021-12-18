(function () {
    //Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevatarea = document.getElementById("btn-agregar");

    //funciones
    var agregarTarea = function () {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("list-group-flush"),
            enlace = document.createElement("list-group-item"),
            contenido = document.createTextNode(tarea);
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agregar tarea valida");
            tareaInput.className = "form-control is-invalid";
            return false;
        }
        //agregamos el contenido 
        enlace.appendChild(contenido);
        //le estableemos un atributo href
        enlace.setAttribute("href", "#");
        //agregamos enlace(a) nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        //agregamos tarea a la lista(li)
        lista.appendChild(nuevaTarea)
        tareaInput.value = ""
        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function () {
                this.parentNode.removeChild(this);

            })
        }
    }
    var comprobarInput = function () {
        tareaInput.className = 'form-control';
        tareaInput.setAttribute("placeholder", "Agrega tu tarea")
    }
    var eliminarTarea = function () {
        this.parentNode.removeChild(this);
    }
    //Eventos:
    //Evento agregar tarea
    btnNuevatarea.addEventListener("click", agregarTarea)

    //Comprobar input para que no este vacio
    tareaInput.addEventListener("click", comprobarInput)
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea)
    }


}())