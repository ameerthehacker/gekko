/* 
  A JavaScript Proxy is an object that allows you to control the behavior of another   object. It acts as a middleman between your code and the object you want to interact with.

  Imagine you have an object called target which has some properties and methods. By creating a Proxy for this target object, you can intercept and customize the way your code interacts with it.
*/

const backendProxy = new Proxy({}, {
  get: (_, property: string) => {
    // import * as fs from './fs.server';
    // fs.readFile('./sample.txt');
    // fs => proxy
    // readFile => property

    return async (...params) => {
      console.log(`accessing property ${property} from proxy with params ${params}`);
    };
  }
});

export default backendProxy;
