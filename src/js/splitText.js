export const splitText = (element) => {
  // const data = document.querySelector(className);
  const data = element;
  const  text = data.innerText;

  data.innerHTML = "";
  for (var i = 0; i < text.length; i++) {
    var div = document.createElement("span");
    var t = document.createTextNode(text[i]);
    if (text[i] == " ") {
      div.setAttribute("id", "space");
    }
    div.appendChild(t);
    data.appendChild(div);
  }
};