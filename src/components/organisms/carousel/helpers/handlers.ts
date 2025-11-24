import { throttle } from '@helpers/events';
import { PropsHandle } from '../types';

const handleEvent = ({ event, carousel, slider, scroll }: PropsHandle) => {
  switch (event.type) {
    case 'touchstart':
      event.preventDefault(); // Remove to preserve page scroll functionality through the slider
      let startTouch = (event as TouchEvent).targetTouches[0].screenX;

      const handleTouch = throttle((eventMove: Event) => {
        scroll(
          Number(slider.dataset.scrollTranslateX) -
            (startTouch - (eventMove as TouchEvent).targetTouches[0].screenX),
        );
        startTouch = (eventMove as TouchEvent).targetTouches[0].screenX;
      }, 25);
      const removeTouch = () => {
        carousel.removeEventListener('touchmove', handleTouch);
        carousel.removeEventListener('touchcancel', removeTouch);
        carousel.removeEventListener('touchend', removeTouch);
      };

      carousel.addEventListener('touchmove', handleTouch);
      carousel.addEventListener('touchcancel', removeTouch);
      carousel.addEventListener('touchend', removeTouch);
      return;

    case 'mousedown':
      event.preventDefault();
      let startMouse = (event as MouseEvent).pageX;

      const handleMouse = throttle((eventMove: MouseEvent) => {
        scroll(Number(slider.dataset.scrollTranslateX) - (startMouse - eventMove.pageX));
        startMouse = eventMove.pageX;
      }, 25);

      const removeMouse = () => {
        carousel.removeEventListener('mousemove', handleMouse);
        carousel.removeEventListener('mouseleave', removeMouse);
        carousel.removeEventListener('mouseup', removeMouse);
      };

      carousel.addEventListener('mousemove', handleMouse);
      carousel.addEventListener('mouseleave', removeMouse);
      carousel.addEventListener('mouseup', removeMouse);
      return;

    case 'mousewheel':
    default:
      throttle((event: WheelEvent) => {
        scroll(Number(slider.dataset.scrollTranslateX) - (event.deltaX + event.deltaY)); // Remove event.deltaY to preserve page scroll functionality through the slider
      }, 20)(event);
      return;
  }
};

export { handleEvent };
