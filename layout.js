import {ArtCanvas} from './artCanvas.js';

const canvas5 = new ArtCanvas({
    containerID: 'containerA',
    mode: 'multi',
    perspectiveStart: 'left',
    mouseMove: true,
    columns: 4,
    startOffsetZ:-50,
    startOffsetY:-8,
    startOffsetX:24,
    layout: [
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'DSCF1933.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'DSCF2121.jpg'}]}],
        [{cols: 2, rows: 2, items: [{margin: '3 4', height: '82', width: '128', depth: '7', image:'DSCF2777.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'DSCF1179.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'DSCF3786.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'DSCF2009.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'DSCF1100.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'DSCF1357.jpg'}]}],
        [{cols: 1, rows: 1, items: [{margin: '3 4', height: '38', width: '60', depth: '7',  image:'DSCF2064.jpg'}]}],
    ]
});

