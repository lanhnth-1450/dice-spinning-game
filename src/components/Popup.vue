<template>
  <div class="wrapper-popup" v-bind:class="{ 'open-popup': isOpenPopup == true }" >
    <div class="rule">
      <h3>Luật chơi</h3>
      <p>
        Người ta cứ nói đừng quá yêu, người ta cứ nói đừng quá tin. Tôi cứ nghĩ
        mọi chuyện sẽ ổn khi thành người lớn
      </p>
      <button class="confirm" v-on:click='confirmPopup'>Đã hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    isOpenPopup: { type: Boolean, default: false }
  },
  methods: {
    confirmPopup() {
      this.$emit("handleConfirm");
    }
  },
  data() {
    return {};
  },
};
</script>

<style>
.wrapper-popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.wrapper-popup.open-popup {
  opacity: 1;
  visibility: visible;
}

.rule {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  transition: all 0.3s ease;
  background-color: white;
  width: 350px;
  height: 180px;
  padding: 15px 20px;
  font-family: "Lato";
}

.open-popup .rule {
  transform: translate(-50%, -50%) scale(1);
}

.rule h3 {
  margin-bottom: 10px;
}

.rule .confirm {
  margin-top: 20px;
  padding: 8px 12px;
  cursor: pointer;
  border: 2px solid #000;
  background-color: #fff;
}

.rule .confirm:hover {
  color: white;
  background-color: #000;
}
</style>
