# <a href="https://github.com/neoziro/recompact/">recompact</a> <span>v0.0.0</span>

<!-- div class="toc-container" -->

<!-- div -->

## `Config`
* <a href="#setconfigoptions">`setConfig`</a>

<!-- /div -->

<!-- div -->

## `Higher-order-components`
* <a href="#branchtest-left-rightidentity">`branch`</a>
* <a href="#connectobsobsmapper">`connectObs`</a>
* <a href="#defaultpropsdefaultprops">`defaultProps`</a>
* <a href="#flattenproppropname">`flattenProp`</a>
* <a href="#getcontextcontexttypes">`getContext`</a>
* <a href="#lifecyclespec">`lifecycle`</a>
* <a href="#mapobsobsmapper">`mapObs`</a>
* <a href="#mappropspropsmapper">`mapProps`</a>
* <a href="#mappropsstreampropsstreammapper">`mapPropsStream`</a>
* <a href="#nestcomponents">`nest`</a>
* <a href="#omitpropspaths">`omitProps`</a>
* <a href="#onlyupdateforkeyspropkeys">`onlyUpdateForKeys`</a>
* <a href="#onlyupdateforproptypes">`onlyUpdateForPropTypes`</a>
* <a href="#pickpropspaths">`pickProps`</a>
* <a href="#pure">`pure`</a>
* <a href="#renamepropoldname-newname">`renameProp`</a>
* <a href="#renamepropsnamemap">`renameProps`</a>
* <a href="#rendercomponentcomponent">`renderComponent`</a>
* <a href="#rendernothing">`renderNothing`</a>
* <a href="#setdisplaynamedisplayname">`setDisplayName`</a>
* <a href="#setproptypesproptypes">`setPropTypes`</a>
* <a href="#setstatickey-value">`setStatic`</a>
* <a href="#shouldupdatetest">`shouldUpdate`</a>
* <a href="#toclass">`toClass`</a>
* <a href="#withcontextchildcontexttypes-getchildcontext">`withContext`</a>
* <a href="#withhandlershandlerfactories">`withHandlers`</a>
* <a href="#withobsobsmapper">`withObs`</a>
* <a href="#withpropspropsmapper">`withProps`</a>
* <a href="#withpropsonchangeshouldmaporkeys-createprops">`withPropsOnChange`</a>
* <a href="#withreducerstatename-dispatchname-reducer-initialstate">`withReducer`</a>
* <a href="#withstatestatename-stateupdatername-reducer-initialstate">`withState`</a>
* <a href="#wrapdisplaynamecomponent-wrappername">`wrapDisplayName`</a>

<!-- /div -->

<!-- div -->

## `Utilities`
* <a href="#componentfrompropprop">`componentFromProp`</a>
* <a href="#composefuncs">`compose`</a>
* <a href="#createeagerelementtype-props-children">`createEagerElement`</a>
* <a href="#createeagerfactorytype">`createEagerFactory`</a>
* <a href="#createeventhandler">`createEventHandler`</a>
* <a href="#createhelperhoc-helpername-noargsfalse">`createHelper`</a>
* <a href="#createsinkcallback">`createSink`</a>
* <a href="#getdisplaynamecomponent">`getDisplayName`</a>
* <a href="#hoiststaticshoc">`hoistStatics`</a>
* <a href="#identityvalue">`identity`</a>
* <a href="#isclasscomponentvalue">`isClassComponent`</a>
* <a href="#isreferentiallytransparentfunctioncomponentvalue">`isReferentiallyTransparentFunctionComponent`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `“Config” Methods`

<!-- div -->

<h3 id="setconfigoptions"><code>setConfig(options)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/setConfig.js#L17 "View in source") [&#x24C9;][1]

Set the config of Recompact.

#### Arguments
1. `options` *(Object)*:

#### Example
```js
setConfig({observablesKey: 'observables'});
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Higher-order-components” Methods`

<!-- div -->

