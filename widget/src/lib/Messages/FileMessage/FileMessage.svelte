<script lang="ts">
   import { type TextMessageContent } from "../../Stores/MessageStore";

    export let content:string;
    export let variant;
    export let message: TextMessageContent;
</script>

<div class="fileMessage">
<div class="messageBubble">
    <p>{message.message}</p>
</div>

</div>

<style>
  .messageBubble {
    clear: both;
    display: block;
    text-align: left;
    max-width: 60%;
    float: right;
    background-color: #00529b;
    padding: 2px 10px;
    border-radius: 20px;
    color: white;
    margin-top: 5px;
    text-wrap: pretty;
    margin-bottom: 5px;
    font-size: medium;
  }
</style>