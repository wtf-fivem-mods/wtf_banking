local function onReceiveTransfer(data)
    local amount = tonumber(data.amount)
    local character = WTF.GetCharacter()
    local balance = GetBalance(character, "checking")
    SendNUIMessage({type = "setBalance", balance = balance})

    local message = "Received from <b>" .. tostring(data.fromUID) .. "</b>"
    SendNUIMessage({type = "addToHUD", hudType = "credit", amount = amount, message = message})
end

WTF.OnCharacterSelect(
    function(character)
        local balance = GetBalance(character, "checking")
        SendNUIMessage({type = "setBalance", balance = balance})

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

function onSendDeposit(character, amount)
    local balance = MakeDeposit(character, amount)
    SendNUIMessage({type = "setBalance", balance = balance})
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

function onSendWithdraw(character, amount)
    local balance = MakeWithdrawal(character, amount)
    SendNUIMessage({type = "setBalance", balance = balance})
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
    amount = tonumber(amount)
    payeeUID = tonumber(payeeUID)

    local balance = MakeTransfer(character, payeeUID, amount)
    SendNUIMessage({type = "setBalance", balance = balance})

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
