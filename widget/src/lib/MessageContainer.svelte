<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount } from "svelte";
  import {
    type Message,
    messageStore,
    postMessage as pm,
    updateMessage as um,
    type TextMessage as tm,
  } from "./Stores/MessageStore";
  import TextMessage from "./Messages/TextMessage/TextMessage.svelte";
  import HTMLMessage from "./Messages/HTMLMessage/HTMLMessage.svelte";
  import { fade, scale, slide, fly, crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

  let scrollContainer:HTMLDivElement;

  export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 200),

	fallback(node, params) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`
		};
	}
});

  afterUpdate(() => {
    scrollContainer?.scrollTo(
      0,
      scrollContainer?.scrollHeight - scrollContainer?.clientHeight
    );
  });

  let messageList: Message[] = [];

  messageStore.subscribe((val) => {
    messageList = val;
  });
</script>

<div class="container" bind:this={scrollContainer}>
  <div class="flexBox"></div>
    <div class="messageContainer" role="log" aria-live="assertive">
      {#each messageList as val (val.id)}
        <div 	in:receive={{ key: val.id }}
        out:send={{ key: val.id }} animate:flip={{ duration: 200 }}>
          {#if val.type === "TEXT"}
            <TextMessage  variant={val.variant} message={val.content} />
          {/if}
          {#if val.type === "CUSTOM"}
            <HTMLMessage variant="incoming" content={val.content} />
          {/if}
        </div>
      {/each}
    
  </div>
</div>

<style>
  .container {
    overflow: auto;
    height: 100%;
    width: 100%;
    /* scroll-behavior: smooth; */
  }

  .flexBox{
    flex-grow:1;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(193, 193, 193);
    height: 20px;
  }

  .messageContainer {
    overflow-y: hidden;
    display: flex;
    position: relative;
    bottom: -412px;
    padding-top:10px;
    /* bottom: 50px; */
    flex-direction: column;
    justify-content: end;
    /* background-color: white; */
    width: 100%;
    /* min-height: 100%; */
    padding-bottom: 50px;
    flex-grow: 1;
    /* height: 100%; */

    background-color: transparent;

    /* background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */
  }
</style>
