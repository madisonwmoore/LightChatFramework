<script>
  import { Paperclip } from 'lucide-svelte';
  export let isFile=false
</script>

<div role="log" on:dragleave={()=>isFile=false}   on:drop={(e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log(e)
  isFile = false;
}} class="overlay">
    <h1>Overlay</h1>
    <Paperclip/>
    
    
</div>

<style>
.overlay{
    width: 100%;
    height:100%;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.758);
    z-index: 5500;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

</style>