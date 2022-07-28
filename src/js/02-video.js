import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onFormSubmit, 1000)), player;

function onFormSubmit(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
}

const timeVideo = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(timeVideo)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        n;
        break;

      default:
        break;
    }
  });
