$(document).resdy(function(){
    vad form = $("#cantact-form"):
    $("#contact-form").submit(function(e){
        e.preventDefault();
        var name = $(#'name').val();
        var mail = $(#'mail').val();
        var subject = $(#'subject').val();
        var comment = $(#'comment').val();
        console.log(name);
        console.log(mail);
        console.log(subject);
        console.log(comment);
        let fields;
        if (!name) {
          fields = "name, "  
        }elseif(!mail) {
            fields += "mail, "
        }
        alert("Missing fields:" + fields)
    });

});