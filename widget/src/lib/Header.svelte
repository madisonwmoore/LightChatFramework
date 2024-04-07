<script lang="ts">
  import { IconX, IconMinus } from "@tabler/icons-svelte";
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
    background-color: rgb(44, 112, 201);
    height: 40px;
    width: 100%;
    min-height: 40px;
  }

  

  .buttons{
    display:inline;
  }
</style>
