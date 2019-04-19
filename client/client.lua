
Citizen.CreateThread(function()
    SetNuiFocus(false, false) -- debug reset on load

    while true do
        Citizen.Wait(1)

        if IsControlJustPressed(0, Keys.PAGEUP) then
            SetNuiFocus(true, true)
            SendNUIMessage({type = "open"})
        end
    end
end)

RegisterNUICallback('dismiss', function()
    SetNuiFocus(false, false)
end)