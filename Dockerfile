FROM fusuf/whatsasena:latest

RUN git clone https://github.com/DrkBotBase/MyBot_V1 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=America/Bogota
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
