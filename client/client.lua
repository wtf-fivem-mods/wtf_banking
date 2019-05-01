local function sendNUIBalances(bankBalance, cashBalance)
    SendNUIMessage(
        {
            {type = "setBankBalance", balance = bankBalance},
            {type = "setCashBalance", balance = cashBalance}
        }
    )
end

local function onReceiveTransfer(data)
    local amount = tonumber(data.amount)
    local character = WTF.GetCharacter()
    local balance = GetBalance(character, "cash")
    SendNUIMessage({type = "setCashBalance", balance = balance})

    local message = "Received from <b>" .. tostring(data.fromUID) .. "</b>"
    SendNUIMessage({type = "addToHUD", hudType = "credit", amount = amount, message = message})
end

WTF.OnCharacterSelect(
    function(character)
        local bankBalance = GetBalance(character, "bank")
        local cashBalance = GetBalance(character, "cash")
        sendNUIBalances(bankBalance, cashBalance)

        WTF.RegisterCharacterEvent("wtf_banking:receiveTransfer", onReceiveTransfer)
    end
)

Citizen.CreateThread(
    function()
        -- SetNuiFocus(false, false) -- debug reset on load

        while true do
            Citizen.Wait(1)

            if IsControlJustPressed(0, Keys.PAGEUP) then
                SetNuiFocus(true, true)
                SendNUIMessage({type = "open"})
            end
        end
    end
)

RegisterNUICallback(
    "dismiss",
    function(_, cb)
        cb("ok")
        SetNuiFocus(false, false)
    end
)

local function onSendDeposit(character, amount)
    local cashBalance, bankBalance =
        MakeTransfer {
        amount = tonumber(amount),
        fromUID = character.uid,
        fromAccount = "cash",
        toUID = character.uid,
        toAccount = "bank"
    }
    sendNUIBalances(bankBalance, cashBalance)
end

RegisterNUICallback(
    "sendDeposit",
    function(data, cb)
        cb("ok")
        SetNuiFocus(false, false)

        local c = WTF.GetCharacter()
        onSendDeposit(c, data.amount)
    end
)

local function onSendWithdraw(character, amount)
    local bankBalance, cashBalance =
        MakeTransfer {
        amount = tonumber(amount),
        fromUID = character.uid,
        fromAccount = "bank",
        toUID = character.uid,
        toAccount = "cash"
    }
    sendNUIBalances(bankBalance, cashBalance)
end

RegisterNUICallback(
    "sendWithdraw",
    function(data, cb)
        cb("ok")
        SetNuiFocus(false, false)

        local c = WTF.GetCharacter()
        onSendWithdraw(c, data.amount)
    end
)

local function onSendTransfer(character, payeeUID, amount)
    local balance =
        MakeTransfer {
        amount = tonumber(amount),
        fromUID = character.uid,
        fromAccount = "cash",
        toUID = tonumber(payeeUID),
        toAccount = "cash"
    }
    SendNUIMessage({type = "setCashBalance", balance = balance})

    local message = "Transferred to <b>" .. tostring(payeeUID) .. "</b>"
    SendNUIMessage({type = "addToHUD", hudType = "debit", amount = amount, message = message})

    local data = {fromUID = character.uid, amount = amount}
    WTF.TriggerCharacterEvent(payeeUID, "wtf_banking:receiveTransfer", data)
end

RegisterNUICallback(
    "sendTransfer",
    function(data, cb)
        cb("ok")
        SetNuiFocus(false, false)

        local c = WTF.GetCharacter()
        onSendTransfer(c, data.payee, data.amount)
    end
)
