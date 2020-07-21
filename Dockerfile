# Production Build

# Stage 1: Build react client
FROM node:10.16-alpine as client

# Working directory be app
WORKDIR /usr/app/client/

COPY client/package*.json ./

# Install dependencies
RUN yarn install

# copy local files to app folder
COPY client/ ./

RUN yarn build

# Stage 2 : Build Server

FROM node:10.16-alpine

# WORKDIR /usr/src/app/
# COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/src/app/server/
COPY server/package*.json ./
RUN npm install 
COPY server/ ./

# Copy build from client to server
WORKDIR /usr/src/app/
COPY --from=client /usr/app/client/build/ ./server/client/build/

# Set PORT, expose and start app
WORKDIR /usr/src/app/server/
ENV PORT 8080

EXPOSE 8080

CMD ["npm", "start"]