<script lang="ts">
  import { IconX, IconMinus } from "@tabler/icons-svelte";
  import { messageStore } from "./Stores/MessageStore";

  messageStore.subscribe((m)=>{
    console.log("Moo")
  })
</script>

<div class="header">

  <slot></slot>
  <div class="buttons">
<button><IconMinus/></button>
<button><IconX/></button>
  </div>
</div>

<style>
  .header {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    /* background-color: rgb(44, 112, 201); */
    height: 40px;
    width: 100%;
    min-height: 40px;

    background: rgba( 44, 112, 201, 0.55 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10px );
-webkit-backdrop-filter: blur( 10px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  }

  

  .buttons{
    display:inline;
  }
</style>
