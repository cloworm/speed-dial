import { createElement } from 'lwc';
import SpeedDial from 'c/speedDial';

describe('c-speed-dial', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('Displays options on mouseover', () => {
    const element = createElement('c-speed-dial', {
      is: SpeedDial,
    });
    element.options = [
      {
        name: 'Add',
        icon: 'utility:add',
      },
    ];
    document.body.appendChild(element);

    const dial = element.shadowRoot.querySelector('.dial');
    dial.dispatchEvent(new CustomEvent('mouseenter'));

    return Promise.resolve().then(() => {
      const options = element.shadowRoot.querySelector('.option-container');
      expect(options).not.toBeNull();
    });
  });

  it('Hides options on mouseout', () => {
    const element = createElement('c-speed-dial', {
      is: SpeedDial,
    });
    element.options = [
      {
        name: 'Add',
        icon: 'utility:add',
      },
    ];
    document.body.appendChild(element);

    const dial = element.shadowRoot.querySelector('.dial');
    dial.dispatchEvent(new CustomEvent('mouseenter'));

    return Promise.resolve()
      .then(() => {
        const options = element.shadowRoot.querySelector('.option-container');
        expect(options).not.toBeNull();

        const dialContainer = element.shadowRoot.querySelector(
          '.dial-container'
        );
        dialContainer.dispatchEvent(new CustomEvent('mouseleave'));

        return Promise.resolve();
      })
      .then(() => {
        const options = element.shadowRoot.querySelector('.option-container');
        expect(options).toBeNull();
      });
  });

  it('Toggles options on fab click', () => {
    const element = createElement('c-speed-dial', {
      is: SpeedDial,
    });
    element.options = [
      {
        name: 'Add',
        icon: 'utility:add',
      },
    ];
    document.body.appendChild(element);

    const dial = element.shadowRoot.querySelector('.dial');
    dial.dispatchEvent(new CustomEvent('click'));

    return Promise.resolve()
      .then(() => {
        const options = element.shadowRoot.querySelector('.option-container');
        expect(options).not.toBeNull();

        dial.dispatchEvent(new CustomEvent('click'));
        return Promise.resolve();
      })
      .then(() => {
        const options = element.shadowRoot.querySelector('.option-container');
        expect(options).toBeNull();
      });
  });

  it('Emits name of button clicked in a buttonclick event', () => {
    const element = createElement('c-speed-dial', {
      is: SpeedDial,
    });
    element.options = [
      {
        name: 'Add',
        icon: 'utility:add',
      },
    ];
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('buttonclick', handler);

    const dial = element.shadowRoot.querySelector('.dial');
    dial.dispatchEvent(new CustomEvent('click'));

    return Promise.resolve()
      .then(() => {
        const option = element.shadowRoot.querySelector('.option');
        option.dispatchEvent(new CustomEvent('click'));

        return Promise.resolve();
      })
      .then(() => {
        expect(handler).toHaveBeenCalled();
        expect(handler.mock.calls[0][0].detail).toBe('Add');
      });
  });
});
