# Sopa de Letras - Projecto Fullstack

Bem-vindo ao projecto Sopa de Letras! Esta aplicação demonstra competências em desenvolvimento fullstack, utilizando tecnologias actuais como React e TailwindCSS no frontend, e FastAPI no backend.

## 🛠️ Tecnologias Utilizadas

**Frontend:**

- [React](https://pt-br.react.dev)
- [TailwindCSS](https://tailwindcss.com/)

**Backend:**

- [FastAPI](https://fastapi.tiangolo.com/)

## 🚀 Instruções para Instalação

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados na sua máquina.

1. **Clone o Repositório:**

```bash
git clone https://github.com/BaTaTaAdb/sopa-de-letras.git
cd directoria_do_projecto
```

2. **Instalação das Dependências:**
   Vá para o directorio do frontend e execute o seguinte comando para instalar as dependências presentes no `package.json`:

```bash
cd frontend
npm install
```

3. **Configuração do Backend:**
   (Certifique-se que possui todos os pacotes necessários para correr o FastAPI)

```bash
# Aceda à directoria do backend e execute
cd backend
python -m venv venv
source "./venv/Scripts/activate"
python -m pip install -r requirements.txt
```

4. **Execução da Aplicação:**

- Inicie o backend (FastAPI):

```bash
uvicorn main:app --reload # (uso de uvicorn para iniciar o FastAPI)
```

- De seguida, inicie o frontend (React):

```bash
cd frontend
npm install
npm start # Inicia o servidor na versão de desenvolvimento
```

- **OU** Contrua o frontend (React):

```bash
npm run build
npm install -g serve
serve -s build # Serve o servidor já na sua versão de produção
```

Após completar estes passos, a aplicação deverá estar a correr no seu ambiente local!

## 📝 Contribuição

Feedbacks, questões e pull requests são sempre bem-vindos.

## 📜 Licença

Este projecto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por **João Nuno** e **Pedro Elias**.
