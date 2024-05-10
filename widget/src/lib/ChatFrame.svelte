<svelte:options customElement="chat-widget" />

<script lang="ts">
  import { fly } from "svelte/transition";
  import MessageContainer from "./MessageContainer.svelte";
  import Header from "./Header.svelte";
  import LaunchButton from "./LaunchButton/LaunchButton.svelte";
  import InputBar from "./InputBar/InputBar.svelte";
  export let isVisible = false;
  import { quintOut, quadIn } from "svelte/easing";
  import Connector from "./Connector/Connector";
  import { connector } from "./Stores/ConnectionStore";
  import { onMount } from "svelte";
  // import { postMessage, type Message } from "./Stores/MessageStore";

  function yes(){
    alert('Moo')
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
</script>

<div>
  {#if isVisible}
    <div
      use:widgetOpened
      out:fly={{ y: 100, easing: quadIn }}
      in:fly={{ y: 100, easing: quintOut }}
      class="chatframe"
    >
      <Header><p>Moo</p></Header>
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
    max-height: 90%;
    height: 660px;
    width: 500px;
    position: fixed;
    bottom: 50px;
    right: 20px;
    border-radius: 10px;
    background-color: gray;
    -webkit-box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);
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

  :global(.moo){
  color:red;
}
</style>
