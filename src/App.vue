<template>
  <div id="app">
    <h1>Dice spinning game</h1>
    <div class="wrapper clearfix">
      <Players
        v-bind:activePlayer="activePlayer"
        v-bind:currentPoint="currentPoint"
        v-bind:scorePlayers="scorePlayers"
      />
      <Controls
        v-on:handleClick="handleClick"
      />
      <Dices v-bind:dices="dices" />
      <Popup
        v-bind:isOpenPopup="isOpenPopup"
        v-on:handleConfirm="handleConfirm" />
    </div>
  </div>
</template>

<script>
  import Players from './components/Players';
  import Controls from './components/Controls';
  import Dices from './components/Dices';
  import Popup from './components/Popup';
  export default {
    name: "app",
    data() {
      return {
        isPlaying: false,
        isOpenPopup: false,
        activePlayer: 0,
        currentPoint: 30,
        scorePlayers: [30, 20],
        dices: [1, 3]
      };
    },
    components: {
      Players, Controls, Dices, Popup
    },
    methods: {
      handleConfirm() {
        this.isOpenPopup = false;
        this.isPlaying = true;
        this.activePlayer = 0;
        this.currentPoint = 0;
        this.scorePlayers = [0, 0];
      },
      handleClick() {
        this.isOpenPopup = true;
      }
    }
  };
</script>

  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }

  body {
    background-image: linear-gradient(
        rgba(62, 20, 20, 0.4),
        rgba(62, 20, 20, 0.4)
      ),
      url("/public/assets/back.jpg");
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
  }

  .wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }
</style>