<h3 id="branchtest-left-rightidentity"><code>branch(test, left, [right=identity])</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/branch.js#L24 "View in source") [&#x24C9;][1]

Accepts a test function and two higher-order components. The test function
is passed the props from the owner. If it returns true, the left higher-order
component is applied to BaseComponent; otherwise, the right higher-order
component is applied *(defaults to identity)*.

#### Arguments
1. `test` *(Function)*: The test to apply.
2. `left` *(HigherOrderComponent)*: The higher-order component applied if the result of the test is true.
3. `[right=identity]` *(HigherOrderComponent)*: The higher-order component applied if the result of the test is false.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
// Add the logic or rendering nothing if the prop `count` equals to `0`.
branch(({count}) => count === 0, renderNothing)(MyComponent);
```
---

<!-- /div -->

<!-- div -->

<h3 id="connectobsobsmapper"><code>connectObs(obsMapper)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/connectObs.js#L70 "View in source") [&#x24C9;][1]

Connect observables to props using a map.
<br>
<br>
<br>
* The function take one argument, an object containing context observables
and a special observable `props$` that emits owner props.
<br>
* The property is updated at each emission of a new value by the associated
Observable.
<br>
* Properties matching `/^on[A-Z]/` are mapped to the `next` method of
the associated Observer.

#### Arguments
1. `obsMapper` *(Function)*: The function that takes observables and returns map.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
connectObs(({change$, value$}) => ({
  onChange: change$,
  value: value$,
}))('input');
```
---

<!-- /div -->

<!-- div -->

<h3 id="defaultpropsdefaultprops"><code>defaultProps(defaultProps)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/defaultProps.js#L19 "View in source") [&#x24C9;][1]

Specify props values that will be used if the prop is `undefined`.

#### Arguments
1. `defaultProps` *(Object)*: Default props.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const Button = defaultProps({type: 'button'})('button');
<Button /> // will render <button type="button" />
```
---

<!-- /div -->

<!-- div -->

<h3 id="flattenproppropname"><code>flattenProp(propName)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/flattenProp.js#L16 "View in source") [&#x24C9;][1]

Flattens a prop so that its fields are spread out into the props object.

#### Arguments
1. `propName` *(String)*: Name of the prop to flatten.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const Button = flattenProp('props')('button');
<Button props={{type: 'submit'}} /> // will render <button type="submit" />
```
---

<!-- /div -->

<!-- div -->

<h3 id="getcontextcontexttypes"><code>getContext(contextTypes)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/getContext.js#L19 "View in source") [&#x24C9;][1]

Gets values from context and passes them along as props.

#### Arguments
1. `contextTypes` *(Object)*: Context types to inject as props.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
// Create a component that will bring back to home when clicked
const HomeButton = compose(
  withContext({router: PropTypes.object.isRequired}),
  withHandlers({onClick: ({router}) => () => router.push('/')}),
)('button');
```
---

<!-- /div -->

<!-- div -->

<h3 id="lifecyclespec"><code>lifecycle(spec)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/lifecycle.js#L22 "View in source") [&#x24C9;][1]

A higher-order component version of
[`React.createClass()`](https://facebook.github.io/react/docs/react-api.html#createclass).
It supports the entire `createClass()` API, except the `render()` method,
which is implemented by default (and overridden if specified; an error will
be logged to the console). You should use this helper as an escape hatch, in
case you need to access component lifecycle methods.

#### Arguments
1. `spec` *(Object)*: Lifecycle spec

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
// Create a hoc that will log when a component will mount
const logWhenMount = lifecycle({componentWillMount: () => console.log('will mount')});
```
---

<!-- /div -->

<!-- div -->

<h3 id="mapobsobsmapper"><code>mapObs(obsMapper)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/mapObs.js#L22 "View in source") [&#x24C9;][1]

Takes observables from the context and special observable `props$` an map them
to a new set of observables.

