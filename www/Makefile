IPV4=`hostname -I | cut -d' ' -f1`

build:
	hugo
	rsync -rvh ./public/ /var/www/senpai.systems/ --delete

clean:
	rm -rf ./public

dev:
	hugo server --bind $(IPV4) --buildDrafts

re: clean build
