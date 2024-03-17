<script>
import {afterUpdate, beforeUpdate, onDestroy, onMount} from 'svelte';
alert("Once")
let val=0;
function reRender(){
   val=Date.now() 
}
afterUpdate(()=>{alert("Twice")})
</script>

<div class="messageContainer">
<p>{val}</p>
<button on:click={()=>reRender()}>Rerender</button>
</div>

<style>
  .messageContainer {
    background-color: white;
    width: 100%;
    min-height: 50%;
    flex-grow: 1;
    overflow-y: scroll;
  }
</style>
