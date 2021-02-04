var cssSelected = {
    margin : 0,
    'padding-bottom': '10px',
    'border-radius' : '2px 2px 0 0'
};

var cssUnselected = {
    'margin-bottom' : '4px',
    'padding-bottom': '5px',
    'border-radius' : '2px'
};



$(document).ready ( function () {

    //Evénement sur l'élément recherche droit.
    var $premierOnglet = $(".recherche-droite-onglet:nth-of-type(1)");
    var $secondOnglet = $(".recherche-droite-onglet:nth-of-type(2)");   

    // A chaque clique sur un onglet
    $(".recherche-droite-onglet").click( function () {       
        //On modifie l'onglet pour qu'il touche le formulaire
        $(this).css( cssSelected );
       if($(this)[0] == $premierOnglet[0]) { // Si c'est le premier onglet qui est cliqué
            $secondOnglet.css(cssUnselected);
            //On affiche le premier formulaire et on corrige un petit defaut d'affichage
            $("#f1").show().css("border-radius", "0 2px 2px 2px"); 
            $("#f2").hide();//On affiche le deuxieme formulaire
            
        } else {
            $premierOnglet.css(cssUnselected); // Si c'est le second onglet qui est cliqué
            $("#f2").show();
            $("#f1").hide();
        }
    });

    // Au demarrage, on affiche le premier formulaire et on selectionne le premier onglet
    $premierOnglet.trigger("click"); 

    //Popin
    var popin = false;
    $("*").click( function () {
        if(popin === true) {
            $("#popin").removeClass("popin-ON").empty();
        }
    })

    $(".popin").click( function (e) {  
              e.stopPropagation();
              if(e.target.nodeName === "IMG") {
        $("#popin").prepend($(this).html()).addClass("popin-ON");
              } else if (e.target.nodeName === "I") {
                e.preventDefault();
                console.log($(this));
                $("#popin").prepend("<iframe id=inlineFrameExample title=Inline Frame Example width=600 height=400 src="+$(this).attr("href")+"> </iframe>").addClass("popin-ON");
              };
        popin = true;
    })




})