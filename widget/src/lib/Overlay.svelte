<script>

</script>

<div class="overlay">
    <slot/>
</div>

<style>
.overlay{
    position:absolute;
    align-items: center;
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.75);
    z-index:10000
}
</style>