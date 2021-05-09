build-dev:
	docker build -t pirate_translator_dev --build-arg BUILD_WORKFLOW=dev .

build-prod:
	docker build -t pirate_translator_prod --build-arg BUILD_WORKFLOW=prod .

run-dev: build-dev
	docker run -d -p 3000:3000 pirate_translator_dev

run-prod: build-prod
	docker run -d -p 5000:5000 pirate_translator_prod

push-prod-dh: build-prod
	docker tag pirate_translator_prod docker.io/rpparas/pirate_translator
	docker push docker.io/rpparas/pirate_translator

run-prod-dh:
	docker pull docker.io/rpparas/pirate_translator
	docker run -d -p 5000:5000 docker.io/rpparas/pirate_translator

prettier:
	npx prettier --write "**/*.(js|ts|tsx|css)"

list-translators:
	curl -sL https://funtranslations.com/api/\#all | grep "^      http.*\.json$" | grep -oP '(?<=translate/).*(?=.json)' | uniq | sort
