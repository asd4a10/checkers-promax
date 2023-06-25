<template>
  <div
    :draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
    class="piece m-auto"
    :class="color === 1 ? 'bg-black' : 'bg-white'"
  ></div>
</template>

<script>
import { useBoardStore } from '@/stores/counter'

export default {
  name: 'Piece',
  props: {
    x: Number,
    y: Number,
    color: Number
  },
  methods: {
    dragStart(event) {
      this.boardStore.selectPiece(this.x, this.y, this.color)
    },
    dragEnd(event) {
      console.log('delete piece at', this.x, this.y)
    }
  },
  setup() {
    const boardStore = useBoardStore()

    return {
      boardStore
    }
  }
}
</script>

<style scoped>
.piece {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
