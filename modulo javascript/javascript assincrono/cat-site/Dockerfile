FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app/


COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN npm install 


ENTRYPOINT ["/entrypoint.sh"]


EXPOSE 3000

CMD ["npm", "run", "start"]