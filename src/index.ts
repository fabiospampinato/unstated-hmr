
/* IMPORT */

import * as unstated from 'unstated';

/* UNSTATED HMR */

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

    Object.defineProperty ( container, 'state', {
      get () {
        return this.__state;
      },
      set ( state ) {
        this.__state = this.__state ? state : oldState;
      }
    });

  }

  HMR.containers[name] = container;

});

/* EXPORT */

export default HMR;
