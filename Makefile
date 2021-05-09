build-dev:
	docker build -t pirate_translator_dev --build-arg BUILD_WORKFLOW=dev .

build-prod:
	docker build -t pirate_translator_prod --build-arg BUILD_WORKFLOW=prod .

run-dev: build-dev
	docker run -d -p 3000:3000 pirate_translator_dev

run-prod: build-prod
	docker run -d -p 5000:5000 pirate_translator_prod

prettify:
	npx prettier --write "**/*.(js|tsx|css)"
