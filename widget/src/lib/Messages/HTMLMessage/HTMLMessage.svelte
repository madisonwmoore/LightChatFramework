<script lang="ts">
  export let content:string;
  export let variant;
</script>


<div  class="textMessage">
    <p class={`sender ${variant}`}>You</p>
    <div class={`messageBubble ${variant}`}>
      <div>{@html content}</div>
    </div>
  </div>
  
  
  <style>
    .sender{
     text-align: right;
     display: block;
      /* float:right; */
      font-size:smaller;
      margin-right: inherit
    }
  
  
    .textMessage {
      width: 100%;
      margin-right: 20px;
      display: block;
    }
  
    .textMessage p {
      margin: 3px 5px;
    }

    .outgoing {
    float: right;
  }

  .incoming {
    float: left;
  }

  .messageBubble {
    clear: both;
    display: block;
    text-align: left;
    max-width: 80%;
    float: right;
    /* background-color: #00529b; */
    /* padding: 2px 10px; */
    /* border-radius: 20px; */
    /* color: white; */
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: medium;
  }
  
   
  
    /* .outgoing {
      float: right;
    }
  
    .incoming {
      float: left;
    } */
  
    @media screen and (max-width: 600px) {
      .messageBubble {
        font-size: medium;
      }
    }
  </style>