#### Arguments
1. `obsMapper` *(Function)*: The function that take previous observables and returns new ones.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const firstName$ToFullName$ = mapObs(({firstName$, props$}) => ({
 fullName$: Observable.combineLatest(
   firstName$,
   props$.pluck('lastName'),
   (firstName, lastName) => `${firstName} ${lastName}`
  )
}))
```
---

<!-- /div -->

<!-- div -->

<h3 id="mappropspropsmapper"><code>mapProps(propsMapper)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/mapProps.js#L19 "View in source") [&#x24C9;][1]

Accepts a function that maps owner props to a new collection of props that
are passed to the base component.

#### Arguments
1. `propsMapper` *(Function)*: The function that returns new props.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
// Add a new prop computed from owner props
mapProps(({count}) => ({moreThanFive: count > 5}))(MyComponent);
```
---

<!-- /div -->

<!-- div -->

<h3 id="mappropsstreampropsstreammapper"><code>mapPropsStream(propsStreamMapper)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/mapPropsStream.js#L18 "View in source") [&#x24C9;][1]

Accepts a function that maps an observable stream of owner props to a stream
of child props, rather than directly to a stream of React nodes.
The child props are then passed to a base component.

#### Arguments
1. `propsStreamMapper` *(Function)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
// Delay rendering of 1s
const delayRendering = mapPropsStream(props$ => props$.delay(1000));
```
---

<!-- /div -->

<!-- div -->

<h3 id="nestcomponents"><code>nest(components)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/nest.js#L17 "View in source") [&#x24C9;][1]

Composes components by nesting each one inside the previous.

#### Arguments
1. `components` *(...(ReactClass|ReactFunctionalComponent))*:

#### Returns
*(ReactFunctionalComponent)*:

#### Example
```js
// Delay rendering of 1s
const DivButton = nest('div', 'button');
// will render <div className="foo"><button className="foo" /></div>
<DivButton className="foo" />
```
---

<!-- /div -->

<!-- div -->

<h3 id="omitpropspaths"><code>omitProps(paths)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/omitProps.js#L17 "View in source") [&#x24C9;][1]

Same as lodash `omit` but for props.

#### Arguments
1. `paths` *(String|String&#91;&#93;)*: The property paths to omit.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const withoutValue = omitProps('value');
```
---

<!-- /div -->

<!-- div -->

<h3 id="onlyupdateforkeyspropkeys"><code>onlyUpdateForKeys(propKeys)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/onlyUpdateForKeys.js#L24 "View in source") [&#x24C9;][1]

Prevents the component from updating unless a prop corresponding to one of the
given keys has updated. Uses `shallowEqual()` to test for changes.
<br>
<br>
This is a much better optimization than the popular approach of using PureRenderMixin,
`shouldPureComponentUpdate()`, or `pure()` helper, because those
tools compare *every* prop, whereas `onlyUpdateForKeys()` only cares about the
props that you specify.

