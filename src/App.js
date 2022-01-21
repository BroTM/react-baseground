import logo from "./logo.svg";
import "./App.css";
import GreetComponent, {
  GreetWithoutProps,
  GreetWithSecondWay,
} from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";

import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import LifecycleC from "./components/LifecycleC";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
// import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import MemoComp from "./components/MemoComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import ComponentC from "./components/context/ComponentC";
import { UserProvider } from "./components/context/userContext";
import PostList from "./components/HTTP/PostList";
import PostForm from "./components/HTTP/PostForm";

const HTTP = () => {
  return (
    <div>
      <PostForm />
      {/* <PostList /> */}
    </div>
  );
};
//Context provides a way to pass data through the component tree without having to pass props down manually at every level
//Context
//1. create the context
//2. provide a context value
//3. consume the context value
const ContextComponent = () => {
  return (
    <div>
      {/* 2. provide a context value */}
      {/* <UserProvider value="Vishwas"> */}
      <ComponentC />
      {/* </UserProvider> */}
    </div>
  );
};

//sharing code between React components using a prop whose value is a function
//this example prop-fun returns component
const RenderProps = () => {
  return (
    <div>
      {/* <CounterTwo
            render={(count, incrementCount) => (
              <ClickCounterTwo count={count} incrementCount={incrementCount} />
            )}
      /> */}
      <CounterTwo>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>
      <CounterTwo>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>

      {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> 
      */}
    </div>
  );
};
//There are part1,2,3
//HOC
//name as props -> this.props can't be called in ClickCounter, can be called in hoc fun
const HigherOrderComponent = () => {
  return (
    <div>
      <ClickCounter name="Vishwas" />
      <HoverCounter name="BTMS" />
    </div>
  );
};
const ErrorHandling = () => {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
};
//ReactDOM.createPortal(component,document.getElementById('portal-root'))
//it is used for popup or dialog
const Portal = () => {
  return (
    <div>
      <PortalDemo />
    </div>
  );
};
//focus method in parent comp
const ForwardingRefs = () => {
  return (
    <div>
      <FRParentInput />
    </div>
  );
};
//use the method from child component
//focus method in child comp
const RefsWithClassComponent = () => {
  return (
    <div>
      <FocusInput />
    </div>
  );
};
//as soon as page load, input field to be focus
const RefsComponent = () => {
  return (
    <div>
      <RefsDemo />
    </div>
  );
};
//function base pure component
const MemoComponent = () => {
  return (
    <div>
      <ParentComp />
    </div>
  );
};
//class base pure component
const PureComponent = () => {
  return (
    <div>
      <ParentComp />
    </div>
  );
};
const Fragments = () => {
  return (
    <div>
      <FragmentDemo />
      <Table />
    </div>
  );
};
const ComponentUpdatingLifeCycleMethods = () => {
  return (
    <div>
      <LifecycleC />
    </div>
  );
};
const ComponentMountingLifeCycleMethods = () => {
  return (
    <div>
      <LifecycleA />
    </div>
  );
};
const BasicOfFormHandling = () => {
  return (
    <div>
      <Form />
    </div>
  );
};
const StylingAndCssBasic = () => {
  return (
    <div>
      <div>
        <h1 className="error"> Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
      <Inline />
      <StyleSheet primary={true} />
    </div>
  );
};
const ListAndKey = () => {
  return (
    <div>
      <NameList />
    </div>
  );
};
const ListRendering = () => {
  return (
    <div>
      <NameList />
    </div>
  );
};
const ConditionalRendering = () => {
  return (
    <div>
      <UserGreeting />
    </div>
  );
};
const MethodsAsProps = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};
const BindingEventHandler = () => {
  return (
    <div>
      <EventBind />
    </div>
  );
};

const EventHandling = () => {
  return (
    <div>
      <FunctionClick />
      <ClassClick />
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <GreetComponent name="Bruce" heroName="Batman">
        {" "}
        <p>This is children props.</p>
      </GreetComponent>
      <GreetComponent name="Clark" heroName="Superman">
        <button>Action</button>
      </GreetComponent>
      <GreetComponent name="Diana" heroName="Wonder Women" />

      <Hello />

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Women" />

      <Message />
      <Toggle />

      <Counter />
      <GreetWithoutProps name="BTMS" heroName="Thor" />
      <GreetWithSecondWay name="BTMS" heroName="Alpha" />
    </div>
  );
}

export default App;

export {
  App,
  EventHandling,
  BindingEventHandler,
  MethodsAsProps,
  ConditionalRendering,
  ListRendering,
  ListAndKey,
  StylingAndCssBasic,
  BasicOfFormHandling,
  ComponentMountingLifeCycleMethods,
  ComponentUpdatingLifeCycleMethods,
  Fragments,
  PureComponent,
  MemoComponent,
  RefsComponent,
  RefsWithClassComponent,
  ForwardingRefs,
  Portal,
  ErrorHandling,
  HigherOrderComponent,
  RenderProps,
  ContextComponent,
  HTTP,
};

/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */
