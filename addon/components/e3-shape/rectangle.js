import Ember from 'ember';
import e3AnimatedChild from '../../mixins/e3-animated-child';

export default Ember.Component.extend(e3AnimatedChild, {
  shadowType: 'rectangle',

  enterState: {
    x: 0,
    y: 0
  },

  exitState: {
    x: 0,
    y: 0
  },

  activeState: {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    fill: 'red',
    'stroke-width': 5,
    'stroke': 'black'
  }
});
