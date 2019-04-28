Citizen.CreateThread(
    function()
        local character = WTF.WaitForCharacter()
        SendNUIMessage({type = "setBalance", balance = 1337})
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
    print("onSendDeposit: " .. character.firstName .. " " .. character.lastName .. " - " .. tostring(amount))
    -- print(string.format("onSendDeposit: %s %s - %d", character.firstName, character.lastName, amount))
end

function onSendWithdraw(character, amount)
    print("onSendWithdraw: " .. character.firstName .. " " .. character.lastName .. " - " .. tostring(amount))
    -- print(string.format("onSendWithdraw: %s %s - %d", character.firstName, character.lastName, amount))
end

function onSendTransfer(character, amount, payee)
    print(
        "onSendTransfer: " ..
            character.firstName .. " " .. character.lastName .. " - " .. tostring(amount) .. " to " .. payee
    )
    -- print(string.format("onSendWithdraw: %s %s - %d", character.firstName, character.lastName, amount))
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

RegisterNUICallback(
    "sendWithdraw",
    function(data, cb)
        cb("ok")
        SetNuiFocus(false, false)

        local c = WTF.GetCharacter()
        onSendWithdraw(c, data.amount)
    end
)

RegisterNUICallback(
    "sendTransfer",
    function(data, cb)
        cb("ok")
        SetNuiFocus(false, false)

        local c = WTF.GetCharacter()
        onSendTransfer(c, data.amount, data.payee)
    end
)
