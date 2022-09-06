import "./content/scss/style.scss";
import { card } from "./content/cards";
import { content } from "./content/content";

const div = document.createElement("div");
div.classList.add("picture");
document.body.appendChild(div);

content.map((el) => {
  card(el);
});
