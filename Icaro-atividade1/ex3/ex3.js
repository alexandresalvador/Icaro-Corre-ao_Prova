//a

let alunos = [
    { id: 1, name: "Maria", lista: 5, trabalho: 5, prova: 10 },
    { id: 2, name: "Ana", lista: 2, trabalho: 1, prova: 8 },
    { id: 3, name: "Carlos", lista: Math.round(1.6), trabalho: 1, prova: 4 },
    { id: 4, name: "Pedro", lista: 3, trabalho: 1, prova: 6 },

]

alunos;


//b

for (i - 0; i, alunos.length; i++) {
    let sum = 0;
    let media = 0;
    let interacaoAlunos = alunos[i];
    sum = sum + interacaoAlunos.lista + interacaoAlunos.trabalho + interacaoAlunos.prova;
    media = (media + sum) / 2


    //round
    console.log('${interacaoAlunos.name} | Media ${media}');
}


//ex4


function addAluno(nameAluno, notas) {
    if (notas) {

        notaDefault = {
            lista: 0,
            trabalho: 0,
            prova: 0
        }
        console.log('O Aluno ${nameAluno} inserido com sucesso no sistema');
    }
    alunos.push(nameAluno);
    console.log('O Aluno ${nameAluno} inserido com sucesso no sistema');
}

//outro jeito


function addAluno(nameAluno, notas) {
    if (nameAluno) {
        console.log('O nome não pode ser nulo');
    } else if (notas) {
        notes = 0
        alunos.push({ id = 99, nameAluno, lista: notes, trabalho: notes, prova: notes });
        console.log('O Aluno ${nameAluno} inserido com sucesso no sistema');
    }
}

function RemoveAluno(id) {
    if (id) {
        console.log('Ops.. não pode ser removido um aluno sem um ID');
    } else if (id == alunos.id) {
        //metodo de array, splice
        alunos.splice(0, 1);
        console.log('O Aluno foi removido com sucesso no sistema');
    }

}