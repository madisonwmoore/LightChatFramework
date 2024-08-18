<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import {
    type Message,
    messageStore,
    // postMessage as pm,
    // updateMessage as um,
    // type TextMessage as tm,
  } from "./Stores/MessageStore";
  import TextMessage from "./Messages/TextMessage/TextMessage.svelte";
  import FileMessage from "./Messages/FileMessage/FileMessage.svelte";
  import HTMLMessage from "./Messages/HTMLMessage/HTMLMessage.svelte";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

  let scrollContainer: HTMLDivElement;

  export const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 800,
        easing: quintOut,
        css: (t) => {
          return `
				transform: ${transform} scale(${t * 0.2 + 0.8});
				opacity: ${t}
			`;
        },
      };
    },
  });

  onMount(() => {
    scrollContainer?.scrollTo({
      top: scrollContainer?.scrollHeight || 0,
      behavior: "instant",
    });
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
  let shouldScroll = false;
  const handleScroll = () => {
    shouldScroll = true;
    // setTimeout(()=>{shouldScroll=false},1000)
  };
</script>

<div
  class={"".concat("container ", !shouldScroll ? "scrollBarDisabled " : "")}
  on:scroll={handleScroll}
  bind:this={scrollContainer}
>
  <div class="flexBox"></div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div tabindex="0" class="messageContainer" role="log" aria-live="assertive">
    {#each messageList as val, i (val.id)}
      <div
        class="message"
        in:receive={{ key: val.id }}
        out:send={{ key: val.id }}
        animate:flip={{ duration: 200 }}
      >
        {#if val.type === "TEXT"}
          <TextMessage
            isClicked={i !== messageList.length - 1}
            sender={val.sender}
            variant={val.variant}
            message={val.content}
          />
        {/if}
        {#if val.type === "HTML"}
          <TextMessage
            isClicked={i !== messageList.length - 1}
            sender={val.sender}
            variant={val.variant}
            message={val.content}
          />
        {/if}
        {#if val.type === "FILE"}
          <FileMessage variant={val.variant} message={val.content} />
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
    overflow-x: hidden;
    scroll-behavior: smooth;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .scrollBarDisabled {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
  }
  .scrollBarDisabled::-webkit-scrollbar {
    display: none;
  }

  .flexBox {
    flex-grow: 1;
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
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    position: relative;
    bottom: 0px;
    padding-top: 10px;
    max-width: 100%;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 50px;
    flex-grow: 1;
    background-color: transparent;
  }
  .message{
    max-width: 100%;
   
  }
</style>
