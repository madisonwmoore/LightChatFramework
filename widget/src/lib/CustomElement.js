import htmlFile from "../lib/customElement/message.html?raw"
import cssFile from "../lib/customElement/message.css?raw"

export class Typewriter extends HTMLElement {
    isMounted=false;
  constructor() {
    super();
    console.log("Building Typewriter");
    console.log(this.shadowRoot)
    // implement functionality...
  }

  //   renderScript(){
  //     let a=
  //   }
  

  connectedCallback() {
    console.log("Connected Callback");
   let root=this.attachShadow({ mode: "closed" });
    let template = document.createElement("template");
    let script = document.createElement("script");
    const sheet = new CSSStyleSheet();
    const sheet2=new CSSStyleSheet();
    sheet2.replaceSync(cssFile);
    // Apply a rule to the sheet
    if(!this.isMounted){
        const colors = ["red", "blue", "green"];
    const rand = Math.floor(Math.random() * (2 - 0 + 1));
    console.log(rand);
    sheet.replaceSync(`b { color: ${colors[rand]}; }`);
    template.innerHTML = htmlFile;
    console.log(this);
    
    //document.body.appendChild(template.content);
    //this.shadowRoot.appendChild(template.content);
    //root.innerHTML=htmlFile;
    // root.adoptedStyleSheets=[sheet, sheet2]
    // root.setHTMLUnsafe(htmlFile)
   // customElements.whenDefined('custom-element').then(() => {
        
    this.shadowRoot.setHTMLUnsafe(htmlFile)
    this.shadowRoot.adoptedStyleSheets = [sheet, sheet2]; 
    //})
  
    }
    this.isMounted=true;
    // const colors = ["red", "blue", "green"];
    // const rand = Math.floor(Math.random() * (2 - 0 + 1));
    // console.log(rand);
    // sheet.replaceSync(`b { color: ${colors[rand]}; }`);
    // template.innerHTML = htmlFile;
    // //document.body.appendChild(template.content);
    // this.shadowRoot.appendChild(template.content);
    // this.shadowRoot.adoptedStyleSheets = [sheet];
  }
}
