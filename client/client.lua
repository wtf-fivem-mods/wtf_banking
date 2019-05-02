---
--- Main loop
---
Citizen.CreateThread(
    function()
        -- SetNuiFocus(false, false) -- debug reset on load
        local character = WTF.WaitForCharacter()
        UpdateBalances(character)

        -- Register callback if character changes
        WTF.OnCharacterSelect(UpdateBalances)

        while true do
            Citizen.Wait(5)

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

---
--- DEPOSIT
---

local function onSendDeposit(character, amount)
    if amount > GetBalance(character, "cash") then
        DrawErrorNotification("Insufficient Cash", string.format("Unable to deposit ~g~$%d", amount))
        return
    end
    local cashBalance, bankBalance =
        MakeTransfer {
        amount = amount,
        fromUID = character.uid,
        fromAccount = "cash",
        toUID = character.uid,
        toAccount = "bank"
    }
    SendNUIBalances(bankBalance, cashBalance)
end

RegisterNUICallback(
    "sendDeposit",
    function(data, cb)
        cb("ok")
        SetNuiFocus(false, false)

        local c = WTF.GetCharacter()
        onSendDeposit(c, tonumber(data.amount))
    end
)

---
--- WITHDRAW
---

local function onSendWithdraw(character, amount)
    if amount > GetBalance(character, "bank") then
        DrawErrorNotification("Insufficient Funds", string.format("Unable to withdraw ~g~$%d", amount))
        return
    end
    local bankBalance, cashBalance =
        MakeTransfer {
        amount = amount,
        fromUID = character.uid,
        fromAccount = "bank",
        toUID = character.uid,
        toAccount = "cash"
    }
    SendNUIBalances(bankBalance, cashBalance)
end

RegisterNUICallback(
    "sendWithdraw",
    function(data, cb)
        cb("ok")
        SetNuiFocus(false, false)

        local c = WTF.GetCharacter()
        onSendWithdraw(c, tonumber(data.amount))
    end
)

---
--- SEND TRANSFER
---

local function onSendTransfer(character, payeeUID, amount)
    if amount > GetBalance(character, "cash") then
        DrawErrorNotification("Insufficient Cash", string.format("Unable to transfer ~g~$%d", amount))
        return
    end
    local balance =
        MakeTransfer {
        amount = amount,
        fromUID = character.uid,
        fromAccount = "cash",
        toUID = payeeUID,
        toAccount = "cash"
    }
    SendNUIMessage({type = "setCashBalance", balance = balance})

    local payee = WTF.WaitForCharacter(payeeUID)
    local message = string.format("Transferred to %d: <b>%s %s</b>", payeeUID, payee.firstName, payee.lastName)
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
        onSendTransfer(c, tonumber(data.payee), tonumber(data.amount))
    end
)

---
--- RECEIVE TRANSFER
---

local function onReceiveTransfer(data)
    local amount = tonumber(data.amount)
    local character = WTF.GetCharacter()
    local balance = GetBalance(character, "cash")
    SendNUIMessage({type = "setCashBalance", balance = balance})

    local message = "Received from <b>" .. tostring(data.fromUID) .. "</b>"
    SendNUIMessage({type = "addToHUD", hudType = "credit", amount = amount, message = message})
end

WTF.RegisterCharacterEvent("wtf_banking:receiveTransfer", onReceiveTransfer)
