import omit from './utils/omit';
import createHelper from './createHelper';
import mapProps from './mapProps';

/**
 * Renames a single prop.
 *
 * @static
 * @category Higher-order-components
 * @param {String} oldName
 * @param {String} newName
 * @returns {HigherOrderComponent} Returns a function that take a Component.
 * @example
 *
 * renameProp('data', 'value')
 */
const renameProp = (oldName, newName) =>
  mapProps(props => ({
    ...omit(props, [oldName]),
    [newName]: props[oldName],
  }));

export default createHelper(renameProp, 'renameProp');
