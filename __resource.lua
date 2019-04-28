client_scripts {
    "@wtf_characters/lib/api.lua",
    "@wtf_redis/lib/redis.lua",
    "lib/db.lua",
    "lib/lib.lua",
    "client/client.lua"
}

ui_page "ui-build/index.html"

files {
    "ui-build/main.chunk.js",
    "ui-build/bundle.js",
    "ui-build/2.chunk.js",
    "ui-build/index.html"
}

dependencies {
    "wtf_characters",
    "wtf_redis"
}
