import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = 'player-current-time';
const onPlayer = ({ seconds }) => {
  localStorage.setItem('currentTime', seconds);
};
if (localStorage.getItem('currentTime')) {
  player.setCurrentTime(localStorage.getItem('currentTime'));
}

player.on('timeupdate', throttle(onPlayer, 1000));
