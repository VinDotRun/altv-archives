import * as alt from 'alt';
import * as native from 'natives';

alt.log('Loaded: client->systems->blackout.js');

alt.onServer('transition:Blackout', (newStatus) => {
    native.setArtificialLightsState(newStatus);
});