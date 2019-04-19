PWD := $(shell echo %cd%)

rwildcard=$(foreach d,$(wildcard $1*),$(call rwildcard,$d/,$2) $(filter $(subst *,%,$2),$d))
UI_CODE = $(call rwildcard, ui/code/src, *)
UI_BUILD = ui/build/bundle.js

$(UI_BUILD): $(UI_CODE)
	cd ui/code && npm run build