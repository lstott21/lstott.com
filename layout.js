import {ArtCanvas} from './artCanvas.js';

const canvas5 = new ArtCanvas({
    containerID: 'containerB',
    mode: 'multi',
    perspectiveStart: 'left',
    mouseMove: true,
    columns: 4,
    startOffsetZ:-50,
    startOffsetY:-8,
    startOffsetX:24,
    layout: [
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'https://live.staticflickr.com/65535/51982804606_5bb2acadb9_k.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'https://live.staticflickr.com/65535/50212807291_ea5e3e602f_h.jpg'}]}],
        [{cols: 2, rows: 2, items: [{margin: '3 4', height: '82', width: '128', depth: '7', image:'https://live.staticflickr.com/65535/51982804671_f4547f3861_k.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'https://live.staticflickr.com/65535/51981796342_5f2fd90189_k.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'https://live.staticflickr.com/65535/51982804796_1b8b9bbb68_k.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'https://live.staticflickr.com/65535/51982804851_2dfcdec2b0_k.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'https://live.staticflickr.com/65535/51982804961_5000a6be38_k.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'https://live.staticflickr.com/65535/51983084714_c28c14457e_k.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'https://live.staticflickr.com/65535/51983353275_ac920e3920_k.jpg'}]}],
    ]
});

