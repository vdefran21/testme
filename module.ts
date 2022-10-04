export function theFunction(name:string) {
  console.log(`${name}`);
}

export function callTheFunction(x:string) {
  switch (x) {
    case 'a': {
      theFunction('a');
      break;
    }
    case 'b': {
      theFunction('b');
      break;
    }
    default: {
      theFunction('x');
      break;
    }
  }
}
