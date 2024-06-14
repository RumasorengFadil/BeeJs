import { APP_PREF_LOCAL_KEY, APP_PREF_SESSION_KEY } from "./config";

class AppPreferences{
    _localPref;
    _sessionPref;

    constructor(){
        this._createLocalPref();
        this._createSessionPref();

        this._localPref = JSON.parse(localStorage.getItem(APP_PREF_LOCAL_KEY));
        this._sessionPref = JSON.parse(sessionStorage.getItem(APP_PREF_SESSION_KEY));
    }
    update(){
        localStorage.setItem(APP_PREF_LOCAL_KEY, JSON.stringify(this._localPref))
        sessionStorage.setItem(APP_PREF_SESSION_KEY, JSON.stringify(this._sessionPref))
    }
    getLocalPref(){
        return this._localPref;
    }
    getSessionPref(){
        return this._sessionPref;
    }
    _createLocalPref(){

        if(localStorage.getItem(APP_PREF_LOCAL_KEY)) return

        localStorage.setItem(APP_PREF_LOCAL_KEY, JSON.stringify(
            {
                sound : {
                    enabled : true,
                    volume : 1
                }
            }
        ))
    }
    _createSessionPref(){
        if(sessionStorage.getItem(APP_PREF_SESSION_KEY)) return

        sessionStorage.setItem(APP_PREF_SESSION_KEY, JSON.stringify(
            {
                round : null
            }
        ))
    }
}

export default new AppPreferences();
