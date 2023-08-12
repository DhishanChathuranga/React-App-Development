// const name = "Dhishan Chathuranga";
// const position = "Web Developer";

// const myObj = {
//     name:`${name}`,
//     position:`${position}`,
//     city: 'Galle',
// }

function Main({children, name, position, city}) {
    // const {city} = myObj;
  return (
    <div>
      <h1>This is Main</h1>
      <ul>
        <li>{name}</li>
        <li>{position}</li>
        <li>{city}</li>
      </ul>
      {children}
    </div>
  );
}

export default Main;
