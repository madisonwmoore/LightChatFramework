<script>
  // import { messageStore, postMessage as pm } from "../Stores/MessageStore.ts";
  import autosize from "svelte-autosize";
  import { connector } from "../Stores/ConnectionStore";
  import { SendHorizontal } from 'lucide-svelte';
  import { tick } from 'svelte';

  let message;
  let textarea;
  let value;

  function sendMessage() {
    if(value.length>0){
    $connector.sendTextMessage(value);
    value = "";
    reset();
  }
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      e.preventDefault();

      if (value.length > 0) {
        sendMessage();
        reset();
      }
    }
  }

  async function reset() {
    value = "";
    await tick();
    autosize.update(textarea);
  }
</script>

<div class="inputBar">
  <div class="wrapper">
    <textarea
      aria-label="Message Input"
      style="resize:none;"
      on:keydown={handleKeyDown}
      bind:value
      rows="1"
      use:autosize
      bind:this={textarea}
      class="inputText"
      placeholder="Send a Message"
    ></textarea>
    <button disabled={value>0} on:click={() => sendMessage()} class="sendButton"> <SendHorizontal color="gray"/> </button>
  </div>

</div>

<style>
  .inputBar {
    display: flex;
    flex-direction: column;
    line-height: 2rem;
    min-height: 40px;
    height: auto;
    margin-top:2px;
    flex-shrink: 0;
  }

  .wrapper {
    /* display: flex; */
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    margin-bottom:25px;
    padding:0px 10px;
    /* height: 40px; */
  }

  .inputText {
    background-color: #f0f0f0;
    border-radius: 15px;
    margin-left: 15px;
    margin-right: 20px;
    border: none;
    flex-grow: 1;
    resize: none;
    color:rgb(31, 31, 31);
    line-height: 1.1rem;
    font-size: medium;
    padding: 12px 18px;
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
    background-color: rgb(228, 228, 228);
    transition: background-color 0.5s;
  }
</style>
