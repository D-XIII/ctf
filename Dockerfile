FROM node:14-alpine

# add yarn
RUN apk add yarn
# Setup App
COPY ./app /app
WORKDIR /app
RUN yarn
# RUN npm i next
# RUN npm install
# COPY . .

# Install OpenSSH
RUN apk add --no-cache openssh
RUN apk add sudo

# Create the user and set a password
RUN adduser -D squewe
RUN echo "squewe:azertyuiop123123123qwerty" | chpasswd

# Create the ssh directory and set the correct permissions
RUN mkdir /home/squewe/.ssh
RUN chmod 700 /home/squewe/.ssh
RUN chown -R squewe:squewe /home/squewe/.ssh

#moving flag to squewe's directory
# RUN mv /app/flag.txt /home/squewe/
COPY app/flag.txt /home/squewe/


# Uncomment the PermitPasswordAuthentication option in the ssh config file
RUN sed -i 's/#PermitPasswordAuthentication yes/PermitPasswordAuthentication yes/g' /etc/ssh/sshd_config

RUN /usr/sbin/sshd -D &

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
EXPOSE 22 3000