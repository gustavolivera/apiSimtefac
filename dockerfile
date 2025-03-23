FROM node:18

WORKDIR /usr/src/app

# Copie os arquivos de definição de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Compile o projeto
RUN npm run build

# Expõe a porta da aplicação
EXPOSE 444

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]