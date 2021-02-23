import * as alt from 'alt';

let blackoutEnabled = false;

export function updatePlayerBlackout(player) {
    if (!player) {
        return;
    }

    if (!player.valid) {
        return;
    }

    alt.emitClient(player, 'transition:Blackout', blackoutEnabled);
}

export function toggleBlackoutStatus() {
    alt.emitClient(null, 'transition:Blackout', !blackoutEnabled);
    blackoutEnabled = !blackoutEnabled;
    return blackoutEnabled;
}