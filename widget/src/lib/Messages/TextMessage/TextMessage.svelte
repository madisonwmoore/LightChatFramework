<script lang="ts">
  export let message:string;
  export let variant = "sent";
  //import { fade, slide } from "svelte/transition";
  // import {type TextMessage} from "../../Stores/MessageStore.ts"
</script>

<div class="textMessage">
  <div class={`messageBubble ${variant}`}>
  <!-- <div transition:slide={{ y: 100 }} class={`messageBubble ${variant}`}> -->
    <p>{message}</p>
  </div>
</div>

<style>
  .textMessage {
    width: 100%;
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
    margin: 5px 10px;
    font-size: small;
  }

  .sent {
    float: right;
  }

  .received {
    float: left;
  }

  @media screen and (max-width: 600px) {
    .messageBubble {
      font-size: medium;
    }
  }
</style>
