FROM ghost:latest

RUN cd /var/lib/ghost
RUN mkdir content && cd content && mkdir themes && cd themes && mkdir casper

COPY ./blog/content/themes/casper /var/lib/ghost/content/themes/casper