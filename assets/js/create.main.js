var database = firebase.database();

$(document).ready(function () {
    
    $("#submit").on("click", function(e) {
        e.preventDefault();
        var myNote = {
            body: $("#body").val().trim(),
            title: $("#title").val().trim(),
            dateCreated: firebase.database.ServerValue.TIMESTAMP
        }
        database.ref("my-notes").push(myNote, function(err) {
            if(err) {
                console.error(err);
            }
            else {
                console.log("Note Created");
            }
            
        });
    })
    
});