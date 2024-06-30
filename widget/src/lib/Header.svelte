<script lang="ts">
  import { IconX, IconMinus } from "@tabler/icons-svelte";
  import { messageStore } from "./Stores/MessageStore";
  import { slide } from "svelte/transition";


  messageStore.subscribe((m) => {
    console.log("Moo");
  });
  let isVideo = false;
  let stream;
  let videoElement: HTMLVideoElement;
  let userVideoElement:HTMLVideoElement;

  const constraints = (window.constraints = {
    audio: false,
    video: true,
  });

  function handleSuccess(stream) {
    
    const videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    window.stream = stream; // make variable available to browser console
    videoElement.srcObject = stream;
    userVideoElement.srcObject=stream;
    console.log(window.stream)
  }

  const startStream = async () => {
    isVideo=!isVideo;
    console.log("Starting")
    
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
      // e.target.disabled = true;
    } catch (e) {
      console.error(e)
      // handleError(e);
    }
  };

  // onMount(()=>{
  //   startStream()
  // })
</script>

<div class="header">
  <div class="content">
    <slot></slot>
    <div class="buttons">
      <button><IconMinus /></button>
      <button><IconX /></button>
    </div>  <button on:click={() => startStream()}>Start</button>
  </div>
  {#if isVideo}
    <div transition:slide class="streaming_container">
      <!-- <div class="video_wrapper"> -->
        <video class="main_video" bind:this={videoElement} autoplay playsinline></video>
      <!-- </div> -->
      <!-- <video class="user_video" bind:this={userVideoElement} autoplay playsinline></video> -->
    </div>
  {/if}
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
    border-radius: 15px;
    z-index:6000;
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

  .video_wrapper{
    overflow: hidden;
    background-color: transparent;
    height:200px;
    width:auto;
    padding:5px;
    background-color: inherit;
    z-index: 20000;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

  }

  .main_video{
    background-color: transparent;
    height:200px;
    width:auto;
    /* border-radius: 30px;  */
    overflow: hidden;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    /* border-radius: 30px; */
  }

  .user_video{
    background-color: transparent;
    border-radius: 30px;
    height:80px;
    width:auto;
  }

  button {
    background-color: transparent;
    border: none;
  }
</style>
