.PHONY: env run
.DEFAULT: env

SHELL := /bin/bash

env:
	@bundle install --path vendor/bundle

run:
	@bundle exec jekyll serve --trace