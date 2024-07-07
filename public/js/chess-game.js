const socket = io();
const chess = new chess(socket);
const boardElement = document.querySelector('.chessboard');

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = ()=>{};
const handleMove = ()=>{};
const getPieceUnicode = ()=>{};


