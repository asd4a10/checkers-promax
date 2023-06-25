import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('boardStore', () => {
  // no piece - 0
  // black - 1
  // white - 2
  const board = ref([
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2]
  ])
  const removePiece = (x, y) => {
    board.value[x][y] = 0
  }
  const addPiece = (x, y) => {
    if (
      board.value[x][y] === 0 &&
      (x + y) % 2 === 0 &&
      validateMove(currentPiece.value.x, currentPiece.value.y, x, y, currentPiece.value.color)
    ) {
      removePiece(currentPiece.value.x, currentPiece.value.y)
      board.value[x][y] = currentPiece.value.color
    }
  }
  const validateMove = (curRow, curCol, targetRow, targetCol, color) => {
    if (color === 1 && curRow < targetRow && Math.abs(curCol - targetCol) === 1) {
      return true
    } else if (color === 2 && curRow > targetRow && Math.abs(curCol - targetCol) === 1) {
      return true
    } else return false
  }

  const currentPiece = ref({ x: null, y: null, color: 0 })

  const selectPiece = (x, y, color) => {
    currentPiece.value = {
      x: x,
      y: y,
      color: color
    }
  }

  return { board, removePiece, addPiece, currentPiece, selectPiece }
})
