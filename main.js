function toggle() {
    var el = document.getElementById('add');
    if (el.style.display === "none") {
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
    document.getElementById('item2').style.display = "none";
    document.getElementById('item3').style.display = "block";
}
function show() {
  document.getElementById('item2').style.display = "flex";
  document.getElementById('item3').style.display = "none";
  document.getElementById('item4').style.display = "none";
  document.getElementById('item5').style.display = "block";
}