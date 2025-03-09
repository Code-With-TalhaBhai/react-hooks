This is comparatively new hook used with `React-Server-Components`(RSC). It allows you to `use` promises (like fetching data) directly inside components without needing explicit state management (`useState`) or effects (`useEffect`).

    1. It suspends the component while waiting for a promise to resolve.
    2. If the promise resolves, the component continues rendering with the resolved data.
