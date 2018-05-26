var database = firebase.database();

$(document).ready(function () {
    database.ref("my-notes").orderByChild("date").on("value", function(snapshot) {
        snapshot.forEach(function(note) {
            console.log("HEY")
            var myNote = note.val();
            var h1 = $("<h1 class = 'note-header'>").text(myNote.title);
            var p = $("<p>").text(myNote.body);
            var a = $("<a>").text("Click here to view").attr("href", "./view.html?key="+note.key);
            var container = $("<div class = ' note-container'>").append([h1,p,a]);
            $("#notes").append(container);
        })
    })
});

