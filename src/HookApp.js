import React, { Component } from "react";
import ClassCounterOne from "./components/Hook/ClassCounterOne";
import HookCounter from "./components/Hook/HookCounter";
import HookCounterFour from "./components/Hook/HookCounterFour";
import HookCounterOne from "./components/Hook/HookCounterOne";
import HookCounterThree from "./components/Hook/HookCounterThree";
import HookCounterTwo from "./components/Hook/HookCounterTwo";

const UseEffectHook = () => {
  return (
    <div>
      {/* <ClassCounterOne /> */}
      <HookCounterOne />
    </div>
  );
};
//setItems([...items, {id:1,..}])
const UseStateWithArray = () => {
  return (
    <div>
      <HookCounterFour />
    </div>
  );
};
//manully merge the obj attributes
const UseStateWithObject = () => {
  return (
    <div>
      <HookCounterThree />
    </div>
  );
};
//useStateWithPrevious
const UseStateWithPreviousState = () => {
  return (
    <div>
      <HookCounterTwo />
    </div>
  );
};
class HookApp extends Component {
  render() {
    return (
      <div>
        <HookCounter />
        {/* <ClassCounter /> */}
      </div>
    );
  }
}

export default UseEffectHook;

export {
  HookApp,
  UseStateWithPreviousState,
  UseStateWithObject,
  UseStateWithArray,
  UseEffectHook,
};
