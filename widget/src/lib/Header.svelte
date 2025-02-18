<script lang="ts">
  // import { IconX, IconMinus } from "@tabler/icons-svelte";
  import { messageStore } from "./Stores/MessageStore";
  import { slide } from "svelte/transition";
  import { X, Bot } from "lucide-svelte";
  import { Spring } from 'svelte/motion';
  const spring = new Spring(0,{
    damping:0.16, stiffness:0.10,
  });

  // messageStore.subscribe((m) => {
  //   console.log("Moo");
  // });
  let isVideo = false;
  let isSender = true;
  let stream;
  let videoElement: HTMLVideoElement;
  let userVideoElement: HTMLVideoElement;

  const constraints = (window.constraints = {
    audio: true,
    video: true,
  });

  function handleSuccess(stream: any) {
    try {
      const videoTracks = stream.getVideoTracks();
      console.log("Got stream with constraints:", constraints);
      console.log(`Using video device: ${videoTracks[0].label}`);
      window.stream = stream; // make variable available to browser console
      videoElement.srcObject = stream;
      userVideoElement.srcObject = stream;
      console.log(window.stream);
    } catch (err) {
      console.error(err);
    }
  }

  const startStream = async () => {
    isVideo = !isVideo;
    console.log("Starting");

    try {
      stream = await window.navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
      // e.target.disabled = true;
    } catch (e) {
      console.error(e);
      // handleError(e);
    }
  };
</script>

<div class="header">
  <div class="content">
    <!-- <slot></slot> -->


    {#if isSender}
      <div style="bottom:{spring.current}px" class="sender_container">
        <div class="agent_avatar"><Bot width={28} height={28} color="white"/></div>
        <div class="sender_name">
          <b>Agent Name</b>
          <i>chatbot</i>
        </div>
      </div>
    {/if}

    <button on:click={() => {spring.target=14;}}>Start</button>

    <div class="buttons">
      <button><X color="white" /></button>
    </div>
  </div>

  {#if isVideo}
    <div transition:slide class="streaming_container">
      <!-- <div class="video_wrapper"> -->
      <video class="main_video" bind:this={videoElement} autoplay playsinline
      ></video>
      <!-- </div> -->
      <!-- <video class="user_video" bind:this={userVideoElement} autoplay playsinline></video> -->
    </div>
  {/if}
</div>

<style>
  .header {
    width: 100%;
    min-height: 50px;
    color: rgb(255, 255, 255);
    background-image: linear-gradient(to right, #2c66a3, #3478bf, #5b9bde);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    /* border-radius: 15px; */
    z-index: 6000;
    border-radius: 0px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    flex-shrink: 0;
    
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

  .video_wrapper {
    overflow: hidden;
    background-color: transparent;
    height: 200px;
    width: auto;
    padding: 5px;
    background-color: inherit;
    z-index: 20000;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .main_video {
    background-color: transparent;
    height: 200px;
    width: auto;
    /* border-radius: 30px;  */
    overflow: hidden;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    /* border-radius: 30px; */
  }

  .user_video {
    background-color: transparent;
    border-radius: 30px;
    height: 80px;
    width: auto;
  }

  .sender_container {
    display: flex;
    flex-direction: row;
    margin: 0px 40px;
    padding-bottom: 8px;
    position: relative;
    bottom:0px;
  }

  .sender_name {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
    line-height: 1;
    margin-top:10px;
  }

  .sender_name b{
    font-size: 1.1rem;
  }

  .sender_name i {
    font-size: 0.75rem;
  }

  .agent_avatar {
    border-radius: 50%;
    background-color: #46626d;
    border: 2px solid white;
    width: 56px;
    height: 56px;
    position: relative;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: transparent;
    border: none;
  }
</style>
