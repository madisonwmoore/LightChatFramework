import htmlFile from "../lib/customElement/message.html?raw";
import cssFile from "../lib/customElement/message.css?raw";

export class Typewriter extends HTMLElement {
  isMounted = false;
  root;
  constructor() {
    super();
    console.log("Building Typewriter");
    console.log(this.shadowRoot);
    this.root = this.attachShadow({ mode: "closed" });
    console.log(this.isConnected, this.parentNode);
    
    // implement functionality...
  }

  //   renderScript(){
  //     let a=
  //   }

  connectedCallback() {
    console.log("Connected Callback");

    let script = document.createElement("script");
    const sheet = new CSSStyleSheet();
    const sheet2 = new CSSStyleSheet();
    sheet2.replaceSync(cssFile);
    // Apply a rule to the sheet
    if (!this.isMounted) {
      const colors = ["red", "blue", "green"];
      const rand = Math.floor(Math.random() * (2 - 0 + 1));
      console.log(rand);
      sheet.replaceSync(`b { color: ${colors[rand]}; }`);
      console.log(this);
      this.root.adoptedStyleSheets = [sheet, sheet2];
      this.root.innerHTML = htmlFile;
      // this.root.innerHTML = htmlFile;
    }
    this.isMounted = true;
  }
}
