<script lang="ts">
  import { afterUpdate } from "svelte";
  import {
    type Message,
    messageStore,
    postMessage as pm,
    updateMessage as um,
    type TextMessage as tm,
  } from "./Stores/MessageStore";
  import TextMessage from "./Messages/TextMessage/TextMessage.svelte";

  let scrollContainer;


  // import {VirtualList} from '@sveltejs/svelte-virtual-list';
  //import { fly, fade, slide } from "svelte/transition";
  // import { connector } from "./Stores/ConnectionStore";
  //let val = 0;

  // function postMessage() {
  //  // pm(`${Math.random()} Moo`);
  // }

  // function reRender() {
  //   val = Date.now();
  // }
  afterUpdate(() => {
    console.log("Rerender");
    console.log(scrollContainer)

    scrollContainer.scrollTo(0,scrollContainer.scrollHeight);
    
    // alert("Twice");
  });

  let messageList: Message[] = [];

  messageStore.subscribe((val) => {
    messageList = val;
  });
</script>

<div class="container" bind:this={scrollContainer}>
  <div class="messageContainer" >
    {#each messageList as val}
      {#if val.type === "TEXT"}
        <TextMessage variant="sent" message={val.content.message} />
      {/if}
    {/each}
  </div>
</div>

<style>
  .container {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    background-color: white;
  }

  .messageContainer {
    display: flex;
    position: static;
    flex-direction: column;
    justify-content: end;
    background-color: white;
    width: 100%;
    min-height: 100%;
    /* height: 100%; */
    flex-grow: 1;
    /* overflow-y: scroll;
    overflow-x: hidden; */
  }
</style>
