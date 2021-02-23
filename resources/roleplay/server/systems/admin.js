import * as chat from '../chat/chat.js';
import * as systemsBlackout from '../systems/blackout.js';

chat.registerRankedCmd('blackout', AdminFlags.MAX, (player, arg) => {
    systemsBlackout.toggleBlackoutStatus() ? player.send('Blackout enabled.') : player.send('Blackout disabled.');
});