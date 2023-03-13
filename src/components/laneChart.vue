<template>
  <div>
    <div ref="container"></div>
  </div>
</template>
<script>
import { json } from './data'
import { Graph } from '@antv/x6'
export default {
  data () {
    return {
      graph: null
    }
  },
  mounted () {
    this.graph = new Graph({
      width: 1000,
      height: 1000,
      container: this.$refs.container,
        connecting: {
          router: 'orth',
      },
      interacting: {
          nodeMovable: false,
          edgeMovable: false,
        },
    })
    this.graph.fromJSON(json)
    this.graph.on('node:dblclick', ({ node, e }) => {
      node.addTools({
        name: 'node-editor',
        args: {
          event: e,
          x: '80%',
          y: '80%',
          attrs: {
            // backgroundColor: 'blue'
          }
        },
      })
    })
  },
}
</script>
<style scoped>
</style>
