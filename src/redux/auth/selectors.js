export const selectIsLogedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectErrorLogIn = state => state.auth.errorLogIn;

export const selectErrorRegister = state => state.auth.errorRegister;
