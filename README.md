# 📽️ Catálogo de Filmes - Projeto Flask

Bem-vindo ao **Catálogo de Filmes**, uma aplicação web desenvolvida para o gerenciamento pessoal de coleções de filmes. Este projeto foi construído seguindo o padrão de arquitetura **MVC**, utilizando **Python/Flask** no back-end e **HTML/CSS/JS** no front-end.

---

## 🎬 Funcionalidades

O sistema oferece um **CRUD Completo** (Create, Read, Update, Delete):

* **Adicionar:** Cadastro de novos filmes (Título, Gênero, Ano).
* **Listar:** Visualização dinâmica de todos os filmes salvos.
* **Editar:** Atualização das informações de um filme existente.
* **Excluir:** Remoção segura de registros (com confirmação visual).
* **Persistência:** Todos os dados são salvos em banco de dados SQLite via **SQLAlchemy**.

---

## 📂 Estrutura do Projeto

A organização segue as boas práticas do Flask:

```text
/projeto_final
│
├── run.py                  # 🚀 Inicializador: Gerencia o contexto e executa o servidor
│
├── /app                    # 📦 Pacote Principal da Aplicação
│   ├── __init__.py         # Cria o App e o Banco de Dados
│   │
│   ├── /models
│   │   └── filme.py        # 🗄️ Modelo de Dados (Tabela SQL)
│   │
│   ├── /controllers
│   │   └── views.py        # 🎮 Controlador: Gerencia rotas e lógica de requisições
│   │
│   ├── /static             # 🎨 Arquivos Estáticos
│   │   ├── /css
│   │   │   └── style.css   # Folhas de estilo para layout e design
│   │   └── /js
│   │       └── script.js   # Scripts de interatividade (DOM)
│   │
│   └── /templates          # 📑 Camada de Visualização (HTML + Jinja2)
│       ├── filme.html      # Dashboard principal (Lista e Formulário de Adição)
│       └── editar.html     # Interface dedicada para atualização de dados
```
---

## ⚙️ Tecnologias

* **Python**
* **Flask**
* **SQLAlchemy** (Banco de Dados)
* **HTML e CSS**
* **JavaScript** (Interatividade no Front-end)

---

## 👨‍💻 Autores

Projeto desenvolvido para a disciplina de **Desenvolvimento Web II**.

* **Alunos:** [Ana Karine de Freitas](https://github.com/akarinela) e [Humberto Wagner de Sousa](https://github.com/1bertoW)
* **Professor:** Thomaz Maia
