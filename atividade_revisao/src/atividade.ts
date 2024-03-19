class Pessoa{
    protected nome: string;
    protected email: string;
    protected telefone: string;
    protected cpf: string;
    protected genero?: string;

    constructor(nome:string, email:string, telefone:string, cpf: string, genero?: string){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.genero = genero;
    }
    getNome(): string{
        return this.nome;
    }
    setNome(nome: string): void{
        this.nome = nome;
    }
    getEmail(): string{
        return this.email;
    }
    setEmail(email: string): void{
        this.email = email;
    }
    getTelefone(): string{
        return this.telefone;
    }
    setTelefone(telefone: string): void{
        this.telefone = telefone;
    }
    getCpf(): string{
        return this.cpf;
    }
    setCpf(cpf: string): void{
        this.cpf = cpf;
    }
}

class Funcionario extends Pessoa {
    private cargo: string;
    private matricula: string;

    constructor(cargo: string, matricula: string, nome: string, email: string, telefone: string, cpf: string, genero?: string){
    super(nome, email, telefone, cpf, genero);
        this.cargo = cargo;
        this.matricula = matricula;
    }
    getMatricula(): string{
        return this.matricula;
    }
    setMatricula(matricula: string): void{
        this.matricula = matricula;
    }
    getCargo(): string{
        return this.cargo;
    }
    setCargo(cargo: string): void{
        this.cargo = cargo;
    }
    mostrarDados(): void{
        console.log('(-----Dados do Funcionario-----)');
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
const funcionario1 = new Funcionario('Valtemir','valtemir@gmail.com','84911111111','12345678900','Gestor de Equipe','matricula01','masculino');
const funcionario2 = new Funcionario('Gil Bala','gilbalinha@gmail.com','84922222222','12345678911','Especialista em Marketing Digital','matricula02','masculino');
const funcionario3 = new Funcionario('Ícaro Gabriel','icarus@gmail.com','84933333333','12345678933','Social Media Maneger','matricula03','masculino');
const funcionario4 = new Funcionario('Júlia Wester','juhwest@gmail.com','84944444444','12345678944','Assistente de Marketing','matricula04','feminino');

class Equipe {
    nome_equipe: string;
    gestor_equipe: Funcionario;
    componente1: Funcionario;
    componente2: Funcionario;
    componente3: Funcionario;

    constructor(nome_equipe: string, gestor_equipe: Funcionario, componente1: Funcionario, componente2: Funcionario, componente3: Funcionario){
        this.nome_equipe = nome_equipe;
        this.gestor_equipe = gestor_equipe;
        this.componente1 = componente1;
        this.componente2 = componente2;
        this.componente3 = componente3;
    }
    mostrarDados(){
        console.log('(-----Dados da Equipe-----)');
        console.log(`Equipe: ${this.nome_equipe}`) ;
        console.log(`Responsável: ${funcionario1.getNome()}`);
        console.log(`Componentes: ${funcionario2.getNome()}, ${funcionario3.getNome()}, ${funcionario4.getNome()}`);
        console.log('---------------------------');
    }
}

const equipe1 = new Equipe('Equipe01',funcionario1, funcionario2, funcionario3, funcionario4);

class Projeto {
    private nome: string;
    private descricao: string;
    private data_inicio: Date;
    private data_termino: Date;
    private status: string;
    private equipe: Equipe;

    constructor(nome: string, descricao: string, data_inicio: Date, data_termino: Date, status: string, equipe: Equipe){
        this.nome = nome;
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_termino = data_termino;
        this.status = status;
        this.equipe = equipe;
    }
    getNome(): string{
        return this.nome;
    }
    setNome(nome: string): void{
        this.nome = nome;
    }
    getDescricao(): string{
        return this.descricao;
    }
    setDescricao(descricao: string): void{
        this.descricao = descricao;
    }
    getData_inicio(): Date{
        return this.data_inicio;
    }
    setData_inicio(data_inicio: Date): void{
        this.data_inicio = data_inicio;
    }
    getData_termino(): Date{
        return this.data_termino;
    }
    setData_termino(data_termino: Date): void{
        this.data_termino = data_termino;
    }
    getStatus(): string{
        return this.status;
    }
    setStatus(status: string): void{
        this.status = status;
    }
    getEquipe(): Equipe{
        return this.equipe;
    }
    setEquipe(equipe: Equipe): void{
        this.equipe = equipe;
    }
    mostrarDados(){
        console.log('(-----Dados do Projeto-----)');
        console.log(`Nome: ${this.nome}`);
        console.log(`Data de Início: ${this.data_inicio}`);
        console.log(`Data de Término: ${this.data_termino}`);
        console.log(`Status: ${this.status}`);
        console.log(`Equipe: ${equipe1.nome_equipe}`);
    }
}
const projeto1 = new Projeto('Projeto Marketing','Este projeto está focado na produção e desenvolvmento do marketing digital da empresa (empresax).',new Date('2024-03-18'),new Date('2025-03-18'),'em andamento',equipe1)

class Tarefa {
    private projeto: Projeto;
    private nome_tarefa: string;
    private descricao_tarefa: string;
    private responsavel: Funcionario;
    private prazo: Date;
    private status_tarefa: string;

    constructor(projeto: Projeto, nome_tarefa:string, descricao_tarefa: string, responsavel: Funcionario, prazo: Date, status_tarefa: string){
        this.projeto = projeto;
        this.nome_tarefa = nome_tarefa;
        this.descricao_tarefa = descricao_tarefa;
        this.responsavel = responsavel;
        this.prazo = prazo;
        this.status_tarefa = status_tarefa;
    }
    getProjeto(): Projeto{
        return this.projeto;
    }
    setProjeto(projeto: Projeto): void{
        this.projeto = projeto;
    }
    getNome_tarefa(): string{
        return this.nome_tarefa;
    }
    setNome_tarefa(nome_tarefa: string): void{
        this.nome_tarefa = nome_tarefa;
    }
    getDescricao_tarefa(): string{
        return this.descricao_tarefa;
    }
    setDescricao_tarefa(descricao_tarefa: string): void{
        this.descricao_tarefa = descricao_tarefa;
    }
    getResponsavel(): Funcionario{
        return this.responsavel;
    }
    setResponsavel(responsavel: Funcionario): void{
        this.responsavel = responsavel;
    }
    getPrazo(): Date{
        return this.prazo;
    }
    setPrazo(prazo: Date): void{
        this.prazo = prazo;
    }
    getStatus_tarefa(): string{
        return this.status_tarefa;
    }
    setStatus_Tarefa(status_tarefa: string): void{
        this.status_tarefa = status_tarefa
    }
    mostrarDados(){
        console.log('(-------Tarefas-------)');
        console.log(`Terefa: ${this.nome_tarefa}`);
        console.log(`Projeto: ${projeto1.getNome()}`);
        console.log(`Responsável: ${funcionario1.getNome()}`);
        console.log(`Status: ${this.status_tarefa}`);
        console.log(`Prazo: ${this.prazo}`);
        console.log(`Descrição: ${this.descricao_tarefa}`);
    }
}
const tarefa1 = new Tarefa(projeto1, 'Breafing com a empresa cliente.','A equipe responsável pela tarefa deve entrar em contato com os representantes da empresa cliente para efetuar o processo de Briefing para que tenhamos indicações sobre seus interesses.', funcionario1, new Date('2024-04-20'),'não iniciado.');

funcionario1.mostrarDados()
funcionario2.mostrarDados()
funcionario3.mostrarDados()
funcionario4.mostrarDados()
equipe1.mostrarDados()
projeto1.mostrarDados()
tarefa1.mostrarDados()