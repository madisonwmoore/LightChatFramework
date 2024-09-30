<svelte:options customElement="chat-widget" />

<script lang="ts">
  import { fly } from "svelte/transition";
  import MessageContainer from "./MessageContainer.svelte";
  import Header from "./Header.svelte";
  import LaunchButton from "./LaunchButton/LaunchButton.svelte";
  import Overlay from "./Overlay/Overlay.svelte";
  import InputBar from "./InputBar/InputBar.svelte";
  export let isVisible = false;
  import { quintOut, quadIn } from "svelte/easing";
  import Connector from "./Connector/Connector";
  import { connector } from "./Stores/ConnectionStore";
  import { onMount } from "svelte";
  import ErrorState from "./ErrorState.svelte";
  import { postMessage, type Message } from "./Stores/MessageStore";
  import { appStateStore } from "./Stores/AppState";
  import { IconTruckDelivery } from "@tabler/icons-svelte";

  let onDrag:boolean;


  onMount(() => {
    {
      $connector = new Connector();
    }
  });

  function widgetOpened(node) {
    return {
      destroy: () => {},
    };
  }
  function handledragenter(e){
    onDrag=true;
    console.log("Drag Enter")
  }

  function handledragleave(e){
    e.stopPropagation()
    onDrag=false;
    console.log("Drag Leave")
  }

  function handledrop(e:any){
    e.preventDefault();
    alert(e)
  }
</script>

<div >
  {#if isVisible}
    <div
      role="log"
      on:dragenter={handledragenter}
      on:dragleave={handledragleave}
      on:drop={handledrop}
      use:widgetOpened
      out:fly={{ y: 100, easing: quadIn }}
      in:fly={{ y: 100, easing: quintOut }}
      class="chatframe"
    >
    {#if onDrag}
      <Overlay>
        <div class="file_overlay">
          <h1>File</h1>
          <p>Drop file </p>
        </div>
      </Overlay>
      {/if}
      <Header><b>Chat with Us</b></Header>
      <MessageContainer />
      <!-- <ErrorState/> -->
      <InputBar />
    </div>{/if}
  <LaunchButton on:click={() => (isVisible = !isVisible)} />
</div>

<style>
  .chatframe {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 5000;
    max-height: calc(100vh - 60px);
    height: 660px;
    width: 500px;
    position: fixed;
    padding-bottom: 10px;
    bottom: 60px;
    right: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);

    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    /* border: 1px solid rgba(255, 255, 255, 0.18); */
  }

  @media screen and (max-width: 600px) {
    .chatframe {
      display: fixed;
      width: 100%;
      height: 100%;
      top: 0px;
      right: 0px;
      bottom: 0px;
    }

    .file_overlay{
      align-self: center;
      display: inline;
    }
  }

  :global(.moo) {
    color: red;
  }
</style>
