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
    function()
        SetNuiFocus(false, false)
    end
)

function onSendDeposit(character, amount)
    print("onSendDeposit: " .. character.firstName .. " " .. character.lastName .. " - " .. tostring(amount))
    -- print(string.format("onSendDeposit: %s %s - %d", character.firstName, character.lastName, amount))
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
