# syntax=docker/dockerfile:1

FROM node:latest
ENV DB_USERNAME=admin
ENV DB_PASSWORD=admin
ENV MONGODB_URI=mongodb+srv://<username>:<password>@ephemories.ldmxzfv.mongodb.net/?retryWrites=true&w=majority&appName=ephemories
ENV NODE_ENV=development
WORKDIR /usr/app
COPY . .
RUN npm install
CMD ["ts-node", "src/index.ts"]
EXPOSE 3001