import { AsyncStorage } from 'react-native';

export const saveToken = async function(profile) {
    try{
        if(profile){
            let str = JSON.stringify(profile);
            await AsyncStorage.getItem('user.profile',str);
            if(profile.token) {
                await AsyncStorage.getItem('user.token',profile.token);
            }
        }
    }catch(e) {
        if(__DEV__) console.log('auth save store has error: ' + e)
    }
}