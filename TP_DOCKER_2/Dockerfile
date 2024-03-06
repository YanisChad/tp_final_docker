    FROM node:20-alpine
    WORKDIR /app
    COPY src/package*.json /app
    RUN npm install
    COPY . .
    EXPOSE 3000
    WORKDIR /app/src
    CMD ["node", "server.js"]
