<script lang="ts">
  export let content:string;
  export let variant;
</script>


<div  class="textMessage">
    <p class="sender">You</p>
    <div class={`messageBubble ${variant}`}>
      <p>{@html content}</p>
    </div>
  </div>
  
  
  <style>
    .sender{
     text-align: right;
      /* float:right; */
      font-size:smaller;
      margin-right: inherit
    }
  
  
    .textMessage {
      width: 100%;
      margin-right: 20px;
    }
  
    .textMessage p {
      margin: 3px 5px;
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