$(document).ready(function() {
  // Filter plugin table based on search field
  $("#search-field").on("input", function() {
    var searchTerm = $(this).val().toLowerCase();

    $("#plugin-table tbody tr").each(function() {
      var rowText = $(this).find("td:last-child").text().toLowerCase();

      if (rowText.indexOf(searchTerm) === -1) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });

  // Sort plugin table alphabetically by plugin name
  $("#plugin-table th:first-child").on("click", function() {
    var tableRows = $("#plugin-table tbody tr").get();

    tableRows.sort(function(a, b) {
      var aName = $(a).find("td:first-child a").text().toLowerCase();
      var bName = $(b).find("td:first-child a").text().toLowerCase();

      if (aName < bName) {
        return -1;
      } else if (aName > bName) {
        return 1;
      } else {
        return 0;
      }
    });

    $("#plugin-table tbody").html(tableRows);
  });
});
