import FakeConnector from "../Connector/FakeConnector";
import { BubblePickerMessage, Message, TextMessage } from "../Stores/MessageStore";
import { v4 as uuidv4 } from "uuid";

self.connections = [];
self.connector;

const handleMessages = () => {};

/**
 * When connecting to a web worker
 */
onconnect = (e) => {
  const port: MessagePort = e.ports[0];

  if (self.connections.length < 1) {
    self.connector = new FakeConnector();
  }

  self.connections.push(port);

  port.addEventListener("message", (e) => {
    console.log(e);

    
    
   


    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    self.connections.forEach((port: MessagePort) => {
      const response:TextMessage={
        id: uuidv4(),
        datetime: 0,
        type: "TEXT",
        variant:'outgoing',
        content: {
          message: e.data.payload,
          contentType: "text"
        }
      }
      port.postMessage(response);
    });
    let response:TextMessage
    if(e.data.payload.includes('list')){
      console.log("List")
       response={
        sender:'Bot',
        id: uuidv4(),
        datetime: 0,
        type: "TEXT",
        variant:'incoming',
        
        content: {
          message: "Here is a list",
          buttons:["Button 1", "Button 2"],
          contentType: "text"
        }
      }
    }
    else if(e.data.payload.includes('file')){
      response={
       id: uuidv4(),
       datetime: 0,
       type: "FILE",
       variant:'incoming',
       content: {
         message: "Here is a list",
         buttons:["Button 1", "Button 2"],
         contentType: "text"
       }
     }
   }
    else if(e.data.payload.includes('fact')){
      response={
        sender:'Bot',
        id: uuidv4(),
        datetime: 0,
        type: "TEXT",
        variant:'incoming',
        
        content: {
          message: `A: Hail is caused when raindrops are lifted up into the atmosphere during a thunderstorm and then supercooled by temperatures below freezing, turning them into ice balls, says Dr. Dick Orville of Texas A&M University. "The faster the updraft on these balls of ice, the bigger they can grow," he adds.",`,

          contentType: "text"
        }
      }
    }
    else{
        response={
          sender:'Bot',
          id: uuidv4(),
          datetime: 0,
          type: "HTML",
          variant:'incoming',
          content: {
            message: "You Said: " +`<i>${e.data.payload}</i>` as string,
            contentType: "html"
          }
        }
    }


    setTimeout(()=>{
      self.connections.forEach((port: MessagePort) => {
       response
        port.postMessage(response);
      });
    },1000)

    let content=`<svg height="100px" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <style>
      .small {
        font: italic 13px sans-serif;
      }
      .heavy {
        font: bold 30px sans-serif;
      }
  
      /* Note that the color of the text is set with the    *
       * fill property, the color property is for HTML only */
      .Rrrrr {
        font: Inter 40px serif;
        fill: green;
      }
    </style>
  
    <text x="20" y="35" class="small">My</text>
    <text x="40" y="35" class="heavy">cat</text>
    <text x="55" y="55" class="small">is</text>
    <text x="65" y="55" class="Rrrrr">Grumpy!</text>
  </svg>`;

    // setTimeout(()=>{
    //   self.connections.forEach((port: MessagePort) => {
    //     const response={
    //       id: uuidv4(),
    //       datetime: 0,
    //       type: "CUSTOM",
    //       variant:'incoming',
    //       content,
    //     };
    //     port.postMessage(response);
    //   });
    // },2000)

  
  });

  port.start();
};
