export const SIGN_IN = 'SIGN-IN';
export const SIGN_OUT = 'SIGN-OUT'

export function signIn(userId){
  return {
    type: SIGN_IN,
    userId
  }
}

export function signOut () {
  return {
    type: SIGN_OUT
  }
}
