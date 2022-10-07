import { keyActions } from '../slice/key-slice'

export const generateAndRegenerateKeysAction = () => {
  return async (dispatch, getState) => {
    const store = getState()
    const {isTestMode, user } = store.key

    try {
      dispatch(keyActions.setKeyLoadingTrue())
      setTimeout(() => {
        dispatch(keyActions.setKeyLoadingFalse());
        if(isTestMode){
          dispatch(
            keyActions.setUser({
              ...user,
              testApplicationKey: "sfvbjsbvfuysbgf875ty87354y38",
            })
          );
        }else {
          dispatch(
            keyActions.setUser({
              ...user,
              liveApplicationKey: "uhsgbsjgreruigb48745yt84y7thjebej",
            })
          );
        }
      }, 2000)
      dispatch(keyActions.setShowCredentials(false))
    } catch (err) {
      console.log(err);
    }
  };
};