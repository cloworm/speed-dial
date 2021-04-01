import { LightningElement, api } from 'lwc';

const ATTACH = 'attach';
const CALL = 'call';
const CHAT = 'chat';
const ADD = 'add';

export default class Example extends LightningElement {
  @api primaryColor;
  @api secondaryColor;
  @api iconColor;
  @api textColor;
  @api fontFamily;
  hasRendered;
  options = [
    { name: ATTACH, icon: 'utility:attach' },
    { name: CALL, icon: 'utility:call' },
    { name: CHAT, icon: 'utility:answer' },
    { name: ADD, icon: 'utility:adduser' },
  ];

  renderedCallback() {
    if (this.hasRendered) return;

    const dial = this.template.querySelector('.dial');
    dial.style.setProperty('--speed-dial-primary', this.primaryColor);
    dial.style.setProperty('--speed-dial-secondary', this.secondaryColor);
    dial.style.setProperty('--speed-dial-icon', this.iconColor);
    dial.style.setProperty('--speed-dial-text', this.textColor);
    dial.style.setProperty('--speed-dial-font-family', this.fontFamily);

    this.hasRendered = true;
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
