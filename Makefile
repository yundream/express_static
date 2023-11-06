ecr=016355928008.dkr.ecr.ap-northeast-2.amazonaws.com/joinc/hello-world
imgname=joinc/hello-world
ver=0.1

build:
	docker build -t $(imgname):latest -t $(imgname):$(ver) .

deploy:
	aws ecr get-login-password --region ap-northeast-2 |docker login --username AWS --password-stdin $(ecr)
	docker tag $(imgname):$(ver) $(ecr):$(ver)
	docker tag $(imgname):latest $(ecr):latest
	docker push $(ecr):$(ver)
	docker push $(ecr):latest
