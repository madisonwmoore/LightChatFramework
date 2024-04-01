<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
  import { messageStore, postMessage as pm } from "./Stores/MessageStore.js";
  import TextMessage from "./Messages/TextMessage/TextMessage.svelte";
  import { fly, fade, slide } from 'svelte/transition';
  import { connector } from "./Stores/ConnectionStore";
  let val = 0;

  function postMessage() {

    pm(`${Math.random()} Moo`)
  }

  function reRender() {
    val = Date.now();
  }
  afterUpdate(() => {
    console.log("Rerender");
    // alert("Twice");
  });

  let messageList = [];

  const unsubscribe = messageStore.subscribe((val) => {
    messageList = val;
  });
</script>

<div class="messageContainer">
  {#each messageList as val}

  <TextMessage variant="sent" message={val}/>

  {/each}
</div>

<style>
  .messageContainer {
    display:flex;
    flex-direction:column;
    justify-content: end;
    background-color: white;
    width: 100%;
    min-height: 50%;
    flex-grow: 1;
    overflow-y: scroll;
    overflow-x:hidden;
  }
</style>
