import { keyframes } from "@emotion/core";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/sliding_exits/slideOutDown.css}
 */
const slideOutDown = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;

export default slideOutDown;
