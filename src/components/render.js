import { Graph } from '@antv/x6'
Graph.registerNode(
  'lane',
  {
    inherit: 'rect',
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'rect',
        selector: 'name-rect',
      },
      {
        tagName: 'text',
        selector: 'name-text',
      },
    ],
    attrs: {
      body: {
        fill: '#FFF',
        stroke: '#5F95FF',
        strokeWidth: 1,
      },
      'name-rect': {
        width: 200,
        height: 30,
        fill: '#5F95FF',
        stroke: '#fff',
        strokeWidth: 1,
        x: -1,
      },
      'name-text': {
        ref: 'name-rect',
        refY: 0.5,
        refX: 0.5,
        textAnchor: 'middle',
        fontWeight: 'bold',
        fill: '#fff',
        fontSize: 12,
      },
    },
  },
  true,
)

Graph.registerNode(
  'lane-rect',
  {
    inherit: 'rect',
    width: 100,
    height: 60,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
  },
  true,
)

Graph.registerNode(
  'lane-polygon',
  {
    inherit: 'polygon',
    width: 80,
    height: 80,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
        refPoints: '0,10 10,0 20,10 10,20',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
  },
  true,
)

Graph.registerEdge(
  'lane-edge',
  {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2,
      },
    },
    label: {
      attrs: {
        label: {
          fill: '#A2B1C3',
          fontSize: 12,
        },
      },
    },
  },
  true,
)