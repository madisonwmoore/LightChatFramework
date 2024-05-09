<script>
 // import { messageStore, postMessage as pm } from "../Stores/MessageStore.ts";
  import autosize from "svelte-autosize";
  import {connector}  from "../Stores/ConnectionStore";

  let message;
  function sendMessage() {
    $connector.sendTextMessage(message)
    message = "";
    reset();
    
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      e.preventDefault();

      if (message.length > 0) {
        sendMessage();
      }
    }
  }

  async function reset() {
  value = '';
  await tick();
  autosize.update(textarea);
}
</script>

<div class="inputBar">
  <div class="wrapper">
  <textarea
    on:keydown={handleKeyDown}
    bind:value={message}
    rows="1"
    use:autosize
    class="inputText"
    placeholder="Send a Message"
  />
  <button on:click={() => sendMessage()} class="sendButton"> > </button>
</div>
</div>

<style>
  .inputBar {
    /* display: flex;
    flex-direction: row; */
    background-color: white;
    border-top: 0.5px solid grey;
    min-height: 40px;
    height: auto;
  }

  .wrapper{
    /* display: flex; */
    display: flex;
    flex-direction: row;
    background-color: white;
    /* height: 40px; */
  }

  .inputText {
    margin-left: 15px;
    border: none;
    resize: none;
    flex-grow: 1;
    resize: none;
    line-height: 1.1rem;
    font-size: smaller;
    padding: 12px 2px;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }

  .inputText:focus {
    outline: none;
  }

  .sendButton {
    border: none;
    background-color: transparent;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    overflow: hidden;
  }

  .sendButton:hover {
    background-color: gray;
  }
</style>
