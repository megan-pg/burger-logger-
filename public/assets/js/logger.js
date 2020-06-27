$(function () {
    $(".change-eaten").on("click", function (event) {
        const id = $(this).data("id");
        var newEat = $(this).data("neweat");

        var newEatState = {
            eaten: !newEat
        };

        // Send the PUT request.
        $.ajax("/api/logger/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed eat to", newEat);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // console.log("test");


        let newBurger = {
            name: $("#burger").val().trim(),
            eaten: 0
        };

        // Send the POST request.
        $.ajax("/api/logger", {
            type: "POST",
            data: newBurger,
        }).then(
            function () {
                // M.toast({html: "Burger Added!"});
                console.log("Yum! A new burger!");
                // Reload the page to get the updated list
                location.reload();
            },


        );
    });

    $(".delete-burger").on("click", function (event) {
        let id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/logger/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});