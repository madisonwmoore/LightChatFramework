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
  // import { postMessage, type Message } from "./Stores/MessageStore";

  function yes() {
    alert("Moo");
  }

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
  let fileDrag = false;
</script>

<div>
  {#if isVisible}
    <div
      role="log"
      on:drop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e)
        fileDrag = false;
      }}
      on:dragleave={(e) => {
        e.preventDefault();
      }}
      on:dragenter={(e) => {
        e.preventDefault();
        fileDrag = true;
      }}
      use:widgetOpened
      out:fly={{ y: 100, easing: quadIn }}
      in:fly={{ y: 100, easing: quintOut }}
      class="chatframe"
    >
      {#if fileDrag}
        <Overlay bind:isFile={fileDrag}/>
      {/if}
      <Header><b>Chat with Us</b></Header>
      <MessageContainer />
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
  }

  :global(.moo) {
    color: red;
  }
</style>
