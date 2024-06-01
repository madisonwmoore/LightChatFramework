<script lang="ts">
  import { IconX, IconMinus } from "@tabler/icons-svelte";
  import { messageStore } from "./Stores/MessageStore";

  messageStore.subscribe((m) => {
    console.log("Moo");
  });
</script>

<div class="header">
  <div class="content">
    <slot></slot>
    <div class="buttons">
      <button><IconMinus /></button>
      <button><IconX /></button>
    </div>
  </div>
</div>

<style>
  .header {
    width: 100%;
    min-height: 50px;
    color: rgb(178, 218, 0);
    background-image: linear-gradient(
      to right,
      #0f5096e0,
      #1764b5e0,
      #458ddae0
    );
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
  }

  .content {
    height: inherit;
    padding: 3px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .buttons {
    display: inline;
  }

  button {
    background-color: transparent;
    border: none;
  }
</style>
