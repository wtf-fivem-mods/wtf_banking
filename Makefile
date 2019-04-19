PWD := $(shell echo %cd%)

rwildcard=$(foreach d,$(wildcard $1*),$(call rwildcard,$d/,$2) $(filter $(subst *,%,$2),$d))
UI_CODE = $(call rwildcard, ui/code/src, *)
SOURCES = $(wildcard *.* client/*)
SOURCES := $(filter-out README.md, $(SOURCES))
UI_BUILD = ui/build/bundle.js

README.md: $(SOURCES) $(UI_BUILD)
	-robocopy . //fivem.sszt.ml/server-data/resources/[wtf]/wtf_banking /MIR /FFT /Z /XA:H /W:5 \
		/XD "${PWD}\.git" \
			"${PWD}\ui\code"
	copy /b README.md +,,

$(UI_BUILD): $(UI_CODE)
	cd ui/code && npm run build