#### Arguments
1. `propKeys` *(String&#91;&#93;)*: The property keys that will induce a re-render.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
onlyUpdateForKeys(['value'])
```
---

<!-- /div -->

<!-- div -->

<h3 id="onlyupdateforproptypes"><code>onlyUpdateForPropTypes()</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/onlyUpdateForPropTypes.js#L22 "View in source") [&#x24C9;][1]

Works like `onlyUpdateForKeys()`, but prop keys are inferred from the `propTypes`
of the base component. Useful in conjunction with `setPropTypes()`.
<br>
<br>
If the base component does not have any `propTypes`, the component will never
receive any updates. This probably isn't the expected behavior, so a warning
is printed to the console.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const Button = ({className}) => <button className={className} />;
Button.propTypes = {className: PropTypes.string};
const EnhancedButton = onlyUpdateForPropTypes(Button);
```
---

<!-- /div -->

<!-- div -->

<h3 id="pickpropspaths"><code>pickProps(paths)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/pickProps.js#L17 "View in source") [&#x24C9;][1]

Same as lodash `pick` but for props.

#### Arguments
1. `paths` *(String|String&#91;&#93;)*: The property paths to pick.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const onlyWithValue = pickProps('value');
```
---

<!-- /div -->

<!-- div -->

<h3 id="pure"><code>pure()</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/pure.js#L16 "View in source") [&#x24C9;][1]

Prevents the component from updating unless a prop has changed.
Uses `shallowEqual()` to test for changes.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
pure('button')
```
---

<!-- /div -->

<!-- div -->

<h3 id="renamepropoldname-newname"><code>renameProp(oldName, newName)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/renameProp.js#L17 "View in source") [&#x24C9;][1]

Renames a single prop.

#### Arguments
1. `oldName` *(String)*:
2. `newName` *(String)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
renameProp('data', 'value')
```
---

<!-- /div -->

<!-- div -->

<h3 id="renamepropsnamemap"><code>renameProps(nameMap)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/renameProps.js#L28 "View in source") [&#x24C9;][1]

Renames multiple props, using a map of old prop names to new prop names.

#### Arguments
1. `nameMap` *(Object)*: A map with old prop as key and new prop as value.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
renameProps({data: 'value'})
```
---

<!-- /div -->

<!-- div -->

<h3 id="rendercomponentcomponent"><code>renderComponent(Component)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/renderComponent.js#L19 "View in source") [&#x24C9;][1]

Takes a component and returns a higher-order component version of that component.
This is useful in combination with another helper that expects a higher-order
component, like `branch`.

#### Arguments
1. `Component` *(ReactClass|ReactFunctionalComponent|String)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const renderLoaderIfLoading = branch(
  ({loading} => loading),
  renderComponent(Loader),
)
```
---

<!-- /div -->

<!-- div -->

<h3 id="rendernothing"><code>renderNothing()</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/renderNothing.js#L17 "View in source") [&#x24C9;][1]

A higher-order component that always renders `null`.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const renderNothingIfNoRules = branch(
  ({rules} => rules.length === 0),
  renderNothing,
)
```
---

<!-- /div -->

<!-- div -->

<h3 id="setdisplaynamedisplayname"><code>setDisplayName(displayName)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/setDisplayName.js#L14 "View in source") [&#x24C9;][1]

Assigns to the `displayName` property on the base component.

#### Arguments
1. `displayName` *(String)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
setDisplayName('AnotherDisplayName')(MyComponent);
```
---

<!-- /div -->

<!-- div -->

<h3 id="setproptypesproptypes"><code>setPropTypes(propTypes)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/setPropTypes.js#L14 "View in source") [&#x24C9;][1]

Assigns to the `propTypes` property on the base component.

#### Arguments
1. `propTypes` *(Object)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
setPropTypes({children: PropTypes.node})(MyComponent);
```
---

<!-- /div -->

<!-- div -->

<h3 id="setstatickey-value"><code>setStatic(key, value)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/setStatic.js#L13 "View in source") [&#x24C9;][1]

Assigns a value to a static property on the base component.

#### Arguments
1. `key` *(String)*:
2. `value` *(String)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
setStatic({defaultProps: {type: 'button'}})('button');
```
---

<!-- /div -->

<!-- div -->

<h3 id="shouldupdatetest"><code>shouldUpdate(test)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/shouldUpdate.js#L21 "View in source") [&#x24C9;][1]

Higher-order component version of
[`shouldComponentUpdate()`](https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate).
The test function accepts both the current props and the next props.

#### Arguments
1. `test` *(Function)*: Receive two arguments, props and nextProps

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
// Pure
shouldUpdate((props, nextProps) => shallowEqual(props, nextProps))
```
---

<!-- /div -->

<!-- div -->

<h3 id="toclass"><code>toClass()</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/toClass.js#L20 "View in source") [&#x24C9;][1]

Takes a function component and wraps it in a class. This can be used as a
fallback for libraries that need to add a ref to a component, like Relay.
<br>
<br>
If the base component is already a class, it returns the given component.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const Component = toClass(() => <div />);
<Component ref="foo" /> // A ref can be used because Component is a class
```
---

<!-- /div -->

<!-- div -->

<h3 id="withcontextchildcontexttypes-getchildcontext"><code>withContext(childContextTypes, getChildContext)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/withContext.js#L20 "View in source") [&#x24C9;][1]

Provides context to the component's children. `childContextTypes` is an object
of React prop types. `getChildContext()` is a function that returns
the child context. Use along with `getContext()`.

#### Arguments
1. `childContextTypes` *(Object)*:
2. `getChildContext` *(Function)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
// Provide window in the context, useful for testing
const withWindow = withContext({window: PropTypes.object.isRequired}, () => {window})
```
---

<!-- /div -->

<!-- div -->

<h3 id="withhandlershandlerfactories"><code>withHandlers(handlerFactories)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/withHandlers.js#L50 "View in source") [&#x24C9;][1]

Takes an object map of handler creators or a factory function. These are
higher-order functions that accept a set of props and return a function handler:
<br>
<br>
This allows the handler to access the current props via closure, without needing
to change its signature.
<br>
<br>
Handlers are passed to the base component as immutable props, whose identities
are preserved across renders. This avoids a common pitfall where functional
components create handlers inside the body of the function, which results in a
new handler on every render and breaks downstream `shouldComponentUpdate()`
optimizations that rely on prop equality.

#### Arguments
1. `handlerFactories` *(Function|Object)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const enhance = compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: props => event => {
      props.updateValue(event.target.value)
    },
    onSubmit: props => event => {
      event.preventDefault()
      submitForm(props.value)
    }
  })
)

