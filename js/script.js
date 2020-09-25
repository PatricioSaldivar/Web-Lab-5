$("#ButtonPost").on("click", (e) => {
   e.preventDefault();
   var todo = $("#todoText").val();
   $("#todoList").append(`<p> <input type = "checkbox" name="todo" id = "todo"/>  ${todo}  <br> </p>`);
   $("#todoText").val('');
});

$("#ButtonClear").on("click", (e) => {
   e.preventDefault();
   $("#todoList #todo").each(function () {
      $(this).prop("checked", false);
   });
});

$("#ButtonMark").on("click", (e) => {
   e.preventDefault();
   $("#todoList #todo").each(function () {
      $(this).prop("checked", true);
    });
});

$("#ButtonDelete").on("click", (e) => {
   e.preventDefault();
   $("#todoList").html('');
});
