/*
* Main component
*
* for FTUI version 3
*
* Copyright (c) 2020 Mario Stephan <mstephan@shared-files.de>
* Under MIT License (http://www.opensource.org/licenses/mit-license.php)
*
* https://github.com/knowthelist/ftui
*/

import { FtuiElement } from '../element.component.js';
// eslint-disable-next-line no-unused-vars
import { FtuiMenu } from '../menu/menu.component.js';

export class FtuiMain extends FtuiElement {

  constructor() {
    super(FtuiMain.properties);

    this.elementMenu = document.getElementById(this.menu);
    if (this.elementMenu) {
      this.elementMenu.addEventListener('openChange', event => this.setState(event.detail));
    }

  }

  template() {
    return `<style> @import "components/main/main.component.css"; </style>
    <slot></slot>`;
  }

  static get properties() {
    return {
      height: '100%',
      width: '100%',
      menu: 'ftui-menu-1',
    };
  }

  setState(value) {
    if (value) {
      this.style.marginLeft ='250px';
    } else {
      this.style.marginLeft = '0';
    }
  }

}

window.customElements.define('ftui-main', FtuiMain);
