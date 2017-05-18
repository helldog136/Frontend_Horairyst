#
# Horairyst_Frontend Dockerfile
#

# Pull base image.
FROM ubuntu:14.04


MAINTAINER Duncan De Weireld <duncan.deweireld@student.umons.ac.be>


# Set environment variables.
ENV HOME /root

RUN apt-get update && \
    apt-get install -y \
    build-essential \
    node \
    npm
RUN rm -rf /var/lib/apt/lists/*

COPY . /app
WORKDIR /app

EXPOSE 80 3000

ENTRYPOINT ["npm"]
CMD ["start"]
