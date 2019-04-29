DB = {}

local key = Redis.makeKeyFn("wtf_banking")

function DB.GetBalance(uid, account)
    return Redis.get(key(uid, account))
end

function DB.IncrementBalance(uid, account, amount)
    return Redis.incrby(key(uid, account), amount)
end

function DB.DecrementBalance(uid, account, amount)
    return Redis.decrby(key(uid, account), amount)
end

function DB.MultiTransferFromTo(fromUID, toUID, account, amount)
    Redis.multi({pipeline = false})
    Redis.decrby(key(fromUID, account), amount)
    Redis.incrby(key(toUID, account), amount)
    return Redis.exec()
end
