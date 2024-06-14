import AppPreferences from "./AppPreferences";
import { audio } from "./assets/audio/Audio";


class RoomAudio{
    _audio;
    _appPref = AppPreferences;

    constructor(){
        this._audio = audio();

        this.mute(this._appPref.getLocalPref().sound.enabled);
    }

    setVolume(volume){
        this._appPref.getLocalPref().sound.volume = volume;
        return this._appPref;
    }
    mute(condition){
        this._appPref.getLocalPref().sound.enabled = condition;
        Object.values(this._audio)
        .forEach(audio => audio.muted = !condition);

        return this._appPref;
    }
    getAudio(){
        return this._audio;
    }
    getSoundEnabled(){
        return this._appPref.getLocalPref().sound.enabled;
    }


}

export default new RoomAudio();