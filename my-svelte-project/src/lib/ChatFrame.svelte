<script>
  import MessageContainer from "./MessageContainer.svelte";
  import Header from "./Header.svelte";
  import LaunchButton from "./LaunchButton.svelte";
  import InputBar from "./InputBar/InputBar.svelte";
</script>

<div>
<div class="chatframe">
  <Header/>
  <MessageContainer />
  <InputBar/>
</div>
<LaunchButton/>
</div>
<style>
  .chatframe {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 5000;
    height: 500px;
    width: 400px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 10px;
    background-color: gray;
    -webkit-box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);
    box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);

  }
</style>
