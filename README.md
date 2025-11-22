# Catálogo de Filmes - Projeto Flask

Bem-vindo ao **Catálogo de Filmes**, uma aplicação web desenvolvida para o gerenciamento pessoal de coleções de filmes. Este projeto foi construído seguindo o padrão de arquitetura **MVC**, utilizando **Python/Flask** no back-end e **HTML/CSS/JS** no front-end.

---

## 🚀 Funcionalidades

O sistema oferece um **CRUD Completo** (Create, Read, Update, Delete):

* **Adicionar:** Cadastro de novos filmes (Título, Gênero, Ano).
* **Listar:** Visualização dinâmica de todos os filmes salvos.
* **Editar:** Atualização das informações de um filme existente.
* **Excluir:** Remoção segura de registros (com confirmação visual).
* **Persistência:** Todos os dados são salvos em banco de dados SQLite via **SQLAlchemy**.

---

## 📂 Estrutura do Projeto

A organização segue as boas práticas do Flask:

* **run.py**: Arquivo principal que inicia o servidor.
* **app/**: Pasta contendo todo o código fonte.
    * **models/filme.py**: Define a tabela do banco de dados.
    * **controllers/views.py**: Controla as rotas e a lógica do sistema.
    * **templates/**: Arquivos HTML (Jinja2) para as páginas.
    * **static/**: Arquivos CSS (estilo) e JS (scripts).

---

## 🛠️ Tecnologias

* **Python 3**
* **Flask** (Microframework Web)
* **SQLAlchemy** (Banco de Dados ORM)
* **HTML5 & CSS3**
* **JavaScript** (Interatividade no Front-end)

---

## 👨‍💻 Autores

Projeto desenvolvido para a disciplina de **Desenvolvimento Web II**.

* **Alunos:** [Ana Karine de Freitas](https://github.com/akarinela) e [Humberto Wagner de Sousa](https://github.com/1bertoW)
* **Professor:** Thomaz Maia
