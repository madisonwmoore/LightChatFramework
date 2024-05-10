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
  import HTMLMessage from "./Messages/HTMLMessage/HTMLMessage.svelte";
  import { fade, scale, slide, fly } from "svelte/transition";


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
    scrollContainer.scrollTo({top:scrollContainer.scrollHeight, behavior:'smooth'})
    setTimeout(()=>{
      // scrollContainer.scrollTo(0,scrollContainer.scrollHeight);
      scrollContainer.scrollTo({top:scrollContainer.scrollHeight, behavior:'smooth'})
    
    
   },500)
    
    
    // alert("Twice");
  });

  let messageList: Message[] = [];

  messageStore.subscribe((val) => {
    messageList = val;
  });
</script>

<div class="container" bind:this={scrollContainer}>
  <div class="messageContainer"  role="log" aria-live="assertive">
    {#each messageList as val (val.id)}
    {console.log(val)}
    <div transition:fly>
      {#if val.type === "TEXT"}
        <TextMessage variant={val.variant} message={val.content} />
      {/if}   
      {#if val.type === "CUSTOM"}
      <HTMLMessage variant="incoming" content={val.content} />
    {/if}   
    </div>
    {/each}
  </div>
</div>

<style>
  .container {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
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
    display: flex;
    position: static;
    flex-direction: column;
    justify-content: end;
    /* background-color: white; */
    width: 100%;
    min-height: 100%;
    padding-bottom: 10px;
    flex-grow: 1;

    background-color: transparent;

    /* background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */

  }
</style>