const Form = enhance(({ value, onChange, onSubmit }) =>
  <form onSubmit={onSubmit}>
    <label>Value
      <input type="text" value={value} onChange={onChange} />
    </label>
  </form>
)
```
---

<!-- /div -->

<!-- div -->

<h3 id="withobsobsmapper"><code>withObs(obsMapper)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/withObs.js#L22 "View in source") [&#x24C9;][1]

Similar to `mapObs` except that observables will be merged to the previous ones.

#### Arguments
1. `obsMapper` *(Function)*: The function that take previous observables and returns new ones.

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const withFullName$ = mapObs(({firstName$, props$}) => ({
 fullName$: Observable.combineLatest(
   firstName$,
   props$.pluck('lastName'),
   (firstName, lastName) => `${firstName} ${lastName}`
  )
}))
```
---

<!-- /div -->

<!-- div -->

<h3 id="withpropspropsmapper"><code>withProps(propsMapper)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/withProps.js#L23 "View in source") [&#x24C9;][1]

Like `mapProps()`, except the newly created props are merged with the owner props.
<br>
<br>
Instead of a function, you can also pass a props object directly. In this form,
it is similar to `defaultProps()`, except the provided props take precedence over
props from the owner.

#### Arguments
1. `propsMapper` *(Function|Object)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const Button = withProps({type: 'button'})('button');
const XButton = withProps(({type}) => {type: `x${type}`})('button');
```
---

<!-- /div -->

<!-- div -->

<h3 id="withpropsonchangeshouldmaporkeys-createprops"><code>withPropsOnChange(shouldMapOrKeys, createProps)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/withPropsOnChange.js#L27 "View in source") [&#x24C9;][1]

Like `withProps()`, except the new props are only created when one of the owner
props specified by `shouldMapOrKeys` changes. This helps ensure that expensive
computations inside `createProps()` are only executed when necessary.
<br>
<br>
Instead of an array of prop keys, the first parameter can also be a function
that returns a boolean, given the current props and the next props. This allows
you to customize when `createProps()` should be called.

#### Arguments
1. `shouldMapOrKeys` *(Function|String|String&#91;&#93;)*:
2. `createProps` *(Function)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const withEmptyProp = withPropsOnChange('count', ({count}) => ({empty: count === 0}));
```
---

