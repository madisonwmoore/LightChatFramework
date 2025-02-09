<script>
  import { IconMessage } from "@tabler/icons-svelte";
  import { MessageCircleMore } from "lucide-svelte";
</script>

<button aria-label="Chat" on:click class="launchButton">
  <div class="unread">3</div>
  <MessageCircleMore color="white" size={30} />
</button>

<style>
  .launchButton {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 6000;
    padding: 0;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    background-color: rgb(19, 91, 133);
    /* border-width: 3px;
  border-style: solid;
  border-color: rgb(183, 183, 183); */
    -webkit-box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);
    box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);
    transition: border-color 0.5s;
  }

  .launchButton:hover {
    cursor: pointer;

    background-color: rgb(14, 67, 97);
    transition: background-color 0.5s;
  }

  .launchButton:active {
    scale: 1.1;
    transition: scale 0.3s;
    outline: none;
  }

  .unread {
    position: absolute;
    height:12px;
    width:12px;
    text-align: center;
    font-weight: bold;
    top: -5px;
    left: -5px;
    padding:5px;
    border-radius: 50%;
    background-color: red;
    color: white;
  }
</style>
