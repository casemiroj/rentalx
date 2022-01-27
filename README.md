# Cadastro de carros
**Requisitos funcionais**
* Deve ser possível cadastrar um novo carro.

**Regras de negócio**
* Não deve ser possivel cadastrar um carro com uma placa já existente.
* O Carro deve ser cadastrado, por padrão, com disponibilidade.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros
**Requisitos funcionais**
* Deve ser possível listar todos os carros disponíveis.
* Deve ser possível listar os carros disponíveis pelo nome da categoria.
* Deve ser possível listar os carros disponíveis pelo nome da marca.
* Deve ser possível listar os carros disponíveis pelo nome do carro.

**Regras de negócio**
* O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro
**Requisitos funcionais**
* Deve ser possível cadastrar uma especificação para um carro.
* Deve ser possível listar todas as especificações
* Deve ser possível listar todos os carros

**Regras de negócio**
* Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
* Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de Imagens do carro
**Requisitos funcionais**
* Deve ser possível cadastrar a imagem do carro.
* Deve ser possível listar todos os carros.

**Requisitos não funcionais**
* Utilizar o multer para upload dos arquivos.

**Regras de negócio**
* O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro
**Requisitos funcionais**
* Deve ser possível cadastrar um aluguel.

**Requisitos não funcionais**

**Regras de negócio**
* O aluguel deve ter duração minima de 24 horas.
* Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
* Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
