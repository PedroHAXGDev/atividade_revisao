"use strict";
class Funcionario {
    nome;
    email;
    telefone;
    cpf;
    cargo;
    matricula;
    genero;
    constructor(nome, email, telefone, cpf, cargo, matricula, genero) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.cargo = cargo;
        this.matricula = matricula;
        this.genero = genero;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getCargo() {
        return this.cargo;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
    mostrarDados() {
        console.log('(-----Dados do Funcionario-----');
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`CPF: ${this.cpf}`);
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`);
        }
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Email: ${this.email}`);
        console.log('--------------------------------');
    }
}
const funcionario1 = new Funcionario('Valtemir', 'valtemir@gmail.com', '84911111111', '12345678900', 'Gestor de Equipe', 'matricula01', 'masculino');
const funcionario2 = new Funcionario('Gil Bala', 'gilbalinha@gmail.com', '84922222222', '12345678911', 'Especialista em Marketing Digital', 'matricula02', 'masculino');
const funcionario3 = new Funcionario('Ícaro Gabriel', 'icarus@gmail.com', '84933333333', '12345678933', 'Social Media Maneger', 'matricula03', 'masculino');
const funcionario4 = new Funcionario('Júlia Wester', 'juhwest@gmail.com', '84944444444', '12345678944', 'Assistente de Marketing', 'matricula04', 'feminino');
class Equipe {
    nome_equipe;
    gestor_equipe;
    componente1;
    componente2;
    componente3;
    constructor(nome_equipe, gestor_equipe, componente1, componente2, componente3) {
        this.nome_equipe = nome_equipe;
        this.gestor_equipe = gestor_equipe;
        this.componente1 = componente1;
        this.componente2 = componente2;
        this.componente3 = componente3;
    }
    mostrarDados() {
        console.log('(-----Dados da Equipe-----)');
        console.log(`Equipe: ${this.nome_equipe}`);
        console.log(`Responsável: ${this.gestor_equipe}`);
        console.log(`Componentes: ${this.componente1}, ${this.componente2}, ${this.componente3}`);
        console.log('---------------------------');
    }
}
const equipe1 = new Equipe('Equipe01', funcionario1, funcionario2, funcionario3, funcionario4);
class Projeto {
    nome;
    descricao;
    data_inicio;
    data_termino;
    status;
    equipe;
    constructor(nome, descricao, data_inicio, data_termino, status, equipe) {
        this.nome = nome;
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_termino = data_termino;
        this.status = status;
        this.equipe = equipe;
    }
    mostrarDados() {
        console.log('(-----Dados do Projeto-----)');
        console.log(`Nome: ${this.nome}`);
        console.log(`Data de Início: ${this.data_inicio}`);
        console.log(`Data de Término: ${this.data_termino}`);
        console.log(`Status: ${this.status}`);
        console.log(`Equipe: ${this.equipe}`);
    }
}
const projeto1 = new Projeto('Projeto Marketing', 'Este projeto está focado na produção e desenvolvmento do marketing digital da empresa (empresax).', new Date('2024-03-18'), new Date('2025-03-18'), 'em andamento', equipe1);
class Tarefa {
    projeto;
    nome_tarefa;
    descricao_tarefa;
    responsavel;
    prazo;
    status_tarefa;
    constructor(projeto, nome_tarefa, descricao_tarefa, responsavel, prazo, status_tarefa) {
        this.projeto = projeto;
        this.nome_tarefa = nome_tarefa;
        this.descricao_tarefa = descricao_tarefa;
        this.responsavel = responsavel;
        this.prazo = prazo;
        this.status_tarefa = status_tarefa;
    }
    mostrarDados() {
        console.log('(-------Tarefas-------');
        console.log(`Terefa: ${this.nome_tarefa}`);
        console.log(`Projeto: ${this.projeto}`);
        console.log(`Responsável: ${this.responsavel}`);
        console.log(`Status: ${this.status_tarefa}`);
        console.log(`Prazo: ${this.prazo}`);
        console.log(`Descrição: ${this.descricao_tarefa}`);
        console.log('----------------------');
    }
}
const tarefa1 = new Tarefa(projeto1, 'Breafing com a empresa cliente.', 'A equipe responsável pela tarefa deve entrar em contato com os representantes da empresa cliente para efetuar o processo de Briefing para que tenhamos indicações sobre seus interesses.', funcionario1, new Date('2024-04-20'), 'não iniciado.');
funcionario1.mostrarDados();
