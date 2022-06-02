function* geradora1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}
const g1 = geradora1();
// console.log(g1);
// console.log(g1.next());
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next());

for (let valor of g1) {
  console.log(valor);
}

//Infinita (não fazer):
function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//Delega tarefa para outra função:
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor);
}

//Delega tarefas com funções:
function* geradora5() {
  yield function () {
    console.log("Vim da y1");
  };
  yield function () {
    console.log("Vim da y2");
  };
}

const g5 = geradora5();
const f1 = g5.next().value;
const f2 = g5.next().value;
f1();
f2();
