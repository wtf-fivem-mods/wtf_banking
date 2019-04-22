PWD := $(shell echo %cd%)

rwildcard=$(foreach d,$(wildcard $1*),$(call rwildcard,$d/,$2) $(filter $(subst *,%,$2),$d))
UI_CODE = $(call rwildcard, ui-src/src, *)
UI_CODE += $(wildcard ui-src/*.*)
SOURCES = $(wildcard *.* client/*)
SOURCES := $(filter-out README.md, $(SOURCES))

README.md: $(SOURCES) ui-build/bundle.js
	-robocopy . //fivem.sszt.ml/server-data/resources/[wtf]/wtf_banking /MIR /FFT /Z /XA:H /W:5 \
		/XD "${PWD}\.git" \
			"${PWD}\ui-src"
	copy /b README.md +,,

ui-build/bundle.js: $(UI_CODE)
	cd ui-src && yarn build