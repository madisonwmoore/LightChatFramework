<script lang="ts">
  import { afterUpdate, beforeUpdate } from "svelte";
  import {
    type Message,
    messageStore,
    postMessage as pm,
    updateMessage as um,
    type TextMessage as tm,
  } from "./Stores/MessageStore";
  import TextMessage from "./Messages/TextMessage/TextMessage.svelte";
  import HTMLMessage from "./Messages/HTMLMessage/HTMLMessage.svelte";
  import { fade, scale, slide, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

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

  beforeUpdate(() => {
    // scrollContainer?.scrollTo(
    //   0,
    //   scrollContainer?.scrollHeight - scrollContainer?.clientHeight
    // );
    // scrollContainer?.scrollTo(
    //   0,
    //   scrollContainer?.scrollHeight - scrollContainer?.clientHeight
    // );
    // scrollContainer?.scrollTo(
    //   0,
    //   scrollContainer?.scrollHeight - scrollContainer?.clientHeight
    // );
  });

  afterUpdate(() => {
    console.log("Rerender");
    console.log(scrollContainer);
    scrollContainer?.scrollTo(
      0,
      scrollContainer?.scrollHeight - scrollContainer?.clientHeight
    );
    // scrollContainer?.scrollTo(
    //   0,
    //   scrollContainer?.scrollHeight
    // );
    // scrollContainer?.scrollTo(
    //   0,
    //   scrollContainer?.scrollHeight - scrollContainer?.clientHeight
    // );
    // scrollContainer.scrollTo(
    //   0,
    //   scrollContainer.scrollHeight - scrollContainer.clientHeight
    // );
  });

  let messageList: Message[] = [];

  messageStore.subscribe((val) => {
    messageList = val;
  });
</script>

<div class="container" bind:this={scrollContainer}>
  <div>
  <div class="messageContainer" role="log" aria-live="assertive">
    {#each messageList as val (val.id)}
      <div
        transition:scale={{ duration: 250, easing: quintOut }}
        
      >
        {#if val.type === "TEXT"}
          <TextMessage variant={val.variant} message={val.content} />
        {/if}
        {#if val.type === "CUSTOM"}
          <HTMLMessage variant="incoming" content={val.content} />
        {/if}
      </div>
    {/each}
  </div></div>
</div>

<style>
  .container {
    /* overflow-y: auto;
    overflow-x: hidden; */
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    
    /* background-color: white; */
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(193, 193, 193);
    height: 20px;
  }

  .messageContainer {
    overflow-y: auto;
    display: flex;
    position: fixed;
    bottom:50px;
    flex-direction: column;
    justify-content: end;
    /* background-color: white; */
    width: 100%;
    min-height: 100%;
    padding-bottom: auto;
    flex-grow: 1;
    /* height: 100%; */

    background-color: transparent;

    /* background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */
  }
</style>
