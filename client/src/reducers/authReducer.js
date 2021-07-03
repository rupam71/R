export default function (state = '' , action) { 
      switch(action.type) {
          case 'SIGN_UP' : return action.payload || false  
          case 'SIGN_UP_ERROR': return action.payload
          case 'LOGIN': return action.payload
          case 'LOGIN_ERROR': return action.payload
          case 'LOGOUT': return action.payload
          default : return state;
      }
  }
  
  // if empty string, than false