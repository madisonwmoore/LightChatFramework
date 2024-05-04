<script lang="ts">
  import { afterUpdate } from "svelte";
  import { type Message, messageStore, postMessage as pm, updateMessage as um, type TextMessage as tm } from "./Stores/MessageStore";
  import TextMessage  from "./Messages/TextMessage/TextMessage.svelte";
  // import {VirtualList} from '@sveltejs/svelte-virtual-list';
  // import { fly, fade, slide } from "svelte/transition";
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
    // alert("Twice");
  });

  let messageList:Message[] = [];

 messageStore.subscribe((val) => {
    messageList = val;
  });
</script>

<div class="messageContainer">

  <!-- <VirtualList> -->
  {#each messageList as val}
  {console.log(val)}
  {#if val.type==="TEXT"}
    <TextMessage variant="sent" message={val.content.message} />
  {/if}
  {/each}
  <!-- </VirtualList> -->
</div>

<style>
  .messageContainer {
    display: flex;
    flex-direction: column-reverse;
    justify-content: end;
    background-color: white;
    width: 100%;
    min-height: 50%;
    /* height:400px; */
    flex-grow: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
