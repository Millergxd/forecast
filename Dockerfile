FROM node
ARG dir
WORKDIR ${dir}
COPY ./${dir}/package.json /${dir}
COPY ./${dir}/package-lock.json /${dir}
RUN npm install
