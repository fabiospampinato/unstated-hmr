
/* IMPORT */

import * as unstated from 'unstated';

/* HMR */

const HMR = {
  isEnabled: true,
  containers: {}
};

/* HOOK */

unstated['__SUPER_SECRET_CONTAINER_DEBUG_HOOK__']( container => {

  if ( !HMR.isEnabled ) return;

  const {name} = container.constructor;

  if ( HMR.containers[name] ) {

    const oldState = HMR.containers[name].state;

    Object.defineProperty ( container, 'state', { // This will work if the property is not set using `Object.defineProperty`
      configurable: true,
      enumerable: true,
      get () {
        return this.__state;
      },
      set ( state ) {
        this.__state = this.__state ? state : oldState;
      }
    });

    setTimeout ( () => { // This will work if the property is set using `Object.defineProperty`
      if ( container.state === oldState ) return;
      container.state = oldState;
      container._listeners.map ( listener => listener () );
    }, 0 );

  }

  HMR.containers[name] = container;

});

/* EXPORT */

export default HMR;
