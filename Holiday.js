"use strict";

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { jsx as _jsx } from "react/jsx-runtime";

/**
 * @component
 * @name Holiday
 * @description Custom SVG icon component (React Native), rendu avec react-native-svg.
 *
 * @param {Object} props - Props pour la taille, couleur et style de l’icône.
 * @returns {JSX.Element} JSX Element
 */
const SvgHoliday = props => /*#__PURE__*/_jsx(Svg, {
  width: props.size ?? props.width ?? 27,
  height: props.size ?? props.height ?? 26,
  viewBox: "0 0 27 26",
  fill: props.color ?? props.fill ?? 'none',
  style: [{
    opacity: props.opacity ?? 1
  }, props.style],
  ...props,
  children: [
    /*#__PURE__*/_jsx(Path, {
      d: "M13.5 7.54285C13 3.04285 10.248 0 6.6 0C3.32527 0 0.611388 2.16607 0.0903014 5.00515C-0.00939973 5.54836 0.447715 6 1 6H1.81492C2.17632 6 2.5096 5.805 2.68667 5.48996L2.69938 5.46733C3.06549 4.81594 3.99068 4.78156 4.40411 5.40399L4.50328 5.55329C4.68861 5.8323 5.00132 6 5.33627 6H9.6M13 5.04285C14.2151 4.14447 15.8889 3.5896 17.4 3.6C20.6747 3.6 23.3886 5.76607 23.9097 8.60515C24.0094 9.14836 23.5523 9.6 23 9.6H20.8142C20.549 9.6 20.2946 9.49464 20.1071 9.30711L19.9071 9.10711C19.5166 8.71658 18.8834 8.71658 18.4929 9.10711L18.2929 9.30711C18.1054 9.49464 17.851 9.6 17.5858 9.6H14",

      strokeWidth: 3,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }),
    /*#__PURE__*/_jsx(Path, {
      d: "M4.668 8.05197C2.3525 10.3675 1.97013 13.8138 3.60763 16.1964C3.92128 16.6527 4.56582 16.6494 4.95691 16.2574L9.336 11.868L10.176 11.028L11.028 10.176L12.8667 8.33727C13.2565 7.94745 13.2613 7.30622 12.8084 6.99186C10.4344 5.34392 6.98501 5.73495 4.668 8.05197Z",
      strokeWidth: 3,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }),
    /*#__PURE__*/_jsx(Path, {
      d: "M11 9.54285C11.5093 12.0894 10.8629 18.1357 10.0466 21.3733C9.87234 22.0646 10.3847 22.8 11.0977 22.8H13.6996C14.1201 22.8 14.4988 22.5376 14.6239 22.1361C16.6218 15.7202 14.0799 8.86262 13.5 6.54285",

      strokeWidth: 3,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  ]
});

export default SvgHoliday;

//# sourceMappingURL=Holiday.js.map
