<script>
  export let message;
  export let variant="sent"
  import { fade, slide } from 'svelte/transition';
</script>

<div  class="textMessage">
    <div transition:slide={{y:100}} class={`messageBubble ${variant}`}>
       <p>{message}</p> 
    </div>
</div>

<style>
  .textMessage {
   width:100%;
  }

  .textMessage p{
    margin:3px 5px;
  }

  .messageBubble{
    text-align:left;
    max-width:80%;
    float: right;
    background-color: rgb(118, 118, 181);
    padding: 2px 5px;
    border-radius: 20px;
    color: white;
    margin:5px 10px;
  }

  .sent{
    float: right;
  }

  .received{
    float: left;
  }
</style>
