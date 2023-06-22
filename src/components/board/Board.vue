<template>
  <div>
    <div v-for="x in 8" class="d-flex flex-row justify-content-center">
      <div
        class="board-cell d-flex justify-content-center align-items-center"
        :style="`background-color:${(x + y) % 2 === 0 ? '#FECE9D' : '#D18B47'}`"
        v-for="y in 8"
      >
        <BlackPlate class="mx-auto my-auto" v-if="board[x - 1][y - 1] === 1" />
        <WhitePlate class="mx-auto my-auto" v-if="board[x - 1][y - 1] === 2" />
      </div>
      \
    </div>
  </div>
</template>

<script>
import BlackPlate from '@/components/figures/BlackPlate.vue'
import WhitePlate from '@/components/figures/WhitePlate.vue'

export default {
  name: 'Board',
  components: { WhitePlate, BlackPlate },
  methods: {},
  data: () => ({
    board: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2]
    ]
  })
}
</script>

<style scoped>
.board-cell {
  width: 80px;
  height: 80px;
}
</style>
