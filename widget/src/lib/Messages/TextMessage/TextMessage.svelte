<script lang="ts">
  import { type TextMessageContent } from "../../Stores/MessageStore";
  import { connector } from "../../Stores/ConnectionStore";

  export let message: TextMessageContent;
  export let variant;
  export let sender: string;
  export let isTranscript: boolean;
</script>

<div class={`textMessage ${variant}`}>
  <p class={`sender`}>{sender ?? ""}</p>
  <div class={`messageBubble`}>
    {#if typeof message.message === "string"}
      <p>{message.message}</p>
    {:else}
      <div>{message.message}</div>
    {/if}
  </div>
  {#if message.buttons}
    <div class="buttonContainer">
      {#each message.buttons as button}
        <button
          on:click={() => $connector?.sendTextMessage(button)}
          class="buttonOption">{button}</button
        >
      {/each}
    </div>
  {/if}
</div>

<style>
  .sender {
    text-align: right;
    display: block;
    font-size: smaller;
    font-weight: bold;
    margin-right: inherit;
    margin: 0px 5px;
    min-height: 1rem;
  }

  .outgoing .sender,.outgoing .messageBubble{
    float:right;
  }

  .incoming .sender, .incoming .messageBubble{
    float:left;
  }

  .incoming .messageBubble{
    background-color: #e8eef7;
    color: rgb(5, 5, 5);
  }



  .buttonContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    clear: both;
  }

  p {
    display: inline;
  }

  .buttonOption {
    border: 1px solid #00529b;
    border-radius: 15px;
    background-color: transparent;
    color: #00529b;
    margin: 3px 5px;
    padding: 5px 12px;
  }

  .buttonOption:hover {
    background-color: #00539b;
    color: white;
  }

  .buttonOption:active {
    background-color: #00529b;
    opacity: 0.5;
  }

  .buttonOption:first-child{
    margin-left: 0px;
  }

  .textMessage {
    width: 100%;
    margin-right: 20px;
    display: block;
  }

  .messageBubble p {
    text-indent: 0;
    margin: 3px 5px;
  }

  .messageBubble {
    clear: both;
    display: block;
    text-align: left;
    /* max-width: 80%; */
    float: right;
    background-color: #00529b;
    padding: 5px 10px;
    border-radius: 20px;
    color: white;
    margin-top: 2px;
    text-wrap: pretty;
    margin-bottom: 5px;
    font-size: medium;
  }
  ::selection {
    color: rgb(255, 195, 54);
    background: rgb(30, 30, 30);
  }



  .outgoing {
    float: right;
  }

  .incoming {
    float: left;
    /* background-color: gray; */
    max-width: 80%;
  }

  @media screen and (max-width: 600px) {
    .messageBubble {
      font-size: medium;
    }
  }
</style>
