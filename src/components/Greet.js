import React from "react";

function Greet(props) {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
    </div>
  );
}

export function GreetWithoutProps() {
  return (
    <div>
      <h1>Welcome to BTMS application !</h1>
    </div>
  );
}

export function GreetWithSecondWay(props) {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
}
export default Greet;

// import React from "react";

// /*
//   function Greet() {
//       return <h1>Hello Vishwas</h1>;
//   }
// */

// /* //without function keyword
//   const Greet = () => <h1>Hello BTMS</h1>;
// */

// //with props
// const Greet = (props) => {
//   console.log(props);
//   /*//don't
//     props.name="BTMS"
//     ready only, cannot asignable
//   */
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

// export const GreetWithoutProps = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

// const GreetWithSecondWay = (props) => {
//   const { name, heroName } = props;
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

// export { GreetWithSecondWay };

// export default Greet;
