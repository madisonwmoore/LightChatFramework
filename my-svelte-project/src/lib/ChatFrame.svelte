<script>
  import { fly } from 'svelte/transition';
  import MessageContainer from "./MessageContainer.svelte";
  import Header from "./Header.svelte";
  import LaunchButton from "./LaunchButton/LaunchButton.svelte";
  import InputBar from "./InputBar/InputBar.svelte";
  export let isVisible = false;
  import { quintOut, quadIn } from 'svelte/easing';
</script>
<svelte:options customElement="chat-widget"/>
<div>
  {#if isVisible}
    <div out:fly={{y:100, easing:quadIn}} in:fly={{y:100, easing:quintOut}} class="chatframe">
      <Header><p>Moo</p></Header>
      <MessageContainer />
      <InputBar />
    </div>{/if}
  <LaunchButton on:click={()=>isVisible=!isVisible}/>
</div>

<style>
  .chatframe {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 5000;
    height: 500px;
    width: 400px;
    position: fixed;
    bottom: 50px;
    right: 20px;
    border-radius: 10px;
    background-color: gray;
    -webkit-box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 20px -14px rgba(0, 0, 0, 0.75);
  }
</style>
