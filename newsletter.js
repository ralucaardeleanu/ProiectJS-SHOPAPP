function handleSubmit() {
  const name = document.getElementById("name").value;
  sessionStorage.setItem("NAME", name);

  return;
}
window.addEventListener("load", () => {
  const name = sessionStorage.getItem("NAME");
  document.getElementById("result-name").innerHTML = name;
});
