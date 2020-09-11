.PHONY: env run
.DEFAULT: env

SHELL := /bin/bash

env:
	@bundle install

run:
	@bundle exec jekyll serve 
