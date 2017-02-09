
    $("form").submit(function (e) {
        var lista= new Array ();
        $tarefa = $("#texto").val();
        $("ul").append("<li>" + $tarefa + "</li>");
        $("ul").append("<a href='#' id='del'>apagar</a>");
        $("ul").append("<a href='#' id='alterar'>alterar</a>");
        $("a#del").click(function () {
            $("li").remove();
            $("a").remove();
        });
        e.preventDefault();
    });

