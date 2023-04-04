FROM node:16-alpine
WORKDIR /app
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
