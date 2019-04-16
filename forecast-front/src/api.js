import io from 'socket.io-client';
const { REACT_APP_BACKEND } = process.env
export const socket = io( REACT_APP_BACKEND, {path:'/api/socket.io'});