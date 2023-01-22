FROM node:14-alpine

# Setup App
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Install OpenSSH
RUN apk add --no-cache openssh
RUN apk add sudo

# Add a new user and set a password
RUN adduser -D admin

RUN echo "admin:tshirt123" | chpasswd

RUN /usr/sbin/sshd -D &

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
EXPOSE 22 3000