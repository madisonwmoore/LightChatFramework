<script lang="ts">
  export let message:string;
  export let variant;
  // import { fade, slide } from "svelte/transition";
  // import {type TextMessage} from "../../Stores/MessageStore.ts"
</script>


<div   class="textMessage">
  <p class="sender">You</p>
  <div class={`messageBubble ${variant}`}>
    <p>{message}</p>
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

  .messageBubble {
    text-align: left;
    max-width: 80%;
    float: right;
    background-color: rgb(118, 118, 181);
    padding: 2px 5px;
    border-radius: 20px;
    color: white;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-right:inherit;
    /* margin: 5px 10px; */
    font-size: medium;
  }

  .outgoing {
    float: right;
  }

  .incoming {
    float: left;
  }

  @media screen and (max-width: 600px) {
    .messageBubble {
      font-size: medium;
    }
  }
</style>
