$(document).ready(function(){


    //Slider
    if(window.location.href.indexOf('index')>-1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: true
        });
         //Post
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el ' + moment().date() +  " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet iaculis, vulputate nisi erat mollis penatibus dictum feugiat netus quam, convallis luctus scelerisque eros posuere mattis porta orci. Duis sociosqu nisi porttitor semper aliquam hendrerit, dictumst laoreet penatibus proin molestie. Conubia sociis fermentum torquent odio"
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el' + moment().date() +  " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet iaculis, vulputate nisi erat mollis penatibus dictum feugiat netus quam, convallis luctus scelerisque eros posuere mattis porta orci. Duis sociosqu nisi porttitor semper aliquam hendrerit, dictumst laoreet penatibus proin molestie. Conubia sociis fermentum torquent odio"
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el' + moment().date() +  " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet iaculis, vulputate nisi erat mollis penatibus dictum feugiat netus quam, convallis luctus scelerisque eros posuere mattis porta orci. Duis sociosqu nisi porttitor semper aliquam hendrerit, dictumst laoreet penatibus proin molestie. Conubia sociis fermentum torquent odio"
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el' + moment().date() +  " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet iaculis, vulputate nisi erat mollis penatibus dictum feugiat netus quam, convallis luctus scelerisque eros posuere mattis porta orci. Duis sociosqu nisi porttitor semper aliquam hendrerit, dictumst laoreet penatibus proin molestie. Conubia sociis fermentum torquent odio"
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el' + moment().date() +  " de " + moment().format("MMMM")+ " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet iaculis, vulputate nisi erat mollis penatibus dictum feugiat netus quam, convallis luctus scelerisque eros posuere mattis porta orci. Duis sociosqu nisi porttitor semper aliquam hendrerit, dictumst laoreet penatibus proin molestie. Conubia sociis fermentum torquent odio"
        },
    ];

    posts.forEach((item, index) => {
        var post = `
                    <article class = "post">
                                    <h2>${item.title}</h2>
                                    <span class = "date">
                                        ${item.date}
                                    </span>
                                    <p>
                                       ${item.content}
                                    </p>
                                    <a href="#" class="button-more">Leer mas</a>
                                </article>
        `;
        console.log(post)
        $("#posts").append(post)
    });
    console.log(posts)
    }


   
/*
    
*/
//Selector de temas
    var estilo = $("#theme");
    $("#to-green").click(function(){
        estilo.attr("href", "css/green.css");
        console.log("soy green");
    });

    $("#to-red").click(function(){
        estilo.attr("href", "css/red.css");
        console.log("soy red");
    });

    $("#to-blue").click(function(){
        estilo.attr("href", "css/blue.css");
        console.log("soy blue");
    });

    //Scroll arriba de la web

    $(".subir").click(function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name")
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p")
        $("#about p").html("<br><strong>Bienvenido, "+ form_name) + "</strong>";
        about_parrafo.append("<a href = '#' id = 'logout'> Cerrar sesion </a>")
        
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });   
    }

    // acordeon
    if(window.location.href.indexOf('about')>-1){ 
        $("#acordeon").accordion();
    }
    //Reloj
    if(window.location.href.indexOf('reloj')>-1){ 
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj)
        },1000);

    };


    if(window.location.href.indexOf('contactos')>-1){ 
        $("form input[name ='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    };
});