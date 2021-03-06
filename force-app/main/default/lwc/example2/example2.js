import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import customStyle from '@salesforce/resourceUrl/speedDial';

const ATTACH = 'attach';
const CALL = 'call';
const CHAT = 'chat';
const ADD = 'add';

export default class Example2 extends LightningElement {
  options = [
    { name: ATTACH, icon: 'utility:attach' },
    { name: CALL, icon: 'utility:call' },
    { name: CHAT, icon: 'utility:answer' },
    { name: ADD, icon: 'utility:adduser' },
  ];

  connectedCallback() {
    loadStyle(this, customStyle);
  }

  handleButtonClick(event) {
    switch (event.detail) {
      case ATTACH:
        console.log('clicked ' + ATTACH);
        break;

      case CALL:
        console.log('clicked ' + CALL);
        break;

      case CHAT:
        console.log('clicked ' + CHAT);
        break;

      case ADD:
        console.log('clicked ' + ADD);
        break;

      default:
        break;
    }
  }
}
