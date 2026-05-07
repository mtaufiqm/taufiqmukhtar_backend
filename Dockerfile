FROM node:22 AS web

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma generate
RUN npx tsc

CMD ["node","./dist/web/web.js"]