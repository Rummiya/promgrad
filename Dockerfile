WORKDIR /front

COPY . .

CMD npm install

CMD npm run build

COPY ./dist /usr/share/nginx/html

CMD npx serve