var DefaultModes = function() {
  var modes = [
  {
    name: "Arrr Gee Beebee",
    id: "arrr-gee-beebee",
    bundles: [1],
    slot: 1,

    type: 0,
    pattern: [0, 0],
    args: [
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [10, 40, 0, 0, 0, 0, 0, 0],
      [5, 45, 0, 0, 0, 0, 0, 0],
      [1, 49, 0, 0, 0, 0, 0, 0]
    ],
    numc: [1, 3, 1],
    colors: [
      [
        [208, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [208, 0, 0],
        [0, 224, 0],
        [0, 0, 240],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 240],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [10, 10, 40, 40],
    thresh1: [10, 10, 40, 40],
    trigger: 0
  },
  {
    name: "Blink Morph",
    id: "blink-morph",
    bundles: [0],
    slot: 0,

    type: 0,
    pattern: [2, 0],
    args: [
      [10, 0, 5, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [1, 0, 0, 190, 0, 0, 0, 0],
      [5, 15, 0, 0, 0, 0, 0, 0],
      [20, 0, 0, 0, 0, 0, 0, 0]
    ],
    numc: [9, 9, 1],
    colors: [
      [
        [65, 0, 37],
        [32, 0, 70],
        [0, 0, 112],
        [0, 35, 70],
        [0, 70, 37],
        [0, 105, 0],
        [32, 70, 0],
        [65, 35, 0],
        [97, 0, 0]
      ],
      [
        [130, 0, 75],
        [65, 0, 150],
        [0, 0, 225],
        [0, 70, 150],
        [0, 140, 75],
        [0, 210, 0],
        [65, 140, 0],
        [130, 70, 0],
        [195, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [0, 32, 32, 64],
    thresh1: [0, 64, 64, 64],
    trigger: 0
  },
  {
    name: "Darkside of the Mode",
    id: "darkside-of-the-mode",
    bundles: [0],
    slot: 1,

    type: 0,
    pattern: [0, 0],
    args: [
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [1, 0, 200, 0, 0, 0, 0, 0],
      [13, 0, 200, 0, 0, 0, 0, 0],
      [3, 50, 0, 0, 0, 0, 0, 0]
    ],
    numc: [6, 6, 1],
    colors: [
      [
        [48, 0, 48],
        [0, 0, 128],
        [0, 48, 48],
        [0, 128, 0],
        [48, 48, 0],
        [128, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [96, 0, 96],
        [0, 0, 255],
        [0, 96, 96],
        [0, 255, 0],
        [96, 96, 0],
        [255, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [0, 16, 16, 58],
    thresh1: [0, 58, 64, 64],
    trigger: 0
  },
  {
    name: "Dash Dops",
    id: "dash-dops",
    bundles: [0, 1],
    slot: 6,

    type: 0,
    pattern: [1, 0],
    args: [
      [0, 0, 5, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [20, 0, 6, 44, 50, 50, 0, 0],
      [10, 40, 2, 0, 50, 50, 0, 0],
      [6, 44, 20, 0, 50, 50, 0, 0]
    ],
    numc: [6, 1, 1],
    colors: [
      [
        [0, 70, 45],
        [39, 70, 0],
        [78, 28, 0],
        [91, 0, 15],
        [52, 0, 60],
        [13, 0, 105],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [20, 30, 40, 50],
    thresh1: [64, 64, 64, 64],
    trigger: 0
  },
  {
    name: "Eye Floss",
    id: "eye-floss",
    bundles: [1],
    slot: 3,

    type: 0,
    pattern: [2, 0],
    args: [
      [10, 0, 5, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [1, 0, 0, 190, 10, 0, 0, 0],
      [5, 5, 0, 100, 10, 0, 0, 0],
      [20, 0, 0, 0, 10, 0, 0, 0]
    ],
    numc: [6, 1, 1],
    colors: [
      [
        [13, 47, 140],
        [12, 0, 104],
        [78, 0, 30],
        [36, 10, 108],
        [0, 28, 90],
        [97, 22, 33],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [0, 48, 48, 64],
    thresh1: [64, 64, 64, 64],
    trigger: 0
  },
  {
    name: "Heat Wave",
    id: "heat-wave",
    bundles: [0, 1],
    slot: 4,

    type: 0,
    pattern: [4, 0],
    args: [
      [64, 2, 1, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [5, 0, 1, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    numc: [9, 9, 1],
    colors: [
      [
        [0, 140, 90],
        [0, 14, 45],
        [2, 0, 14],
        [26, 0, 210],
        [0, 35, 23],
        [0, 3, 11],
        [0, 56, 180],
        [7, 0, 53],
        [0, 9, 6]
      ],
      [
        [156, 0, 60],
        [46, 7, 0],
        [6, 7, 0],
        [104, 112, 0],
        [39, 0, 15],
        [11, 3, 0],
        [182, 28, 0],
        [26, 28, 0],
        [10, 0, 4]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [8, 64, 64, 64],
    thresh1: [8, 64, 64, 64],
    trigger: 0
  },
  {
    name: "Metamorph",
    id: "metamorph",
    bundles: [1],
    slot: 0,

    type: 0,
    pattern: [2, 0],
    args: [
      [50, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [1, 49, 0, 0, 0, 0, 0, 0],
      [50, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    numc: [9, 9, 1],
    colors: [
      [
        [130, 0, 75],
        [65, 0, 150],
        [0, 0, 225],
        [0, 70, 150],
        [0, 140, 75],
        [0, 210, 0],
        [65, 140, 0],
        [130, 70, 0],
        [195, 0, 0]
      ],
      [
        [65, 0, 37],
        [32, 0, 70],
        [0, 0, 112],
        [0, 35, 70],
        [0, 70, 37],
        [0, 105, 0],
        [32, 70, 0],
        [65, 35, 0],
        [97, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [0, 48, 64, 64],
    thresh1: [0, 64, 64, 64],
    trigger: 0
  },
  {
    name: "Nebulous",
    id: "nebulous",
    bundles: [0, 1],
    slot: 5,

    type: 0,
    pattern: [8, 0],
    args: [
      [7, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [80, 1, 8, 5, 9, 6, 2, 4],
      [60, 1, 8, 5, 9, 6, 2, 4],
      [20, 1, 8, 5, 9, 6, 2, 4]
    ],
    numc: [4, 1, 1],
    colors: [
      [
        [13, 70, 75],
        [26, 28, 90],
        [65, 14, 75],
        [78, 28, 30],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [0, 32, 32, 64],
    thresh1: [64, 64, 64, 64],
    trigger: 0
  },
  {
    name: "Rainbow Strobe",
    id: "rainbow-strobe",
    bundles: [0, 1],
    slot: 2,

    type: 0,
    pattern: [0, 0],
    args: [
      [3, 1, 40, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [25, 25, 0, 0, 0, 0, 0, 0],
      [3, 47, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    numc: [9, 9, 1],
    colors: [
      [
        [156, 0, 0],
        [104, 0, 60],
        [52, 0, 120],
        [0, 0, 180],
        [0, 56, 120],
        [0, 112, 60],
        [0, 168, 0],
        [52, 112, 0],
        [104, 56, 0]
      ],
      [
        [195, 0, 0],
        [130, 0, 75],
        [65, 0, 150],
        [0, 0, 225],
        [0, 70, 150],
        [0, 140, 75],
        [0, 210, 0],
        [65, 140, 0],
        [130, 70, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [0, 56, 64, 64],
    thresh1: [0, 56, 64, 64],
    trigger: 0
  },
  {
    name: "Sourcery",
    id: "sourcery",
    bundles: [0],
    slot: 3,

    type: 0,
    pattern: [1, 0],
    args: [
      [1, 1, 5, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [0, 10, 0, 40, 5, 5, 0, 0],
      [10, 0, 0, 40, 5, 5, 0, 0],
      [10, 0, 40, 0, 5, 5, 0, 0]
    ],
    numc: [4, 4, 1],
    colors: [
      [
        [13, 0, 0],
        [6, 0, 52],
        [0, 14, 45],
        [39, 0, 15],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [1, 0, 0],
        [12, 0, 104],
        [0, 28, 90],
        [78, 0, 30],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    thresh0: [0, 10, 16, 48],
    thresh1: [16, 48, 64, 64],
    trigger: 0
  },
  {
    name: "Spark Plug",
    id: "spark-plug",
    bundles: [0, 1],
    slot: 7,

    type: 0,
    pattern: [3, 0],
    args: [
      [3, 0, 5, 0],
      [0, 0, 0, 0]
    ],
    timings: [
      [1, 0, 2, 94, 0, 0, 0, 0],
      [5, 0, 6, 99, 0, 0, 0, 0],
      [10, 20, 20, 60, 0, 0, 0, 0]
    ],
    numc: [9, 9, 9],
    colors: [
      [
        [52, 168, 0],
        [39, 14, 0],
        [10, 3, 0],
        [52, 168, 0],
        [6, 0, 45],
        [2, 0, 11],
        [52, 168, 0],
        [0, 35, 37],
        [0, 9, 9]
      ],
      [
        [0, 224, 0],
        [39, 14, 0],
        [10, 3, 0],
        [0, 224, 0],
        [6, 0, 45],
        [2, 0, 11],
        [0, 224, 0],
        [0, 35, 37],
        [0, 9, 9]
      ],
      [
        [0, 168, 60],
        [39, 14, 0],
        [10, 3, 0],
        [0, 168, 60],
        [6, 0, 45],
        [2, 0, 11],
        [0, 168, 60],
        [0, 35, 37],
        [0, 9, 9]
      ]
    ],
    thresh0: [0, 32, 32, 64],
    thresh1: [0, 32, 32, 64],
    trigger: 0
  }
  ];

  return {
    getModes: function() { return modes; },
    getMode: function(idx) { return modes[idx]; }
  };
}();
