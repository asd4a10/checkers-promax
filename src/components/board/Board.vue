<template>
  <div>
    <div v-for="x in 8" class="d-flex flex-row justify-content-center">
      <div
        class="board-cell d-flex justify-content-center align-items-center"
        :style="`background-color:${(x + y) % 2 === 1 ? '#FECE9D' : '#D18B47'}`"
        v-for="y in 8"
        @drop="dropPiece(x - 1, y - 1)"
        @dragover.prevent
      >
        <Piece
          v-if="board[x - 1][y - 1] > 0"
          :x="x - 1"
          :y="y - 1"
          :color="board[x - 1][y - 1]"
          class="mx-auto my-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useBoardStore } from '@/stores/counter'
import Piece from '@/components/figures/Piece.vue'

export default {
  name: 'Board',
  components: { Piece },
  methods: {
    dropPiece(x, y) {
      console.log(`new piece at ${x} ${y}`)
      this.boardStore.addPiece(x, y)
    }
  },
  setup() {
    const boardStore = useBoardStore()
    const board = boardStore.board

    return {
      board,
      boardStore
    }
  }
}
</script>

<style scoped>
.board-cell {
  width: 80px;
  height: 80px;
}
</style>
