DB = {}

local key = Redis.makeKeyFn("wtf_banking")

function DB.GetBalance(uid, account)
    return Redis.get(key(uid, account))
end

function DB.MultiTransfer(options)
    Redis.multi({pipeline = false})
    Redis.decrby(key(options.fromUID, options.fromAccount), options.amount)
    Redis.incrby(key(options.toUID, options.toAccount), options.amount)
    return Redis.exec()
end
