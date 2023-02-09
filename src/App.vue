<template>
  <div>
    <div id="graph"></div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { Graph } from "@antv/x6";
import "@antv/x6-vue-shape";
let graph = null;
export default {
  name: "App",
  mounted() {
    graph = new Graph({
      container: document.getElementById("graph"),
      width: 1000,
      height: 1000,
      grid: true,
    });
    const node = graph.addNode({
      x: 200,
      y: 200,
      width: 300,
      height: 300,
      attrs: {
        body: {
          fill: "red",
        },
        label: {
          fontSize: 32,
          text: "你好",
        },
      },
    });
    node.attr("rect/title", "Description of the rectangle");
    node.attr("text/title", "Description of the rectangle");
  },
};
</script>

<style>
</style>
