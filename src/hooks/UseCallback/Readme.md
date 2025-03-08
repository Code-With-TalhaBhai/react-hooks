When you wrap a function inside `callback` it doesn't recreated when the component re-renders. We can also use `memo` if the wrapped function inside `callback` passes as props to some child component.


The difference between `useMemo` and `useCallback` is `useMemo` takes the function output and `useCallback` takes the whole function.
