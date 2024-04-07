<script>
  import { IconMessage } from "@tabler/icons-svelte";
</script>

<button on:click class="launchButton">
  <IconMessage color="white" size={20} />
</button>

<style>
.launchButton {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  border-width: 3px;
  border-style: solid;
  border-color: rgb(183, 183, 183);
  -webkit-box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 10px 20px -14px rgba(0, 0, 0, 0.75);
  transition: border-color 0.5s;
}

.launchButton:hover {
  cursor: pointer;
  border-color: aquamarine;
  background-color: rgb(159, 159, 159);
  transition: border-color 0.5s;
}

.launchButton:active {
  scale: 1.1;
  transition: scale 0.3s;
  outline: none;
}

</style>


