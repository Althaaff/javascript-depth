function useBoolean(initialValue) {
  const state = { value: initialValue };

  function setTrue() {
    state.value = true;
  }

  function setFalse() {
    state.value = false;
  }

  return { state, setTrue, setFalse };
}

const { state, setTrue, setFalse } = useBoolean(false);

console.log(state.value);

setTrue();

console.log(state.value);

setFalse();

console.log(state.value);