<!-- /div -->

<!-- div -->

<h3 id="withreducerstatename-dispatchname-reducer-initialstate"><code>withReducer(stateName, dispatchName, reducer, initialState)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/withReducer.js#L46 "View in source") [&#x24C9;][1]

Similar to `withState()`, but state updates are applied using a reducer function.
A reducer is a function that receives a state and an action, and returns a new state.
<br>
<br>
Passes two additional props to the base component: a state value, and a
dispatch method. The dispatch method sends an action to the reducer, and
the new state is applied.

#### Arguments
1. `stateName` *(String)*:
2. `dispatchName` *(String)*:
3. `reducer` *(Function)*:
4. `initialState` *(&#42;)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
const counterReducer = (count, action) => {
  switch (action.type) {
  case INCREMENT:
    return count + 1
  case DECREMENT:
    return count - 1
  default:
    return count
  }
}

const enhance = withReducer('counter', 'dispatch', counterReducer, 0)
const Counter = enhance(({ counter, dispatch }) =>
  <div>
    Count: {counter}
    <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
    <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
  </div>
)
```
---

<!-- /div -->

<!-- div -->

<h3 id="withstatestatename-stateupdatername-reducer-initialstate"><code>withState(stateName, stateUpdaterName, reducer, initialState)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/withState.js#L47 "View in source") [&#x24C9;][1]

Passes two additional props to the base component: a state value, and a function
to update that state value. The state updater has the following signature:
<br>
<br>
```js
stateUpdater<T>((prevValue: T) => T, ?callback: Function): void
stateUpdater(newValue: any, ?callback: Function): void
```
<br>
<br>
The first form accepts a function which maps the previous state value to a new
state value. You'll likely want to use this state updater along with `withHandlers()`
or `withProps()` to create specific updater functions. For example, to create an
HoC that adds basic counting functionality to a component:
<br>
<br>
```js
const addCounting = compose( withState('counter', 'setCounter', `0`), withProps(({ setCounter }) => *({ increment: () => setCounter(n => n + `1`), decrement: () => setCounter(n => n - `1`), reset: () => setCounter(0) }))*
)
```
<br>
<br>
The second form accepts a single value, which is used as the new state.
<br>
<br>
Both forms accept an optional second parameter, a callback function that will
be executed once `setState()` is completed and the component is re-rendered.
<br>
<br>
An initial state value is required. It can be either the state value itself,
or a function that returns an initial state given the initial props.

#### Arguments
1. `stateName` *(String)*:
2. `stateUpdaterName` *(String)*:
3. `reducer` *(Function)*:
4. `initialState` *(&#42;|Function)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

---

<!-- /div -->

<!-- div -->

<h3 id="wrapdisplaynamecomponent-wrappername"><code>wrapDisplayName(component, wrapperName)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/wrapDisplayName.js#L19 "View in source") [&#x24C9;][1]

Returns a wrapped version of a React component's display name. For instance,
if the display name of `component` is `'Post'`, and `wrapperName` is `'mapProps'`,
the return value is `'mapProps(Post)'`. Most Recompose higher-order components
use `wrapDisplayName()`.

#### Arguments
1. `component` *(ReactClass|ReactFunctionalComponent)*: Component
2. `wrapperName` *(String)*: Wrapper name

#### Returns
*(String)*: Returns a wrapped displayName of the component.

#### Example
```js
// Create a hoc that will log when a component will mount
wrapDisplayName(Button, 'wrap'); // will return wrap(Button)
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Utilities” Methods`

<!-- div -->

<h3 id="componentfrompropprop"><code>componentFromProp(prop)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/componentFromProp.js#L21 "View in source") [&#x24C9;][1]

Creates a component that accepts a component as a prop and renders it
with the remaining props.

#### Arguments
1. `prop` *(String)*: The prop to render as Component.

#### Returns
*(ReactFunctionalComponent)*: Returns a Component.

#### Example
```js
const enhance = defaultProps({component: 'button'});
const Button = enhance(componentFromProp('component'));

<Button foo="bar" /> // renders <button foo="bar" />
<Button component="a" foo="bar" />  // renders <a foo="bar" />
<Button component={Link} foo="bar" />  // renders <Link foo="bar" />
```
---

<!-- /div -->

<!-- div -->

<h3 id="composefuncs"><code>compose([funcs])</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/compose.js#L17 "View in source") [&#x24C9;][1]

This method is similar to lodash `flowRight`. It permits to easily compose
several high order components.

#### Arguments
1. `[funcs]` *(...Function)*: The functions to invoke.

#### Returns
*(Function)*: Returns the new composite function.

#### Example
```js
const enhance = compose(pure, withProps({foo: 'bar'}));
const Component = enhance(MyComponent);
```
---

<!-- /div -->

<!-- div -->

<h3 id="createeagerelementtype-props-children"><code>createEagerElement(type, [props], [children])</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/createEagerElement.js#L23 "View in source") [&#x24C9;][1]

React elements are lazily evaluated. But when a higher-order component
renders a functional component, the laziness doesn't have any real benefit.
createEagerElement() is a replacement for React.createElement() that checks
if the given component is referentially transparent. If so, rather than
returning a React element, it calls the functional component with the given
props and returns its output.

#### Arguments
1. `type` *(ReactClass|ReactFunctionalComponent|String)*: The type of component to render.
2. `[props]` *(Object)*: The props of the component.
3. `[children]` *(ReactNode)*: The children of the component.

#### Returns
*(ReactElement)*: Returns a element.

#### Example
```js
createEagerElement('div', {className: 'foo'});
```
---

<!-- /div -->

<!-- div -->

<h3 id="createeagerfactorytype"><code>createEagerFactory(type)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/createEagerFactory.js#L19 "View in source") [&#x24C9;][1]

The factory form of `createEagerElement()`.
Given a component, it returns a [factory](https://facebook.github.io/react/docs/react-api.html#createfactory).

#### Arguments
1. `type` *(ReactClass|ReactFunctionalComponent|String)*: The type of component to render.

#### Returns
*(Function): Returns a function that take two arguments (props, children)* and create
an element of the given type.

#### Example
```js
const div = createFactory('div');
div({className: 'foo'});
```
---

<!-- /div -->

<!-- div -->

<h3 id="createeventhandler"><code>createEventHandler()</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/createEventHandler.js#L36 "View in source") [&#x24C9;][1]

Returns an object with properties handler and stream. stream is an observable
sequence, and handler is a function that pushes new values onto the sequence.
Useful for creating event handlers like onClick.

#### Returns
*(Object)*: eventHandler

#### Example
```js
const {handler, stream} = createEventHandler();
```
---

<!-- /div -->

<!-- div -->

<h3 id="createhelperhoc-helpername-noargsfalse"><code>createHelper(hoc, helperName, [noArgs=false])</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/createHelper.js#L22 "View in source") [&#x24C9;][1]

Utility method that gives to higher-order components a comprehensive display name.

#### Arguments
1. `hoc` *(HigherOrderComponent)*: Higher-order component to wrap.
2. `helperName` *(String)*: Name used to create displayName.
3. `[noArgs=false]` *(Boolean)*: Indicate if the higher-order component has some arguments.

#### Returns
*(HigherOrderComponent)*: Returns a wrapped hoc.

#### Example
```js
const pluckOnChangeTargetValue = createHelper(
  withHandlers({
    onChange: ({onChange}) => ({target: {value}}) => onChange(value),
  }),
  'pluckOnChangeTargetValue',
);

const Input = pluckOnChangeTargetValue('input');
<Input /> // Will have "pluckOnChangeTargetValue(input)" as displayName
```
---

<!-- /div -->

<!-- div -->

<h3 id="createsinkcallback"><code>createSink(callback)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/createSink.js#L18 "View in source") [&#x24C9;][1]

Creates a component that renders nothing *(null)* but calls a callback when
receiving new props.

#### Arguments
1. `callback` *(Function)*: Function called when new props are received.

#### Returns
*(ReactClass)*: Returns a ReactClass.

#### Example
```js
const LocationUpdater = createSink(({hash}) => {
  window.location.hash = hash;
});
<LocationUpdater hash="foo" /> // Will add "#foo" in the url
```
---

<!-- /div -->

<!-- div -->

<h3 id="getdisplaynamecomponent"><code>getDisplayName(component)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/getDisplayName.js#L15 "View in source") [&#x24C9;][1]

Returns the display name of a React component. Falls back to 'Component'.

#### Arguments
1. `component` *(ReactClass|ReactFunctionalComponent)*:

#### Returns
*(String)*: Returns the display name of the provided component.

#### Example
```js
const MyButton = () => <button />;
MyButton.displayName = 'MyButton';

getDisplayName(MyComponent); // Will return "MyButton"
```
---

<!-- /div -->

<!-- div -->

<h3 id="hoiststaticshoc"><code>hoistStatics(hoc)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/hoistStatics.js#L21 "View in source") [&#x24C9;][1]

Augments a higher-order component so that when used, it copies non-react
static properties from the base component to the new component. This is
helpful when using Recompose with libraries like Relay.
<br>
<br>
Note that this only hoists non-react statics. The following static properties
will not be hoisted: childContextTypes, contextTypes, defaultProps, displayName,
getDefaultProps, mixins, propTypes, and type. The following native static methods
will also be ignored: name, length, prototype, caller, arguments, and arity

#### Arguments
1. `hoc` *(HigherOrderComponent)*:

#### Returns
*(HigherOrderComponent)*: Returns a function that take a Component.

#### Example
```js
hoistStatics(withProps({foo: 'bar'}));
```
---

<!-- /div -->

<!-- div -->

<h3 id="identityvalue"><code>identity(value)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/identity.js#L13 "View in source") [&#x24C9;][1]

This method is similar to lodash `identity`. It returns the first argument it receives.

#### Arguments
1. `value` *(&#42;)*: Any value

#### Returns
*(&#42;)*: Returns `value`

#### Example
```js
identity(Component) === Component
```
---

<!-- /div -->

<!-- div -->

<h3 id="isclasscomponentvalue"><code>isClassComponent(value)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/isClassComponent.js#L18 "View in source") [&#x24C9;][1]

Returns true if the given value is a React component class.

#### Arguments
1. `value` *(&#42;)*: Any value

#### Returns
*(Boolean)*: Returns true if the given value is a React component class.

#### Example
```js
const Nothing = () => null;
const Nothing2 = class extends Component { render() { return null; } };
const Nothing3 = React.createClass({ render() { return null; } });
isClassComponent(Nothing); // false
isClassComponent(Nothing2); // true
isClassComponent(Nothing3); // true
```
---

<!-- /div -->

<!-- div -->

<h3 id="isreferentiallytransparentfunctioncomponentvalue"><code>isReferentiallyTransparentFunctionComponent(value)</code></h3>
[&#x24C8;](https://github.com/neoziro/recompact/blob/0.0.0/src/isReferentiallyTransparentFunctionComponent.js#L20 "View in source") [&#x24C9;][1]

Returns true if the given value is a referentially transparent function component.
A referentially transparent function component is a component without any other
thing expect taking some props and returning a component.
<br>
<br>
This method is useful to apply some optimization.

#### Arguments
1. `value` *(&#42;)*: Any value

#### Returns
*(Boolean)*: Returns true if the given value is a referentially
transparent function component.

#### Example
```js
const Button = () => <button />;
isReferentiallyTransparentFunctionComponent(Button); // true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #config "Jump back to the TOC."