DB = {}

local key = Redis.makeKeyFn("wtf_banking")

function DB.GetBalance(uid, account)
    return Redis.get(key(uid, account))
end

function DB.IncrementBalance(uid, account, amount)
    return Redis.incrby(key(uid, account), amount)
end
