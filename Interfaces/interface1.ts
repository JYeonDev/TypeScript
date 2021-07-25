interface person1 {
  name: string;
  age: number;
}


function hello1(person: {name: string; age: number}): void{
  console.log(`안녕하세요 ${person.name} 입니다.`);
}


const p1: {name:string; age: number} = {
  name: "Mark",
  age: 39,
};

hello1(p1);