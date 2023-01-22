FROM node:14-alpine

# Setup App
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Install OpenSSH
RUN apk update && apk add openssh

# Add a new user and set a password
RUN adduser -D admin && \
    echo "admin:tshirt123" | chpasswd

# Allow the new user to access the container via SSH
RUN echo 'admin ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

EXPOSE 22 3000

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]